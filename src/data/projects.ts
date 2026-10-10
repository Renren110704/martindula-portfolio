/**
 * The projects, straight from the resume. Screenshots live in
 * public/projects/ - swap in new ones any time (1440x900 works well).
 */

export type ProjectLink = { label: string; href: string; note?: string }

export type Project = {
  id: string
  name: string
  /** Small accent line above the title. */
  kicker: string
  year: string
  /** One-line card description. */
  summary: string
  /** The resume bullets, shown in the detail window. */
  points: string[]
  stack: string[]
  /** Marks shown on the card, from public/icons. */
  logos: string[]
  links: ProjectLink[]
  /** Screenshots for the detail window; the first one is the hero. */
  shots: { src: string; alt: string }[]
  /** Portrait phone screenshots: shown phone-sized instead of full width. */
  phone?: boolean
  /** Host shown in the detail window's address bar. */
  host: string
}

const REACT = '/icons/ai/react.svg'
const NODE = '/icons/ai/nodedotjs.svg'
const MONGO = '/icons/stack/mongodb.svg'
const EXPRESS = '/icons/stack/express.svg'
const VERCEL = '/icons/stack/vercel.svg'

export const projects: Project[] = [
  {
    id: 'anaias-web',
    name: "Anaia's Motorcycle Rental",
    kicker: 'Live client platform',
    year: '2026',
    summary:
      'A full-stack rental platform that replaced a Facebook-based booking process: a customer site, an admin panel and live GPS tracking.',
    points: [
      "Built a full-stack motorcycle rental web platform from scratch, replacing the business's manual Facebook-based booking process with an online system for browsing, booking, and managing rentals.",
      'Sole developer on the project; designed and implemented a custom SinoTrack GPS integration enabling real-time motorcycle tracking for fleet monitoring and security.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'SinoTrack GPS'],
    logos: [MONGO, EXPRESS, REACT, NODE],
    links: [
      { label: 'Customer site', href: 'https://anaiasmotorcyclerental.com', note: 'anaiasmotorcyclerental.com' },
      { label: 'Admin panel', href: 'https://anaiasmotorcycleadmin.online', note: 'anaiasmotorcycleadmin.online' },
    ],
    shots: [
      { src: '/projects/anaias-web.png', alt: "Anaia's Motorcycle Rental home page: 'Search, book and ride.'" },
      { src: '/projects/anaias-admin.png', alt: "Anaia's admin dashboard" },
    ],
    host: 'anaiasmotorcyclerental.com',
  },
  {
    id: 'anaias-mobile',
    name: "Anaia's Motorcycle Rental Mobile",
    kicker: 'React Native app',
    year: '2026',
    summary:
      'The same rental platform on Android and iOS: browse motorcycles, book, and manage rentals from a phone, synced with the web.',
    points: [
      "Developed the mobile version of the Anaia's Motorcycle Rental platform in React Native, letting customers browse available motorcycles, book rentals, and manage their bookings from their phones.",
      'Connected the app to the existing Express and MongoDB backend used by the web platform, so bookings and fleet data stay in sync across the website, admin panel, and mobile app.',
    ],
    stack: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    logos: [REACT, NODE, MONGO],
    links: [
      {
        label: 'Android APK',
        href: 'https://drive.google.com/file/d/1-7Wy5ESalvWSJxORPQthYuEYA9n-edeW/view?usp=sharing',
        note: 'Download from Google Drive',
      },
      { label: 'iOS TestFlight', href: 'https://testflight.apple.com/join/P7MSvgk6', note: 'testflight.apple.com/join/P7MSvgk6' },
    ],
    shots: [
      { src: '/projects/anaias-mobile.png', alt: "Anaia's Motorcycle Rental mobile" }
    ],
    phone: true,
    host: 'React Native · Android + iOS',
  },
  {
    id: 'stockflow',
    name: 'StockFlow',
    kicker: 'Inventory management system',
    year: '2026',
    summary:
      'A shared inventory system for products, storage locations, stock movements and purchase orders, with a dashboard and reports.',
    points: [
      'Built a full-stack inventory management web app that replaces manual stock records with a shared system for tracking products, storage locations, stock movements, and purchase orders, with a dashboard and reports.',
      'Implemented role-based access, email verification and Google sign-in, QR code labeling with camera scanning, low-stock email alerts, and CSV import/export; deployed on Vercel with a MongoDB Atlas database.',
    ],
    stack: ['MongoDB Atlas', 'Express', 'React', 'Node.js', 'Vercel'],
    logos: [MONGO, REACT, NODE, VERCEL],
    links: [
      { label: 'Live app', href: 'https://stockflow-ims-xi.vercel.app', note: 'stockflow-ims-xi.vercel.app' },
      { label: 'Source code', href: 'https://github.com/Renren110704/stockflow-ims', note: 'github.com/Renren110704/stockflow-ims' },
    ],
    shots: [
      { src: '/projects/stockflow.png', alt: 'StockFlow sign-in screen with an analytics preview' }, 
      { src: '/projects/stockflow-2.png', alt: 'StockFlow dashboard page' }
    ],
    
    host: 'stockflow-ims-xi.vercel.app',
  },
]
