# JEREMY BUILDS THINGS THAT WORK.

This is my portfolio: **[jeremy-portfolio-dpkh.vercel.app](https://jeremy-portfolio-dpkh.vercel.app)**

I'm Jeremy Gachiki Nduati, a 16-year-old developer from Nanyuki, Kenya. I don't take Computer
Science at school. I learned it by building, and this site is where that work lives.

---

## What's on it

| Page | What you'll find |
| --- | --- |
| **Home** | Who I am, three projects I'm proudest of, and the numbers so far |
| **Work** | All seven projects: my own products and sites I've built for clients |
| **E-Elections** | A full case study of my KSEF 2027 entry, a secure digital voting system for Kenya, with a live hash-chain demo you can try to break |
| **Fashion Fit** | Case study of my AI wardrobe app (YSK 2026) |
| **Recognition** | Results and certificates, each one opens as the original document |
| **Contact** | A form that lands straight in my inbox |

## How it looks, and why

I wanted it to feel like a poster, not a template. It uses:

- **Anton** for headlines: tall, condensed, loud.
- **Space Grotesk** for reading, and **Space Mono** for labels.
- Off-white paper, black rules and **one** colour, cobalt blue. No gradients, no rounded cards, no glow.
- Light and dark mode, and it respects "reduce motion".

The headline on the home page rises line by line in pure CSS, so it shows up even on a slow
connection before any JavaScript loads.

## Built with

Next.js 16 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Resend (contact form) ·
Vercel (hosting, analytics, speed insights)

## Run it yourself

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

The contact form needs two environment variables in `.env.local`. It still renders without them,
it just can't send:

```
RESEND_API_KEY=...        # from resend.com
FROM_EMAIL=...            # a sender address on a domain verified in Resend
```

## Where things are

```
app/
  lib/content.ts      every project, certificate and skill: edit text here, not in the pages
  page.tsx            home
  work/               the work index and the two case studies
  components/         header, footer, marquee, hash-chain demo, video player…
  api/contact/        sends contact-form messages through Resend
public/
  work/               project screenshots
  videos/             promo videos for E-ELECTIONS and Fashion Fit
  CERTIFICATES/       the original certificate files
```

To add a project, add an entry to `projects` in `app/lib/content.ts` and drop a 1600 × 1000
screenshot in `public/work/`.

## Say hi

Building something and need a hand? **nduatijeremy7@gmail.com** · [GitHub](https://github.com/jeremydev-c) ·
[LinkedIn](https://linkedin.com/in/jeremydev-c)
