import { useCallback, useRef, useState, type SyntheticEvent } from 'react'
import { ArrowUpRight, Certificate, CursorClick, Files, SealCheck } from '@/components/slab'
import { certifications, badges, type Certification, type Badge } from '@/data/credentials'
import Modal from '@/components/Modal'
import CredentialViewer, { type ViewerItem } from '@/components/CredentialViewer'

/**
 * Credentials - certifications and badges on one glass sheet.
 *
 * Badges first, as a row of plated tiles (they are the collectible part and
 * read at a glance), then the certificates as cards with a preview of the page
 * itself. Every item opens the real document in the dialog. The page scrolls,
 * so the lists can grow without anything being squeezed.
 */

const certItem = (c: Certification): ViewerItem => ({ ...c, kind: 'cert' })
const badgeItem = (b: Badge): ViewerItem => ({ ...b, docs: [{ title: b.title, img: b.img }], kind: 'badge' })

/** A missing thumbnail falls back to the full-size certificate image. */
const fallback = (full: string) => (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget
  if (!img.src.endsWith(full)) img.src = full
}

export default function CredentialsGrid() {
  const [open, setOpen] = useState<ViewerItem | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((item: ViewerItem, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(item)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid crgrid" aria-labelledby="credentials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Credentials</span>
        <h1 className="pgrid__title" id="credentials-title">
          Certifications and badges.
        </h1>
        <p className="pgrid__lede">
          Courses and programs I have completed, and the badges that came with them. Open any one to see the certificate.
        </p>
      </header>

      <div className="home__glass crgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click to view
        </span>

        <section className="crgrid__band" aria-labelledby="badges-title">
          <div className="crgrid__band-head">
            <h2 className="crgrid__band-title" id="badges-title">
              <SealCheck size={20} weight="duotone" aria-hidden="true" />
              Badges
            </h2>
            <span className="crgrid__count">{badges.length}</span>
          </div>
          <ul className="crgrid__badges" role="list">
            {badges.map((b) => (
              <li key={b.id}>
                <button
                  type="button"
                  className="crgrid__badge"
                  aria-haspopup="dialog"
                  onClick={(e) => show(badgeItem(b), e.currentTarget)}
                >
                  <span className="crgrid__badge-art">
                    <img src={b.img} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="crgrid__badge-title">{b.title}</span>
                  <span className="crgrid__meta">
                    {b.issuer}
                    {b.when && ` · ${b.when}`}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="crgrid__band" aria-labelledby="certs-title">
          <div className="crgrid__band-head">
            <h2 className="crgrid__band-title" id="certs-title">
              <Certificate size={20} weight="duotone" aria-hidden="true" />
              Certifications
            </h2>
            <span className="crgrid__count">{certifications.length}</span>
          </div>
          <ul className="crgrid__certs" role="list">
            {certifications.map((c) => {
              const cover = c.docs[0]
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    className="crgrid__cert"
                    aria-haspopup="dialog"
                    onClick={(e) => show(certItem(c), e.currentTarget)}
                  >
                    <span className="crgrid__cert-shot">
                      <img
                        src={cover.thumb ?? cover.img}
                        onError={fallback(cover.img)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      {c.docs.length > 1 && (
                        <span className="crgrid__cert-pages">
                          <Files size={13} weight="bold" aria-hidden="true" />
                          {c.docs.length} certificates
                        </span>
                      )}
                    </span>
                    <span className="crgrid__cert-copy">
                      <span className="crgrid__cert-title">{c.title}</span>
                      <span className="crgrid__meta">
                        {c.issuer}
                        {c.when && ` · ${c.when}`}
                      </span>
                    </span>
                    <ArrowUpRight className="crgrid__go" size={15} weight="bold" aria-hidden="true" />
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>

      {open && (
        <Modal label={open.title} onClose={close}>
          <CredentialViewer item={open} />
        </Modal>
      )}
    </section>
  )
}
