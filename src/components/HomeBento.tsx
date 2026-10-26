import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Code,
  Medal,
  Stack,
  Briefcase,
  Globe,
  DeviceMobile,
  Database,
  Certificate,
  CloudArrowUp,
  SealCheck,
  UsersThree,
  GraduationCap,
} from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from content the portfolio already ships. Every card is
 * a link.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const PROJECT_SHOTS = ['/projects/anaias-web.png', '/projects/stockflow.png', '/projects/anaias-admin.png', '/projects/stockflow-2.png']

const OFFERS = [
  { Icon: Globe, title: 'Web apps', note: 'MongoDB, Express, React, Node.js' },
  { Icon: DeviceMobile, title: 'Mobile apps', note: 'React Native, Android Studio' },
  { Icon: Database, title: 'APIs and databases', note: 'REST, MongoDB, MySQL, Firestore' },
  { Icon: Certificate, title: 'IT and networking', note: 'Servicing NC II, Cisco, Linux' },
  { Icon: CloudArrowUp, title: 'Deployment', note: 'Vercel, Render, MongoDB Atlas' },
] as const

const RECORD = [
  { name: 'National University - MOA', role: 'BS IT, Mobile and Web Apps', work: 'Exp. 2027 · Dean’s Lister', Icon: GraduationCap },
  { name: 'rezonate', role: 'Work Immersion (WIRCACA)', work: 'Animation · May 2023', Icon: Briefcase },
  { name: 'House of Vanguard - NU MOA', role: '4th Year Representative', work: 'Organization', Icon: UsersThree },
  { name: 'TESDA', role: 'Computer System Servicing NC II', work: 'Certification', Icon: Medal },
  { name: 'JPCS - NU MOA', role: 'Member', work: 'Organization', Icon: UsersThree },
  { name: 'Cisco Networking Academy', role: 'Packet Tracer courses (4)', work: 'Certification', Icon: Medal },
]

const PHOTOS = [profile.avatarSrc, '/badge-deans.svg', '/home-bsit.svg']

const STACK = [
  { name: 'React', src: '/icons/ai/react.svg' },
  { name: 'Node.js', src: '/icons/ai/nodedotjs.svg' },
  { name: 'MongoDB', src: '/icons/stack/mongodb.svg' },
  { name: 'Express', src: '/icons/stack/express.svg' },
  { name: 'JavaScript', src: '/icons/stack/javascript.svg' },
  { name: 'Tailwind CSS', src: '/icons/ai/tailwindcss.svg' },
  { name: 'React Native', src: '/icons/ai/react.svg' },
  { name: 'MySQL', src: '/icons/stack/mysql.svg' },
  { name: 'Firebase', src: '/icons/stack/firebase.svg' },
  { name: 'Java', src: '/icons/stack/openjdk.svg' },
  { name: 'Git', src: '/icons/stack/git.svg' },
  { name: 'Postman', src: '/icons/stack/postman.svg' },
  { name: 'Vite', src: '/icons/ai/vite.svg' },
  { name: 'Vercel', src: '/icons/stack/vercel.svg' },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(STACK.length / 2)
  const toolRows = [STACK.slice(0, half), STACK.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects: the live screens drift upward on a looped track. */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="A live rental platform, its mobile app, and an inventory system." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((src, i) => (
              <span key={i} className="bento__shot">
                <img src={src} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="IT student at NU MOA, based in Cavite." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* The stack, two chip rows scrolling against each other. */}
      <Link to="/skills" className="bento__card bento__card--ai">
        <CardHead Icon={Code} title="Tech Stack" desc="What I build with." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.name}-${i}`} className="bento__chip">
                    <img src={n.src} alt="" width={15} height={15} />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Academics" desc="Dean’s List in 8 of 9 terms." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src="/badge-deans.svg" alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Dean&rsquo;s Lister
          </span>
        </div>
      </Link>

      <Link to="/skills" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Skills" desc="Development and IT fundamentals." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Education, experience, orgs and certs drifting up a clipped column. */}
      <Link to="/about" className="bento__card bento__card--quotes">
        <CardHead Icon={Briefcase} title="Experience" desc="Education, organizations and certifications." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...RECORD, ...RECORD].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <c.Icon size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
