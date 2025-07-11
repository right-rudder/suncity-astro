import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?utm_*
Disallow: /*?fbclid=*
Disallow: /*?gclid=*

# Allow important directories
Allow: /blog/
Allow: /our-fleet/
Allow: /location/

# Crawl delay for better server performance
Crawl-delay: 1

# Sitemaps
Sitemap: ${sitemapURL.href}

# Additional sitemaps for specific content types
Sitemap: ${new URL("sitemap-0.xml", sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
