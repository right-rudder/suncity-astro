import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://suncityaviation.com",
  integrations: [
    mdx(),
    sitemap({
      // Customize URLs with priority and change frequency
      customPages: [
        "https://suncityaviation.com",
        "https://suncityaviation.com/private-pilot-training",
        "https://suncityaviation.com/commercial-pilot-training",
        "https://suncityaviation.com/instrument-rating",
        "https://suncityaviation.com/multi-engine-rating",
        "https://suncityaviation.com/certified-flight-instructor-cfi",
        "https://suncityaviation.com/discovery-flight",
        "https://suncityaviation.com/contact",
      ],
      // Filter function to exclude certain pages
      filter: (page) => {
        // Exclude confirmation pages and admin areas
        return (
          !page.includes("/confirmation") &&
          !page.includes("/admin") &&
          !page.includes("/404") &&
          !page.includes("/500")
        );
      },
      // Add change frequency and priority metadata
      serialize(item) {
        // High priority pages
        if (
          item.url === "https://suncityaviation.com/" ||
          item.url.includes("/private-pilot-training") ||
          item.url.includes("/discovery-flight") ||
          item.url.includes("/contact")
        ) {
          return {
            ...item,
            changefreq: "weekly",
            priority: 1.0,
            lastmod: new Date().toISOString(),
          };
        }

        // Training program pages
        if (
          item.url.includes("/commercial-pilot-training") ||
          item.url.includes("/instrument-rating") ||
          item.url.includes("/multi-engine-rating") ||
          item.url.includes("/certified-flight-instructor-cfi") ||
          item.url.includes("/airline-transport-pilot-atp")
        ) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.9,
            lastmod: new Date().toISOString(),
          };
        }

        // Blog posts
        if (item.url.includes("/blog/")) {
          return {
            ...item,
            changefreq: "monthly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
          };
        }

        // Location pages
        if (item.url.includes("/location/")) {
          return {
            ...item,
            changefreq: "yearly",
            priority: 0.6,
            lastmod: new Date().toISOString(),
          };
        }

        // Fleet pages
        if (item.url.includes("/our-fleet/")) {
          return {
            ...item,
            changefreq: "yearly",
            priority: 0.8,
            lastmod: new Date().toISOString(),
          };
        }

        // Default for all other pages
        return {
          ...item,
          changefreq: "monthly",
          priority: 0.5,
          lastmod: new Date().toISOString(),
        };
      },
    }),
    tailwind(),
    react(),
    partytown(),
  ],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
    "/planes": "/our-fleet",
    "/frequently-asked-questions": "/why-become-a-pilot",
    "/aerocamp": "/experience-aviation",
    "/cessna-172": "/our-fleet/cessna-172",
    "/youth-aviation-programs": "/experience-aviation",
    "/beechcraft-duchess-multi-engine-airplane":
      "/our-fleet/beechcraft-duchess",
    "/redbird-flight-simulator": "/our-fleet/redbird-simulator",
  },
});
