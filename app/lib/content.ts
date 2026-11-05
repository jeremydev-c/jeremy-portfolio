// Everything the site says about the work lives here, so pages stay layout-only.

export const site = {
  name: 'Jeremy Nduati',
  fullName: 'Jeremy Gachiki Nduati',
  role: 'Full-stack developer & designer',
  location: 'Nanyuki, Kenya',
  email: 'nduatijeremy7@gmail.com',
  // The site's own address: set NEXT_PUBLIC_SITE_URL to override, otherwise Vercel's production URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  github: 'https://github.com/jeremydev-c',
  linkedin: 'https://linkedin.com/in/jeremydev-c',
};

export type Project = {
  slug: string;
  name: string;
  short: string;
  kind: string;
  year: string;
  tagline: string;
  summary: string;
  image?: string;
  icon?: string;
  /** A vertical frame from the app, shown in a phone on the exhibit stage. */
  phone?: string;
  /** The tint of the wall the exhibit stands on. */
  stage: 'green' | 'sand' | 'leaf' | 'stone';
  caseStudy?: string;
  live?: string;
  liveNote?: string;
  github?: string;
  badge?: string;
  role: string;
  timeline?: string;
  stack: string[];
  challenge: string;
  approach: string[];
};

export const projects: Project[] = [
  {
    slug: 'e-elections',
    name: 'E-ELECTIONS',
    short: 'E-Elections',
    kind: 'Civic tech · Security',
    year: '2026',
    tagline: 'Secure digital voting for Kenya',
    summary:
      'A complete voting system: a server-checked face scan or fingerprint, a ballot routed to the voter’s own ward, and a tamper-evident ledger with one SHA-256 chain per county. In English and Kiswahili.',
    image: '/work/e-elections-home.jpg',
    stage: 'green',
    caseStudy: '/work/e-elections',
    github: 'https://github.com/jeremydev-c/e-elections',
    badge: 'KSEF 2027',
    role: 'Sole designer & engineer',
    timeline: 'In testing',
    stack: ['Next.js 16', 'TypeScript', 'MongoDB Atlas', 'ONNX Runtime', 'ArcFace', 'WebAuthn'],
    challenge:
      'Kenya’s 2027 General Election is budgeted at KSh 74.8 billion, and much of that pays for paper, transport and manual counting. Could a digital system cut that cost without giving up trust?',
    approach: [
      'Server-side face recognition: SCRFD finds the face, ArcFace turns it into 512 numbers, and three random head moves prove a live person. 99.85% accurate on the LFW benchmark.',
      'One SHA-256 hash chain per county, every ballot sealed with a server-side HMAC key, and a Merkle root that fingerprints the whole election.',
      'Double voting is stopped by one atomic database operation: ten taps on ten devices still produce exactly one ballot.',
    ],
  },
  {
    slug: 'kilele-hr',
    name: 'Kilele HR',
    short: 'Kilele HR',
    kind: 'HR platform · Security',
    year: '2026',
    tagline: 'The whole life of a job, in one calm system',
    summary:
      'A complete HR system, live online: scoped access control, encrypted personal data, one approval engine for leave, hiring, promotions and exits, a careers site, email at every step, and a tamper-evident audit trail.',
    image: '/work/kilele-dashboard.jpg',
    stage: 'stone',
    caseStudy: '/work/kilele-hr',
    live: 'https://kilele-hr.vercel.app',
    github: 'https://github.com/jeremydev-c/Kilele-HR',
    badge: 'iLabAfrica challenge',
    role: 'Sole designer & engineer',
    timeline: '2 days',
    stack: ['Next.js 16', 'TypeScript', 'MongoDB Atlas', 'Tailwind CSS', 'Resend', 'Vercel'],
    challenge:
      'iLabAfrica (Strathmore University) asked for an HR system covering access control, employee data, recruitment, leave, promotions and exits. Personal data had to stay private, and every decision traceable.',
    approach: [
      'One permission engine for everything: each grant has a scope (own, team, department, all), so a line manager sees and approves for his own team and nobody else.',
      'National IDs, KRA PINs and bank details encrypted with AES-256-GCM, yet still searchable through a blind index; revealing one needs a reason and is logged.',
      'Every action sealed into a SHA-256 hash chain: change or delete one entry and the check catches it. 74 automated tests, deployed live.',
    ],
  },
  {
    slug: 'fashion-fit',
    name: 'Fashion Fit',
    short: 'Fashion Fit',
    kind: 'Applied AI · Mobile',
    year: '2026',
    tagline: 'AI wardrobe and outfit planner',
    summary:
      'A React Native app that catalogues your wardrobe from the camera and suggests complete outfits using 14 custom scoring algorithms, live weather and a learning engine.',
    icon: '/fashion-fit-icon.jpeg',
    phone: '/videos/fashion-fit-promo.jpg',
    stage: 'sand',
    caseStudy: '/work/fashion-fit',
    github: 'https://github.com/jeremydev-c/fashion-app',
    badge: 'YSK 2026',
    role: 'AI engineer & designer',
    timeline: '14 weeks',
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'OpenAI', 'Paystack'],
    challenge:
      'Give real-time clothing detection and styling advice without paying a cloud vision API for every single photo.',
    approach: [
      'A hybrid pipeline: local parsing for colour and silhouette, with GPT-4o-mini only for semantic tagging.',
      'A wardrobe intelligence layer that learns each person’s preferences and seasonal limits.',
      '14 custom fashion-intelligence algorithms for outfit scoring.',
    ],
  },
  {
    slug: 'tabby',
    name: 'Tabby Premium Eggs',
    short: 'Tabby Eggs',
    kind: 'E-commerce · Client',
    year: 'Client',
    tagline: 'Farm e-commerce and booking portal',
    summary:
      'Countrywide ordering for Grade AA eggs, with a fulfilment pipeline, Paystack-paid farm visit bookings, interactive 3D elements and a sales dashboard.',
    image: '/work/tabby.jpg',
    stage: 'leaf',
    live: 'https://www.tabbypremiumeggs.online/',
    role: 'Full-stack engineer',
    timeline: '12 weeks',
    stack: ['Next.js 14', 'MongoDB', 'Paystack', 'React Three Fiber', 'Chart.js', 'Zod'],
    challenge:
      'One platform to sell eggs across the country, manage farm visit bookings and take secure payments.',
    approach: [
      'A custom order pipeline in MongoDB that tracks every fulfilment stage.',
      'A booking flow with direct Paystack payments and generated PDF confirmations.',
      'React Three Fiber visuals for the storefront and Chart.js analytics for the owner.',
    ],
  },
  {
    slug: 'mt-kenya-ksl',
    name: 'MT Kenya Sign Language Training Institute',
    short: 'MT Kenya KSL',
    kind: 'Admissions · Client',
    year: 'Client',
    tagline: 'Online admissions for a KSL school',
    summary:
      'A serverless admissions portal: applicants upload documents online and both sides receive styled HTML email receipts automatically.',
    image: '/work/ksl.jpg',
    stage: 'stone',
    live: 'https://mt-kenya-sign-language-training-ins.vercel.app/',
    role: 'Full-stack developer',
    timeline: '4 weeks',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Vercel', 'Resend'],
    challenge:
      'Move a sign language institute’s admissions online, with document uploads, without the overhead of running a database.',
    approach: [
      'Serverless Node.js functions on Vercel that process multipart uploads.',
      'Automated HTML email receipts to applicants and staff through the Resend API.',
      'A responsive interface in plain HTML and CSS, quick on low-end phones.',
    ],
  },
  {
    slug: 'emmanuel-annoh',
    name: 'Emmanuel Annoh',
    short: 'E. Annoh',
    kind: 'Portfolio · Client',
    year: 'Client',
    tagline: 'Portfolio for a data scientist',
    summary:
      'A dark, focused portfolio that presents predictive-modelling projects, dashboards and machine-learning results for a working data scientist.',
    image: '/work/emmanuel.jpg',
    stage: 'stone',
    live: 'https://emmanuel-annoh-portfolio.vercel.app/',
    role: 'Designer & developer',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenge: 'Make dense technical work readable to recruiters in under a minute.',
    approach: ['Clear project hierarchy with outcome-first summaries.', 'Server rendering for fast first load.'],
  },
  {
    slug: 'bernice-tetteh',
    name: 'Bernice Tetteh',
    short: 'B. Tetteh',
    kind: 'Portfolio · Client',
    year: 'Client',
    tagline: 'Portfolio for a marine data analyst',
    summary:
      'A marine-themed identity for a fisheries manager and data analyst, with particle backgrounds and sections tailored to her data work.',
    image: '/work/bernice.jpg',
    stage: 'stone',
    live: 'https://bernice-tetteh-portfolio.vercel.app/',
    role: 'Designer & developer',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenge: 'Give a specialist profession a visual identity of its own.',
    approach: ['A bespoke marine design system.', 'Optimised media loading and accessible contrast.'],
  },
  {
    slug: 'modinat-buhari',
    name: 'Modinat Omolara Buhari',
    short: 'M. Buhari',
    kind: 'Portfolio · Client',
    year: 'Client',
    tagline: 'Portfolio for a BI analyst',
    summary:
      'An “analyst’s report” portfolio for a data analyst in Vilnius: condensed headlines, navy and burnt orange, and charts of her own work, on her own domain.',
    image: '/work/modinat.jpg',
    stage: 'stone',
    live: 'https://www.omolarabuhari.com/',
    role: 'Designer & developer',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenge: 'Stand out in a crowded field of analyst portfolios.',
    approach: [
      'A bespoke identity: navy, burnt orange and claret, with condensed Archivo and Plex Mono.',
      'Every project claim checked against her own certificates and reports before publishing.',
    ],
  },
];

