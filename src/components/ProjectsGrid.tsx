import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  X,
  CursorClick,
  AndroidLogo,
  AppleLogo,
  DeviceMobile,
  CheckCircle,
  Code,
} from '@/components/slab'
import { projects, type Project } from '@/data/projects'
import { profile } from '@/data/profile'

/**
 * Projects, as one viewport in Home's bento language: the three shipped
 * builds as cards, each opening a detail window (screens, what was built,
 * the stack and the live links), plus a stack card and a GitHub card.
 */

const STACK_CHIPS = ['MongoDB', 'Express', 'React', 'Node.js', 'React Native', 'Tailwind CSS', 'JWT', 'REST APIs', 'Vercel', 'Render']

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- Card previews ---------- */

function ShotsPreview({ p }: { p: Project }) {
  const shots = p.shots.length > 1 ? [...p.shots, ...p.shots] : p.shots
  if (p.shots.length > 1) {
    return (
      <div className="bento__media bento__reel" aria-hidden="true">
        <div className="bento__reel-track">
          {shots.map((s, i) => (
            <span key={i} className="bento__shot">
              <img src={s.src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="bento__media pshot" aria-hidden="true">
      <img src={p.shots[0].src} alt="" loading="lazy" decoding="async" />
    </div>
  )
}

function MobilePreview() {
  return (
    <div className="bento__media pmobile" aria-hidden="true">
      <span className="pmobile__phone">
        <DeviceMobile size={44} weight="duotone" />
      </span>
      <span className="pmobile__stores">
        <span className="pmobile__store">
          <AndroidLogo size={16} weight="fill" />
          Android APK
        </span>
        <span className="pmobile__store">
          <AppleLogo size={16} weight="fill" />
          iOS TestFlight
        </span>
      </span>
    </div>
  )
}

/* ---------- Detail window ---------- */

function ProjectDetail({ p }: { p: Project }) {
  const [hero, ...rest] = p.shots
  return (
    <div className="ppanel ppanel--window pdetail" data-phone={p.phone || undefined}>
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{p.host}</span>
        </span>
        {p.links[0] && (
          <a className="ppanel__ext" href={p.links[0].href} target="_blank" rel="noopener noreferrer">
            Open
            <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="ppanel__scroll">
        <div className="pdetail__body">
          <header className="pdetail__head">
            <span className="pdetail__kicker">
              {p.kicker} · {p.year}
            </span>
            <h2 className="pdetail__title">{p.name}</h2>
            <p className="pdetail__summary">{p.summary}</p>
          </header>

          <div className="pdetail__grid">
            <div className="pdetail__media">
              {hero ? (
                <>
                  <img className="pdetail__hero" src={hero.src} alt={hero.alt} decoding="async" />
                  {rest.map((s) => (
                    <img key={s.src} className="pdetail__hero" src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                  ))}
                </>
              ) : (
                <div className="pdetail__placeholder">
                  <DeviceMobile size={64} weight="duotone" aria-hidden="true" />
                  <span>Install it on your phone with the links on the right.</span>
                </div>
              )}
            </div>

            <aside className="pdetail__side">
              <h3 className="pdetail__label">What I built</h3>
              <ul className="pdetail__points" role="list">
                {p.points.map((pt) => (
                  <li key={pt}>
                    <CheckCircle size={16} weight="duotone" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <h3 className="pdetail__label">Stack</h3>
              <ul className="pdetail__chips" role="list">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <h3 className="pdetail__label">Links</h3>
              <ul className="pdetail__links" role="list">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a className="pdetail__link" href={l.href} target="_blank" rel="noopener noreferrer">
                      <span>
                        <b>{l.label}</b>
                        {l.note && <small>{l.note}</small>}
                      </span>
                      <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Dialog ---------- */

function ProjectModal({ label, onClose, children }: { label: string; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      // Lenis smooth-scroll eats wheel events page-wide; let the dialog scroll natively.
      data-lenis-prevent
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

/* ---------- The page ---------- */

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Three apps, built and deployed.
        </h1>
        <p className="pgrid__lede">
          A live rental platform for a real business, its mobile app, and an inventory system. Open a card for the details and links.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              className="bento__card bento__card--btn bento__card--wide"
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <Marks logos={p.logos} />
                <span className="bento__kicker">{p.kicker}</span>
                <span className="bento__title">{p.name}</span>
                <span className="bento__desc">{p.summary}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              {p.shots.length ? <ShotsPreview p={p} /> : <MobilePreview />}
            </button>
          ))}

          <Link to="/skills" className="bento__card pstack">
            <span className="bento__head">
              <span className="bento__label">
                <span className="bento__icon">
                  <Code size={20} weight="fill" aria-hidden="true" />
                </span>
                <span className="bento__title">Stack</span>
              </span>
              <span className="bento__desc">What these are built with.</span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
            </span>
            <ul className="pstack__chips" role="list">
              {STACK_CHIPS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Link>

          <a className="bento__card pgit" href={profile.github} target="_blank" rel="noopener noreferrer">
            <span className="bento__head">
              <span className="bento__label">
                <span className="bento__icon pgit__icon">
                  <img src="/icons/ai/github.svg" alt="" width={20} height={20} />
                </span>
                <span className="bento__title">GitHub</span>
              </span>
              <span className="bento__desc">Source code and more.</span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
            </span>
            <span className="pgit__handle">{profile.handle}</span>
          </a>
        </div>
      </div>

      {open && (
        <ProjectModal label={open.name} onClose={close}>
          <ProjectDetail p={open} />
        </ProjectModal>
      )}
    </section>
  )
}
