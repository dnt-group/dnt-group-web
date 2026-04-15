import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dntgroup.ge";

const staticPages = [
  "",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/career",
  "/blogs",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      const path = locale === routing.defaultLocale ? page : `/${locale}${page}`;
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}${l === routing.defaultLocale ? page : `/${l}${page}`}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
