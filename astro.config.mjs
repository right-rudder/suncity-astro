import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://suncityaviation.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), partytown()],
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
