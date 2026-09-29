// Single source of truth for MobileTech MSP business details, services,
// customers and download links. Edit here — every page reads from this file.

export const company = {
  name: 'MobileTech MSP',
  tagline: 'Computer & IT Services',
  phone: '386-401-9691',
  phoneHref: 'tel:+13864019691',
  email: 'info@mobiletechmsp.com',
  city: 'Daytona Beach, FL',
  serviceArea: ['Daytona Beach', 'Holly Hill', 'Ormond Beach', 'DeLand', 'DeBary', 'Palm Coast', 'All of Volusia County'],
  hours: 'By appointment',
  hoursNote:
    'We cover a large service area, so every visit is scheduled. Existing customers get priority remote support whenever they need it.',
}

export const links = {
  booking: 'https://outlook.office365.com/owa/calendar/MobileTechMSP@mobiletechonsite.com/bookings/',
  ticket:
    'mailto:support@mobiletech-msp1.odoo.com?subject=New%20Support%20Request&cc=info%40mobiletechmsp.com',
  payInvoice: 'https://buy.stripe.com/8x26oHazFaHq3zzg6ufUQ00',
  action1Agent:
    'https://app.action1.com/agent/32b4c214-91f7-11ed-8961-abc5c8782b5e/Windows/agent(MobileTech_MSP).msi',
}

export type ServiceIcon =
  | 'network'
  | 'shield'
  | 'cloud'
  | 'database'
  | 'cable'
  | 'monitor'
  | 'phone'
  | 'compass'
  | 'wrench'
  | 'chart'

export interface Service {
  title: string
  icon: ServiceIcon
  blurb: string
}

export const services: Service[] = [
  { title: 'Managed IT Services', icon: 'network', blurb: '24/7 monitoring, proactive maintenance, helpdesk support and strategic IT guidance.' },
  { title: 'Cybersecurity', icon: 'shield', blurb: 'Layered protection that safeguards your business, your data and your reputation.' },
  { title: 'Cloud Solutions', icon: 'cloud', blurb: 'Secure, scalable Microsoft 365 and cloud setups designed around the way you work.' },
  { title: 'Backup & Disaster Recovery', icon: 'database', blurb: 'Reliable backups and business continuity that keep you running — hurricane season included.' },
  { title: 'Networking & Structured Cabling', icon: 'cable', blurb: 'Fiber, copper and Wi-Fi infrastructure built for speed, reliability and the long haul.' },
  { title: 'Audiovisual Solutions', icon: 'monitor', blurb: 'From conference rooms to digital signage, AV that is designed, installed and just works.' },
  { title: 'Business Voice & Connectivity', icon: 'phone', blurb: 'Crystal-clear phone systems and internet that keep your team connected and moving.' },
  { title: 'IT Consulting & Strategy', icon: 'compass', blurb: 'Clear, honest advice on the technology decisions that drive efficiency and growth.' },
  { title: 'On-Site & Remote Support', icon: 'wrench', blurb: 'Fast response from real technicians — at your desk or through a secure remote session.' },
  { title: 'Scalable Solutions', icon: 'chart', blurb: 'Technology that grows with you, not against you. Built for today, ready for tomorrow.' },
]

export const differentiators = [
  '29+ years of IT experience',
  'Real people. Real support.',
  'Proactive, not reactive',
  'Custom solutions — never cookie-cutter',
  'Security built into everything we do',
  'Committed to our community',
]

export const pillars = [
  { title: 'Local team. Local care.', body: 'Proudly serving Daytona Beach, Holly Hill and the entire Volusia County region.' },
  { title: 'Partner approach.', body: 'We become part of your team and are invested in your success.' },
  { title: 'Technology that works.', body: 'We implement tools that improve productivity, security and profitability.' },
  { title: 'Your success is our mission.', body: 'Your business. Your goals. Our priority. We are here to help you win.' },
]

