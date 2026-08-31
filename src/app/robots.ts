import type { MetadataRoute } from "next";
import { isIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
  };
}
