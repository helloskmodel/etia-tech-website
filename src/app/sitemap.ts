import { MetadataRoute } from 'next';
import { getAllLabelSlugs, getAllUVSlugs } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.etia-tech.com';
  const lastModified = new Date();

  // 静态页面
  const staticPages = [
    '',
    '/about/',
    '/contact/',
    '/service/',
    '/technical-center/',
    '/labels/',
    '/labels/applications/',
    '/labels/industries/',
    '/labels/performance/',
    '/labels/products/',
    '/labels/case-studies/',
    '/labels/sample-request/',
    '/uv-curing/',
    '/uv-curing/applications/',
    '/uv-curing/technologies/',
    '/uv-curing/products/',
    '/uv-curing/case-studies/',
    '/uv-curing/test-request/',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  // 标签应用页面
  const labelApps = getAllLabelSlugs().map(slug => ({
    url: `${baseUrl}/labels/applications/${slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // UV应用页面
  const uvApps = getAllUVSlugs().map(slug => ({
    url: `${baseUrl}/uv-curing/applications/${slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...labelApps, ...uvApps];
}