export type Recognition = {
  year?: string;
  title: string;
  issuer: string;
  result: string;
  highlight?: boolean;
  pdf?: string;
  image?: string;
  link?: string;
  pdfs?: string[];
};

export const recognition: Recognition[] = [
  {
    year: '2026',
    title: 'High School Bootcamp, Level 2: user research and software development',
    issuer: 'Moringa School',
    result: 'Completed',
    pdf: '/CERTIFICATES/Moringa_School_HS_Bootcamp_Level2_2026.pdf',
  },
  {
    year: '2026',
    title: 'SAIMUN Workshop, Press Team',
    issuer: 'Sub-Saharan Africa International Model United Nations',
    result: 'Participant',
    image: '/CERTIFICATES/SAIMUN_Workshop_2026_Certificate.jpeg',
  },
  {
    year: '2025',
    title: '10Alytics Global Data Hackathon',
    issuer: '10Alytics',
    result: '#50 of 1,995',
    highlight: true,
    pdf: '/CERTIFICATES/Jeremy_Nduati_Hackathon_Certificate.pdf',
    link: 'https://moonlit-starlight-601077.netlify.app',
  },
  {
    year: '2025',
    title: 'Kenya Science & Engineering Fair, Computer Science',
    issuer: 'Ministry of Education, Kirinyaga County',
    result: '3rd place',
    highlight: true,
    pdf: '/CERTIFICATES/Kenya_Science_Engineering_Fair_2025.pdf',
  },
  {
    year: '2025',
    title: 'High School Coding Programme',
    issuer: 'Moringa School',
    result: 'Completed',
    pdf: '/CERTIFICATES/Moringa School - Highschool Cert 2025 -- Jeremy Nduati.pdf',
  },
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'Forage × Electronic Arts',
    result: 'Completed',
    pdf: '/CERTIFICATES/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_68fa7c9cd4e60dd4d4dd7974_1761249350600_completion_certificate.pdf',
  },
  {
    title: 'Front-End Development Libraries',
    issuer: 'freeCodeCamp',
    result: 'Certified',
    pdf: '/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_front-end-development-libraries.pdf',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    result: 'Certified',
    pdf: '/CERTIFICATES/freecodecamp.org_certification_fccfe0925ac-797f-454c-8125-91fa70610602_responsive-web-design.pdf',
  },
  {
    title: 'Professional certificates',
    issuer: 'Coursera',
    result: '7 courses',
    pdfs: [
      '/CERTIFICATES/Coursera 2XL8MFKL2E3Y (1).pdf',
      '/CERTIFICATES/Coursera 6O13FZERW55P.pdf',
      '/CERTIFICATES/Coursera 79TZTF9IKQRU (1).pdf',
      '/CERTIFICATES/Coursera 7THPJ5KTSDGJ.pdf',
      '/CERTIFICATES/Coursera KPADPSJIIT7M.pdf',
      '/CERTIFICATES/Coursera L28JSI8M03D0.pdf',
      '/CERTIFICATES/Coursera PEV1EWXGGI9E.pdf',
    ],
  },
];

