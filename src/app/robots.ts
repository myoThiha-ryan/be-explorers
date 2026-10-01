import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { isIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    // Pointing crawlers at the sitemap is the cheapest way to get every page
    // discovered; withheld while the site is closed to them.
    ...(isIndexable ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}
