import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, CaretLeft, CaretRight, FilePdf, SealCheck } from '@/components/slab'
import type { CertDoc } from '@/data/credentials'

/**
 * The inside of the credential dialog: issuer and title on top, the document
 * itself in the middle, and - when a program has several module certificates -
 * a strip of thumbnails to flip between them (arrow keys work too).
 */

export type ViewerItem = {
  title: string
  issuer: string
  when?: string
  docs: CertDoc[]
  verifyUrl?: string
  /** Badges are square art, certificates are landscape pages. */
  kind: 'cert' | 'badge'
}

export default function CredentialViewer({ item }: { item: ViewerItem }) {
  const [i, setI] = useState(0)
  // The page that is sliding out, and which way the move goes (1 = next).
  const [leaving, setLeaving] = useState<{ doc: CertDoc; dir: 1 | -1 } | null>(null)
  // Direction of the last move; 0 until the visitor first pages, so opening
  // the dialog fades in rather than slides.
  const [dir, setDir] = useState<0 | 1 | -1>(0)
  const doc = item.docs[i]
  const many = item.docs.length > 1
  const count = item.docs.length

  const goTo = useCallback(
    (next: number, d: 1 | -1) => {
      if (next === i) return
      setLeaving({ doc: item.docs[i], dir: d })
      setDir(d)
      setI(next)
    },
    [item.docs, i],
  )
  const step = useCallback((d: 1 | -1) => goTo((i + d + count) % count, d), [goTo, i, count])

  useEffect(() => {
    if (!many) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [many, step])

  // Warm the full-size pages so the next one never slides in blank.
  useEffect(() => {
    if (!many) return
    item.docs.forEach((d) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = d.img
    })
  }, [many, item.docs])

  const when = doc.when ?? item.when

  return (
    <div className="cview" data-kind={item.kind}>
      <header className="cview__head">
        <span className="cview__copy">
          <span className="cview__kicker">
            {item.issuer}
            {when && ` · ${when}`}
          </span>
          <h2 key={i} className="cview__title" data-dir={dir || undefined}>
            {many ? doc.title : item.title}
          </h2>
          {many && (
            <span className="cview__sub">
              {item.title} · {i + 1} of {item.docs.length}
            </span>
          )}
        </span>
        <span className="cview__actions">
          {doc.pdf && (
            <a className="cview__btn" href={doc.pdf} target="_blank" rel="noopener noreferrer">
              <FilePdf size={16} weight="duotone" aria-hidden="true" />
              Open PDF
            </a>
          )}
          {item.verifyUrl && (
            <a className="cview__btn cview__btn--accent" href={item.verifyUrl} target="_blank" rel="noopener noreferrer">
              <SealCheck size={16} weight="duotone" aria-hidden="true" />
              Verify
              <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
            </a>
          )}
        </span>
      </header>

      <div className="cview__stage">
        {many && (
          <button
            type="button"
            className="cview__nav cview__nav--prev"
            aria-label="Previous certificate"
            onClick={() => step(-1)}
          >
            <CaretLeft size={18} weight="bold" />
          </button>
        )}
        {leaving && (
          <img
            key={`out-${leaving.doc.img}`}
            className="cview__img cview__img--out"
            data-dir={leaving.dir}
            src={leaving.doc.img}
            alt=""
            aria-hidden="true"
            onAnimationEnd={() => setLeaving(null)}
          />
        )}
        <img
          key={doc.img}
          className="cview__img"
          data-dir={dir || undefined}
          src={doc.img}
          alt={`${doc.title} - ${item.issuer}`}
          decoding="async"
        />
        {many && (
          <button
            type="button"
            className="cview__nav cview__nav--next"
            aria-label="Next certificate"
            onClick={() => step(1)}
          >
            <CaretRight size={18} weight="bold" />
          </button>
        )}
      </div>

      {many && (
        <ul className="cview__thumbs" role="list">
          {item.docs.map((d, n) => (
            <li key={d.img}>
              <button
                type="button"
                className="cview__thumb"
                aria-label={d.title}
                aria-current={n === i || undefined}
                onClick={() => goTo(n, n > i ? 1 : -1)}
              >
                <img src={d.thumb ?? d.img} alt="" loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
