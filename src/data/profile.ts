/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 *
 * Page-specific copy (projects, skills, FAQs) lives in the other files in
 * src/data/ and at the top of each view component.
 */

import { RocketLaunch, Medal, MapPin, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  github: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Martin Dula',
  firstName: 'Martin',
  handle: '@Renren110704',
  role: 'Full-stack developer',
  avatarSrc: '/profilepic.png',
  verifiedLabel: "Dean's Lister, National University - MOA",
  email: 'martinlorenzdula@gmail.com',
  location: 'Bacoor, Cavite, PH',
  github: 'https://github.com/Renren110704',
  stats: [
    { value: '3', label: 'Apps shipped', Icon: RocketLaunch },
    { value: '8 of 9', label: "Dean's List terms", Icon: Medal },
    { value: 'Cavite', label: 'PH · GMT+8', Icon: MapPin },
  ],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'I build web and mobile apps', line2: 'that ship.' },
  hero: {
    body:
      'Fourth-year IT student at National University - MOA, building full-stack apps with MongoDB, Express, React, Node.js and React Native. Looking for a full-stack developer internship.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Martin Dula',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/Renren110704', iconPath: '/icons/ai/github.svg' },
    { label: 'Email Martin', href: 'mailto:martinlorenzdula@gmail.com', iconPath: '/icons/email.svg' },
  ],
}
