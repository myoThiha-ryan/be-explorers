import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { site } from "@/content/site";
import { tours } from "@/content/tours";

/**
 * Lists every page for crawlers, so discovery does not depend on them walking
 * the nav. Built from the same content the pages are, so adding a tour or an
 * article puts it in the sitemap with no further change.
 *
 * Omitted while `SITE_INDEXABLE` is unset: a sitemap that invites crawling
 * would contradict the `Disallow: /` that `robots.ts` serves at the same time.
 */
const staticPaths = [
  "",
  "/tours",
  "/about",
  "/blog",
  "/faqs",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${site.url}${path}`;

  return [
    ...staticPaths.map((path) => ({
      url: url(path),
      lastModified,
      // The homepage and the tours index are the pages worth re-crawling most.
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/tours" ? 0.9 : 0.6,
    })),
    ...tours.map((tour) => ({
      url: url(`/tours/${tour.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
