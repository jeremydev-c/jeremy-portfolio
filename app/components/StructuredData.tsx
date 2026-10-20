import { site } from '../lib/content';

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.fullName,
    jobTitle: 'Full-stack developer & designer',
    description:
      'Self-taught 16-year-old full-stack developer and designer from Kenya, building secure products with Next.js, TypeScript, payments and applied AI.',
    url: site.url,
    email: `mailto:${site.email}`,
    address: { '@type': 'PostalAddress', addressRegion: 'Kirinyaga', addressCountry: 'KE' },
    sameAs: [site.github, site.linkedin],
    knowsAbout: ['Next.js', 'TypeScript', 'React Native', 'MongoDB', 'M-Pesa', 'Paystack', 'Cryptography', 'Computer vision', 'UI/UX design'],
    award: [
      '#50 of 1,995, 10Alytics Global Data Hackathon 2025',
      '3rd place, Computer Science, Kenya Science & Engineering Fair 2025 (Kirinyaga County)',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    author: { '@type': 'Person', name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
