/**
 * Certifications and badges, as shown on the Credentials page (/credentials)
 * and counted on About.
 *
 * Files live in /public/credentials: certificates as a .webp image, the
 * original .pdf and optionally a small `-thumb.webp` preview (the card falls
 * back to the full image without one); badges as a square .png. To add one,
 * drop the files in and append an entry below.
 */

/** One certificate document: the image shown in the viewer, its card preview and its PDF. */
export type CertDoc = { title: string; img: string; thumb?: string; pdf?: string; when?: string }

export type Certification = {
  id: string
  title: string
  issuer: string
  when?: string
  /** One or more documents; a program with several modules lists each. */
  docs: CertDoc[]
  /** Public verification page, if the issuer has one. */
  verifyUrl?: string
}

export type Badge = {
  id: string
  title: string
  issuer: string
  when?: string
  img: string
  /** Credly (or similar) page for the badge. */
  verifyUrl?: string
}

const cert = (slug: string) => ({
  img: `/credentials/certs/${slug}.webp`,
  thumb: `/credentials/certs/${slug}-thumb.webp`,
  pdf: `/credentials/certs/${slug}.pdf`,
})

export const certifications: Certification[] = [
  {
    id: 'cisco-linux-unhatched',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy · NDG',
    when: 'Oct 2026',
    docs: [{ title: 'Linux Unhatched', ...cert('cisco-linux-unhatched') }],
  },
  {
    id: 'simplilearn-networking',
    title: 'Introduction to Computer Networking',
    issuer: 'Simplilearn SkillUp',
    when: 'Jul 2026',
    docs: [{ title: 'Introduction to Computer Networking', ...cert('simplilearn-computer-networking') }],
  },
  {
    id: 'cisco-packet-tracer',
    title: 'Packet Tracer courses (4)',
    issuer: 'Cisco Networking Academy',
    when: 'Jun 2025',
    docs: [
      { title: 'Getting Started with Cisco Packet Tracer', when: 'Jun 2025', ...cert('cisco-getting-started-packet-tracer') },
      { title: 'Introduction to Packet Tracer Exam', when: 'Jun 2025', ...cert('cisco-intro-packet-tracer-exam') },
      { title: 'Exploring Networking with Cisco Packet Tracer', when: 'Jun 2025', ...cert('cisco-exploring-networking') },
      { title: 'Exploring Internet of Things with Cisco Packet Tracer', when: 'Jun 2025', ...cert('cisco-exploring-iot') },
    ],
  },
  {
    id: 'tesda-css',
    title: 'Computer System Servicing NC II',
    issuer: 'TESDA Online Program',
    when: 'Mar 2023',
    docs: [
      { title: 'Introduction to Computer Systems Servicing', when: 'Mar 2023', ...cert('tesda-css-intro') },
      { title: 'Installing and Configuring Computer Systems', when: 'Mar 2023', ...cert('tesda-css-installing') },
      { title: 'Setting Up Computer Networks', when: 'Mar 2023', ...cert('tesda-css-networks') },
      { title: 'Setting Up Computer Servers', when: 'Mar 2023', ...cert('tesda-css-servers') },
      { title: 'Maintaining Computer Systems and Networks', when: 'Mar 2023', ...cert('tesda-css-maintaining') },
    ],
  },
  {
    id: 'palscon-2026',
    title: '16th PALSCON National Conference & 1st PH HR Expo',
    issuer: 'Seminar · PALSCON',
    when: 'Sep 2026',
    docs: [{ title: 'Certificate of Participation', ...cert('palscon-2026') }],
  },
]

export const badges: Badge[] = [
  {
    id: 'cisco-linux-unhatched',
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy · NDG',
    when: '2026',
    img: '/credentials/badges/cisco-linux-unhatched.png',
  },
  {
    id: 'cisco-intro-packet-tracer',
    title: 'Introduction to Packet Tracer',
    issuer: 'Cisco Networking Academy',
    when: '2025',
    img: '/credentials/badges/cisco-intro-packet-tracer.png',
  },
]