export interface Customer {
  name: string
  logo: string
  /** Syncro RMM agent installer, if this customer has a dedicated one. */
  rmmAgent?: string
}

const syncro = (id: string) => `https://rmm.syncromsp.com/dl/rs/${id}`

export const customers: Customer[] = [
  { name: 'DeBary Executive Center', logo: 'debary-executive-center.png', rmmAgent: syncro('djEtMzExMTI0NjktMTczNzY4NTQyMy02ODQ4Ni0zNjUwMzMx') },
  { name: 'Daytona Tortugas', logo: 'daytona-tortugas.png', rmmAgent: syncro('djEtMzA0NjM0OTUtMTcyNzUyNjE3MS02ODQ4Ni0zNDk3Mzgz') },
  { name: 'NextHome Realty Pros', logo: 'nexthome-realty-pros.png' },
  { name: 'Georgian Inn Beach Club', logo: 'georgian-inn.png', rmmAgent: syncro('djEtMzEyMzExMjctMTczOTA5ODI1Mi02ODQ4Ni0zNjkxOTIx') },
  { name: 'Bowman Painting', logo: 'bowman-painting.png', rmmAgent: syncro('djEtMzA0Mzg1OTAtMTcyNzA3ODMyMS02ODQ4Ni0zNDkyNTM2') },
  { name: 'HTI Legal Nurse Consulting', logo: 'hti-legal.png', rmmAgent: syncro('djEtMzA0Mzg1OTYtMTcyNzA3ODMyOC02ODQ4Ni0zNDkyNTQy') },
  { name: 'Splash Hair Salon', logo: 'splash-salon.png', rmmAgent: syncro('djEtMzA0Mzg1OTEtMTcyNzA3ODMyMi02ODQ4Ni0zNDkyNTM3') },
  { name: 'DeLand & Greater West Volusia Chamber', logo: 'deland-chamber.png', rmmAgent: syncro('djEtMzE3ODkwNTktMTc0NzQyNTkzNS02ODQ4Ni0zODQyMzg5') },
  { name: 'Ormond Beach ProBodies Performance', logo: 'probodies.png', rmmAgent: syncro('djEtMzA1MDE5MzMtMTcyODE3NjgxMS02ODQ4Ni0zNTA5OTQ3') },
  { name: 'Club 51 of Palm Coast', logo: 'club-51.png', rmmAgent: syncro('djEtMzM5MzY1NzUtMTc4MTY4OTQ0Ni02ODQ4Ni00NDU1MTU1') },
  { name: 'World Famous Boat Tours', logo: 'world-famous-boat-tours.png' },
  { name: 'Skim Shady Pools FL', logo: 'skim-shady-pools.png' },
  { name: 'Trusted Witness Mobile Notary', logo: 'trusted-witness.png' },
  { name: 'Trackman', logo: 'trackman.png' },
  { name: 'Brandon Rental Centers', logo: 'brandon-rental.png' },
  { name: 'Cincinnati Reds', logo: 'cincinnati-reds.png' },
  { name: 'GEODA', logo: 'geoda.png' },
]

/** Portal entries that are not a showcased customer logo. */
export const extraDownloads: Customer[] = [
  { name: 'A+ Tutoring', logo: '', rmmAgent: syncro('djEtMzE2Mzc4NDMtMTc0NDU5MTQwMC02ODQ4Ni0zNzk1MTkx') },
  { name: 'Crystal Tempering Services', logo: '', rmmAgent: syncro('djEtMzMzMDk3MzQtMTc3Mjk1MDU3MC02ODQ4Ni00Mjk1MjM1') },
  { name: 'MobileTech MSP (general)', logo: '', rmmAgent: syncro('djEtMzA2NDY4MzYtMTczMDU1NjYwMC02ODQ4Ni0zNTQ0MTUy') },
]

export const img = (path: string, w: number) =>
  `/.netlify/images?url=${encodeURIComponent(path)}&w=${w}&fm=webp`
