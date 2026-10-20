// Everything the site says about the work lives here, so pages stay layout-only.

export const site = {
  name: 'Jeremy Nduati',
  fullName: 'Jeremy Gachiki Nduati',
  role: 'Full-stack developer & designer',
  location: 'Kirinyaga, Kenya',
  email: 'nduatijeremy7@gmail.com',
  url: 'https://modenova.co.ke',
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
      'A complete voting system: identity checks by face or fingerprint, a ballot routed to the voter’s own ward, and a tamper-evident SHA-256 ledger that anyone can audit.',
    image: '/work/e-elections-home.jpg',
    caseStudy: '/work/e-elections',
    badge: 'KSEF 2027',
    role: 'Sole designer & engineer',
    timeline: 'In testing',
    stack: ['Next.js 16', 'TypeScript', 'MongoDB Atlas', 'face-api', 'WebAuthn'],
    challenge:
      'Kenya’s 2027 General Election is budgeted at KSh 74.8 billion, and much of that pays for paper, transport and manual counting. Could a digital system cut that cost without giving up trust?',
    approach: [
      'Two-stage login: a National ID check that blocks anyone who has already voted, then face or fingerprint verification.',
      'Every ballot is chained to the one before it with SHA-256 and sealed with a server-side HMAC key, so a single changed vote breaks the chain.',
      'Double voting is stopped by one atomic database operation: ten taps on ten devices still produce exactly one ballot.',
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
    live: 'https://mt-kenya-sign-language-training-ins.vercel.app/',
    liveNote: 'Live site currently paused',
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
      'A fast, SEO-ready portfolio for a business-intelligence specialist, with scroll animation and dynamic project showcases.',
    image: '/work/modinat.jpg',
    live: 'https://modinat-omolara-buhari-portfolio.vercel.app/',
    role: 'Designer & developer',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    challenge: 'Stand out in a crowded field of analyst portfolios.',
    approach: ['Custom interactive elements instead of a template.', 'Full SEO metadata and mobile-first layout.'],
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
    title: 'SAIMUN Workshop — Press Team',
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
    title: 'Kenya Science & Engineering Fair — Computer Science',
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
