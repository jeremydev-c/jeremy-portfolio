import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://modenova.co.ke';
  const pages: [string, number][] = [
    ['', 1],
    ['/work', 0.9],
    ['/work/e-elections', 0.9],
    ['/work/fashion-fit', 0.8],
    ['/about', 0.8],
    ['/certificates', 0.7],
    ['/contact', 0.7],
  ];

  return pages.map(([path, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
