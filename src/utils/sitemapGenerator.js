import { routes } from '../constant';
import { blogs } from '../data/blogs';
import { allServices } from '../constant';

const baseUrl = 'https://webtriq.com'; // Replace with your actual domain

// Priority levels for different types of pages
const PRIORITIES = {
  HOME: 1.0,
  MAIN_PAGES: 0.9,
  SERVICES: 0.8,
  BLOGS: 0.7,
  LANDING_PAGES: 0.8,
  CONTACT: 0.6
};

// Change frequencies for different types of pages
const CHANGE_FREQ = {
  HOME: 'weekly',
  MAIN_PAGES: 'monthly',
  SERVICES: 'monthly',
  BLOGS: 'weekly',
  LANDING_PAGES: 'monthly',
  CONTACT: 'monthly'
};

export const generateSitemapData = () => {
  const sitemapUrls = [];

  // Add main routes
  routes.forEach(route => {
    if (route.path === '/') {
      sitemapUrls.push({
        url: baseUrl + route.path,
        lastmod: new Date().toISOString(),
        changefreq: CHANGE_FREQ.HOME,
        priority: PRIORITIES.HOME
      });
    } else if (route.path === '/contact-us') {
      sitemapUrls.push({
        url: baseUrl + route.path,
        lastmod: new Date().toISOString(),
        changefreq: CHANGE_FREQ.CONTACT,
        priority: PRIORITIES.CONTACT
      });
    } else {
      sitemapUrls.push({
        url: baseUrl + route.path,
        lastmod: new Date().toISOString(),
        changefreq: CHANGE_FREQ.MAIN_PAGES,
        priority: PRIORITIES.MAIN_PAGES
      });
    }
  });

  // Add service detail pages
  allServices.forEach(service => {
    if (service.title) {
      const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      sitemapUrls.push({
        url: `${baseUrl}/services/${serviceSlug}`,
        lastmod: new Date().toISOString(),
        changefreq: CHANGE_FREQ.SERVICES,
        priority: PRIORITIES.SERVICES
      });
    }
  });

  // Add blog detail pages
  blogs.forEach(blog => {
    sitemapUrls.push({
      url: `${baseUrl}/blogs/${blog.id}`,
      lastmod: new Date().toISOString(),
      changefreq: CHANGE_FREQ.BLOGS,
      priority: PRIORITIES.BLOGS
    });
  });

  // Add landing pages
  const landingPages = [
    { path: '/web-development', priority: PRIORITIES.LANDING_PAGES },
    { path: '/app-development', priority: PRIORITIES.LANDING_PAGES }
  ];

  landingPages.forEach(page => {
    sitemapUrls.push({
      url: baseUrl + page.path,
      lastmod: new Date().toISOString(),
      changefreq: CHANGE_FREQ.LANDING_PAGES,
      priority: page.priority
    });
  });

  return sitemapUrls;
};

export const generateSitemapXML = () => {
  const urls = generateSitemapData();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetHeader = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetFooter = '</urlset>';
  
  const urlEntries = urls.map(url => {
    return `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}\n${urlsetHeader}\n${urlEntries}\n${urlsetFooter}`;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Allow important pages
Allow: /services/
Allow: /blogs/
Allow: /about-us/
Allow: /contact-us/

# Crawl delay (optional)
Crawl-delay: 1`;
};
