import { MetadataRoute } from 'next';
import { site } from './lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
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
