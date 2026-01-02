export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeremy Nduati",
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "description": "15-year-old full-stack developer building enterprise-grade applications with Next.js, TypeScript, payment integrations, and AI/ML solutions.",
    "url": "https://modenova.co.ke",
    "sameAs": [
      "https://github.com/jeremydev-c"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Next.js",
      "TypeScript",
      "React",
      "UI/UX Design",
      "Payment Integration",
      "Stripe",
      "M-Pesa",
      "Machine Learning",
      "Data Science",
      "DevOps",
      "MongoDB",
      "Node.js"
    ],
    "award": "Ranked #50 out of 1,995 participants in 10Alytics Global Data Hackathon 2025"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jeremy Nduati Portfolio",
    "url": "https://modenova.co.ke",
    "description": "Portfolio showcasing full-stack development projects, UI/UX design work, and technical expertise.",
    "author": {
      "@type": "Person",
      "name": "Jeremy Nduati"
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Jeremy Nduati Portfolio",
    "creator": {
      "@type": "Person",
      "name": "Jeremy Nduati",
      "jobTitle": "Full-Stack Developer & UI/UX Designer"
    },
    "about": {
      "@type": "Thing",
      "name": "Web Development Portfolio"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}





