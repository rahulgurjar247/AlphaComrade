import type { Project } from '../types'

export const COMPANY_INFO = {
  name: 'Alpha Comrade',
  domain: 'alphacomrade.in',
  tagline: 'Building Modern Mobile Apps & Web Products',
  founder: 'Rahul Gurjar',
  role: 'Founder & Full-Stack Developer',
  contact: {
    email: 'rahulgurjar824582@gmail.com',
    whatsapp: '918107327289',
    phone: '+91 81073 27289',
  }
}

export const FLAGSHIP_MVPS: Project[] = [
  {
    id: 'dineflow-pos',
    title: 'DineFlow POS (Hotel App)',
    tagline: 'QR Table Ordering & Restaurant Management App',
    category: 'Flagship MVP',
    status: 'Working MVP',
    statusColor: 'emerald',
    description: 'A complete restaurant ordering system where customers scan table QR codes to order food directly from their phone, and orders go live to the kitchen and waiter staff.',
    highlights: [
      'Customer QR scan & instant table ordering',
      'Live Kitchen Order Ticket (KOT) status pipeline',
      'Daily sales tracking, active orders & billing',
      'Menu management with categories & discount prices'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Expo Mobile'],
    screenshots: [
      '/images/dineflow-dashboard.png',
      '/images/dineflow-menu.png'
    ]
  },
  {
    id: 'dairypulse-os',
    title: 'Smart Dairy OS (Milk App)',
    tagline: 'Mobile App for Milk Collection & Dairy Management',
    category: 'Flagship MVP',
    status: 'Mobile App',
    statusColor: 'cyan',
    description: 'A mobile app built for dairy centers to quickly record morning & evening milk collection, calculate milk price by FAT & SNF quality, and manage farmer khatas.',
    highlights: [
      'Quick morning & evening milk collection entry',
      'Automatic FAT & SNF rate calculation',
      'Farmer balance ledger (Khata) & payments',
      'Multi-dairy switching from a single login'
    ],
    tags: ['React Native', 'Expo Router', 'Node.js', 'TypeScript']
  }
]

export const LIVE_DEPLOYMENTS: Project[] = [
  {
    id: 'chasma-ghar',
    title: 'Chasma Ghar',
    tagline: 'Optical Store & Eyewear Website',
    category: 'Live Deployment',
    status: 'Live',
    statusColor: 'sky',
    description: 'Clean, responsive web platform for optical eyewear store with frame showcases and appointment booking.',
    highlights: [
      'Interactive eyeglasses & frame catalog',
      'Mobile responsive design deployed on Netlify'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    liveUrl: 'https://chasmagar.netlify.app'
  },
  {
    id: 'vishvakarma',
    title: 'Vishvakarma',
    tagline: 'Engineering & Industrial Works Website',
    category: 'Live Deployment',
    status: 'Live',
    statusColor: 'sky',
    description: 'Corporate business website for industrial engineering, machinery, and fabrication services.',
    highlights: [
      'Industrial machinery showcase',
      'Quotation inquiry & direct contact funnel'
    ],
    tags: ['React', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://vishvakarma.netlify.app'
  },
  {
    id: 'founder-outreach-bot',
    title: 'Outreach Lead Bot',
    tagline: 'Automated Lead Search & Cold Email Engine',
    category: 'AI Automation',
    status: 'Live Engine',
    statusColor: 'purple',
    description: 'Node.js automation bot that discovers targeted leads using Google dorking queries and sends personalized emails with duplicate prevention.',
    highlights: [
      'Automated Google lead scraping',
      'Local database (leads.db) prevents duplicate emails'
    ],
    tags: ['Node.js', 'Puppeteer', 'SQLite', 'Automation']
  },
  {
    id: 'hansaraj-store',
    title: 'Hansaraj Store',
    tagline: 'Online E-Commerce Website',
    category: 'Client Platform',
    status: 'Live',
    statusColor: 'indigo',
    description: 'Modern storefront built with React and Vite for smooth online product browsing and shopping.',
    highlights: [
      'Fast product catalog browsing',
      'Clean shopping experience'
    ],
    tags: ['React', 'Vite', 'CSS3']
  }
]

export const TECH_STACK = [
  { name: 'React & Vite', desc: 'Fast, responsive web apps' },
  { name: 'React Native & Expo', desc: 'Android & iOS mobile apps' },
  { name: 'Node.js & Express', desc: 'Backend APIs & logic' },
  { name: 'MongoDB & SQLite', desc: 'Cloud & local database' },
  { name: 'Tailwind CSS', desc: 'Clean, modern styling' },
  { name: 'Netlify & Cloudflare', desc: 'Fast hosting & DNS' }
]