export const capabilities = [
  {
    title: 'Product engineering',
    body: 'Complete web and mobile products, from database schema to the last hover state.',
    tools: ['Next.js', 'TypeScript', 'React', 'React Native', 'Node.js', 'MongoDB', 'Prisma'],
  },
  {
    title: 'Payments',
    body: 'Checkout, bookings and subscriptions that work with the way Kenyans actually pay.',
    tools: ['M-Pesa STK Push', 'Paystack', 'Stripe', 'Webhooks'],
  },
  {
    title: 'Security & trust',
    body: 'Systems that hold up under pressure: tamper-evident ledgers, encryption, passkeys.',
    tools: ['SHA-256 / HMAC', 'AES-256-GCM', 'WebAuthn', 'JWT / OAuth', 'Rate limiting'],
  },
  {
    title: 'Applied AI',
    body: 'Vision and language models used where they earn their cost, not everywhere.',
    tools: ['Face recognition', 'Computer vision', 'OpenAI API', 'Python', 'Plotly'],
  },
  {
    title: 'Interface design',
    body: 'Calm, legible interfaces with a clear hierarchy, designed before they are coded.',
    tools: ['Figma', 'Design systems', 'Motion', 'Accessibility'],
  },
];

export const toolbelt = [
  'Next.js', 'TypeScript', 'React', 'React Native', 'Expo', 'Node.js', 'Express', 'MongoDB',
  'Mongoose', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'M-Pesa', 'Paystack', 'Stripe',
  'OpenAI', 'Python', 'Cloudinary', 'Resend', 'Vercel', 'Git', 'Figma',
];
