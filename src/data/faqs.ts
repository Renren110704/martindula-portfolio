export type QA = { q: string; a: string }

/**
 * The questions a recruiter asks before they email. One list, used by the FAQ
 * accordion on the Contact view. Five questions, two or three sentences each:
 * the accordion sits in a fixed panel and more than that pushes the email row
 * off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What are you looking for?',
    a: 'Internship, entry-level and junior roles in software development or IT: full-stack and mobile development, IT support, systems and networking. I am a fourth-year BS Information Technology student at National University - MOA, graduating in 2027.',
  },
  {
    q: 'What are your main skills?',
    a: 'On the development side: MongoDB, Express, React, Node.js and React Native, with MySQL, Firebase and JWT auth, deployed on Vercel and Render. On the IT side: computer system servicing (TESDA NC II), networking with Cisco Packet Tracer, and Linux basics.',
  },
  {
    q: 'What have you shipped?',
    a: "Anaia's Motorcycle Rental, a live platform with a customer site, an admin panel, a React Native app and GPS fleet tracking, built as the sole developer. Also StockFlow, an inventory management system deployed on Vercel.",
  },
  {
    q: 'Where are you based?',
    a: 'Bacoor, Cavite, Philippines (GMT+8).',
  },
  {
    q: 'How do I reach you?',
    a: 'Use the form, or email martinlorenzdula@gmail.com directly. My code is on GitHub at github.com/Renren110704.',
  },
]
