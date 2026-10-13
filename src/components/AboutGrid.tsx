import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, GraduationCap, PaintBrush, UsersThree, Certificate, type Icon } from '@/components/slab'
import { profile } from '@/data/profile'
import { certifications, badges } from '@/data/credentials'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who I am on the left (the statement, the
 * four kinds of work with the marks of their tools, and a bar of quick
 * facts), and the record on the right - education, experience,
 * organizations, and a link through to the Credentials page for the
 * certifications and badges.
 */

const REACT = { src: '/icons/ai/react.svg', name: 'React' }
const NODE = { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' }
const MONGO = { src: '/icons/stack/mongodb.svg', name: 'MongoDB' }
const EXPRESS = { src: '/icons/stack/express.svg', name: 'Express' }
const TAILWIND = { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' }
const ANDROID = { src: '/icons/stack/androidstudio.svg', name: 'Android Studio' }
const FIREBASE = { src: '/icons/stack/firebase.svg', name: 'Firebase' }
const POSTMAN = { src: '/icons/stack/postman.svg', name: 'Postman' }
const MYSQL = { src: '/icons/stack/mysql.svg', name: 'MySQL' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const VERCEL = { src: '/icons/stack/vercel.svg', name: 'Vercel' }
const RENDER = { src: '/icons/stack/render.svg', name: 'Render' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Full-stack web apps', marks: [MONGO, EXPRESS, REACT, NODE, TAILWIND] },
  { index: '02', title: 'Mobile apps in React Native', marks: [REACT, ANDROID, FIREBASE] },
  { index: '03', title: 'REST APIs, auth and databases', marks: [NODE, EXPRESS, POSTMAN, MYSQL] },
  { index: '04', title: 'Deploying and shipping', marks: [GITHUB, VERCEL, RENDER] },
]

type Entry = { title: string; meta: string; when?: string; Icon: Icon }
type Group = { label: string; entries: Entry[] }

const RECORD: Group[] = [
  {
    label: 'Education',
    entries: [
      {
        title: 'National University - Mall of Asia',
        meta: "BS Information Technology, Mobile and Web Applications. Dean's Lister in 8 of 9 terms (1st Dean's Lister in 7).",
        when: 'Exp. 2027',
        Icon: GraduationCap,
      },
      {
        title: 'University of Perpetual Help System Dalta - Molino',
        meta: 'Senior High School, ICT · Consistent Honors Awardee',
        when: '2023',
        Icon: GraduationCap,
      },
    ],
  },
  {
    label: 'Experience',
    entries: [
      {
        title: 'Work Immersion (WIRCACA) - rezonate',
        meta: 'Animation immersion: character sketches and in-between frames for a studio short film.',
        when: 'May 2023',
        Icon: PaintBrush,
      },
    ],
  },
  {
    label: 'Organizations',
    entries: [
      { title: 'House of Vanguard - NU MOA', meta: '4th Year Representative', Icon: UsersThree },
      { title: 'JPCS - NU MOA', meta: 'Member', Icon: UsersThree },
    ],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Fourth-year IT student at National University - MOA, looking for a full-stack developer internship.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build apps people actually use.
            <span> From the database to the phone in your hand.</span>
          </p>

          <p className="agrid__note">
            I specialize in <strong>mobile and web applications</strong>. My biggest build so far is{' '}
            <a className="agrid__link" href="https://anaiasmotorcyclerental.com" target="_blank" rel="noopener noreferrer">
              Anaia&rsquo;s Motorcycle Rental
            </a>
            , a live platform I built alone for a rental business: a customer website, an admin panel, a React Native app and real-time GPS tracking for the fleet.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/badge-deans.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Dean&rsquo;s Lister</span>
                <span className="agrid__cell-meta">8 of 9 terms</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/ai/github.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub</span>
                <span className="agrid__cell-meta">{profile.handle}</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Lenis eats wheel events page-wide; let the record scroll natively. */}
        <div className="agrid__record" data-lenis-prevent>
          {RECORD.map((g) => (
            <section key={g.label} className="agrid__group" aria-label={g.label}>
              <h2 className="agrid__group-label">{g.label}</h2>
              <ul className="agrid__timeline" role="list">
                {g.entries.map(({ title, meta, when, Icon }) => (
                  <li key={title} className="agrid__entry">
                    <span className="agrid__entry-mark" aria-hidden="true">
                      <Icon size={20} weight="duotone" />
                    </span>
                    <span className="agrid__entry-copy">
                      <span className="agrid__entry-title">{title}</span>
                      <span className="agrid__entry-meta">{meta}</span>
                    </span>
                    {when && <span className="agrid__entry-when">{when}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="agrid__group" aria-label="Certifications and badges">
            <h2 className="agrid__group-label">Certifications</h2>
            <Link to="/credentials" className="agrid__entry agrid__entry--btn">
              <span className="agrid__entry-mark" aria-hidden="true">
                <Certificate size={20} weight="duotone" />
              </span>
              <span className="agrid__entry-copy">
                <span className="agrid__entry-title">Certifications and badges</span>
                <span className="agrid__entry-meta">
                  {certifications.length} certifications · {badges.length} {badges.length === 1 ? 'badge' : 'badges'}
                </span>
              </span>
              <span className="agrid__entry-end">
                <span className="agrid__entry-when">View all</span>
                <ArrowUpRight className="agrid__entry-go" size={14} weight="bold" aria-hidden="true" />
              </span>
            </Link>
          </section>
        </div>
      </div>
    </section>
  )
}
