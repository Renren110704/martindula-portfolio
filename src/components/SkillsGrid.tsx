import type { CSSProperties } from 'react'
import { Storefront, StackSimple, Medal } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * SkillsGrid - the Skills view on one glass sheet.
 *
 * Two bands, top to bottom: three highlights on a dark plate (the first thing
 * the eye lands on), then the technical skills from the resume as five cards,
 * each carrying the marks of what is in it. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, accent for the index.
 */

/* ---------- Highlights ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Built for a real business',
    body: "Anaia's Motorcycle Rental runs on a platform I built alone, with live GPS tracking.",
    Icon: Storefront,
    chips: ['Customer site', 'Admin panel', 'Mobile app'],
  },
  {
    index: '02',
    label: 'Full stack, end to end',
    body: 'Database, REST API, web and mobile front ends, auth and deployment.',
    Icon: StackSimple,
    chips: ['MERN', 'React Native', 'JWT', 'Vercel'],
  },
  {
    index: '03',
    label: "Consistent Dean's Lister",
    body: "Dean's List in 8 of 9 terms at National University - MOA, 1st Dean's Lister in 7.",
    Icon: Medal,
    chips: ['BSIT', 'Mobile & Web Apps'],
  },
]

/* ---------- Skill groups ---------- */

const ICONS: Record<string, string> = {
  JavaScript: '/icons/stack/javascript.svg',
  Java: '/icons/stack/openjdk.svg',
  SQL: '/icons/stack/mysql.svg',
  HTML: '/icons/stack/html5.svg',
  CSS: '/icons/stack/css3.svg',
  React: '/icons/ai/react.svg',
  'Tailwind CSS': '/icons/ai/tailwindcss.svg',
  'Node.js': '/icons/ai/nodedotjs.svg',
  'Express.js': '/icons/stack/express.svg',
  MongoDB: '/icons/stack/mongodb.svg',
  MySQL: '/icons/stack/mysql.svg',
  'Firebase Firestore': '/icons/stack/firebase.svg',
  'React Native': '/icons/ai/react.svg',
  'Android Studio': '/icons/stack/androidstudio.svg',
  'Git/GitHub': '/icons/stack/git.svg',
  Postman: '/icons/stack/postman.svg',
  Vite: '/icons/ai/vite.svg',
  Vercel: '/icons/stack/vercel.svg',
  Render: '/icons/stack/render.svg',
  Python: '/icons/stack/python.svg',
  Dart: '/icons/stack/dart.svg',
  Flutter: '/icons/stack/flutter.svg',
  'Spring Boot': '/icons/stack/springboot.svg',
  Unity: '/icons/stack/unity.svg',
}

/** Marks that are single-colour black silhouettes, flipped in dark mode. */
const MONO = new Set(['/icons/stack/express.svg', '/icons/stack/vercel.svg', '/icons/stack/render.svg', '/icons/stack/unity.svg', '/icons/stack/openjdk.svg'])

type Group = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  skills: string[]
}

const GROUPS: Group[] = [
  {
    index: '01',
    title: 'Languages',
    description: 'What I write every day, and what I learned on.',
    chip: 'Core',
    logos: [ICONS.JavaScript, ICONS.Java, ICONS.HTML],
    skills: ['JavaScript', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    index: '02',
    title: 'Frontend',
    description: 'Interfaces that work on every screen size.',
    chip: 'Web',
    logos: [ICONS.React, ICONS['Tailwind CSS'], ICONS.Vite],
    skills: ['React', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    index: '03',
    title: 'Backend & Databases',
    description: 'APIs, auth and data behind the apps I ship.',
    chip: 'Server',
    logos: [ICONS['Node.js'], ICONS['Express.js'], ICONS.MongoDB],
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MongoDB', 'MySQL', 'Firebase Firestore'],
  },
  {
    index: '04',
    title: 'Mobile & Tools',
    description: 'Building, testing and deploying.',
    chip: 'Ship',
    logos: [ICONS['React Native'], ICONS['Android Studio'], ICONS.Postman],
    skills: ['React Native', 'Android Studio', 'Git/GitHub', 'Postman', 'Vite', 'Vercel', 'Render'],
  },
  {
    index: '05',
    title: 'Familiar with',
    description: 'Used in coursework and side projects.',
    chip: 'Exploring',
    logos: [ICONS.Python, ICONS.Flutter, ICONS['Spring Boot']],
    skills: ['Python', 'Dart', 'Flutter', 'Spring Boot', 'Unity', 'GameMaker Studio'],
  },
]

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

/* ---------- The page ---------- */

export default function SkillsGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="skills-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Skills</span>
        <h1 className="pgrid__title" id="skills-title">
          The stack behind the projects.
        </h1>
        <p className="pgrid__lede">
          Mostly MongoDB, Express, React and Node.js on the web, and React Native on mobile.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Highlights</span>
            <h2 className="sgrid__method-title" id="method-title">
              Shipped. Full stack.
              <br />
              <span>And still learning.</span>
            </h2>
            <p className="sgrid__method-sub">
              Fourth-year BSIT, specializing in mobile and web applications.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} details`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Technical skills.</h2>
            <p className="sgrid__offers-sub">Grouped the way I use them.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {GROUPS.map((g) => (
              <li key={g.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={g.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{g.index} / 05</span>
                  </span>
                  <span className="bento__title">{g.title}</span>
                  <span className="bento__desc">{g.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{g.chip}</span>
                <ul className="sgrid__skills" role="list">
                  {g.skills.map((s) => (
                    <li key={s}>
                      {ICONS[s] && (
                        <img src={ICONS[s]} alt="" width={15} height={15} data-mono={MONO.has(ICONS[s]) ? '' : undefined} />
                      )}
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
