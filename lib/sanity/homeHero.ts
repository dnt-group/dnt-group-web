import { sanityClient } from "@/lib/sanity/client";

export type HomeHeroContent = {
  backgroundVideoUrl: string;
  title: string;
  description: string;
};

const fallbackHomeHero: HomeHeroContent = {
  backgroundVideoUrl: "https://assets.mixkit.co/videos/1170/1170-720.mp4",
  title: "Team That Creates Real Results",
  description: "DNT Group brings decades of expertise in hotel management, development, and consulting to create world-class hospitality destinations.",
};

const homeHeroQuery = `
  *[
    _type == "homeHero" &&
    (!defined(language) || language == $locale)
  ][0]{
    backgroundVideoUrl,
    title,
    description
  }
`;

type HomeHeroDocument = Partial<HomeHeroContent> | null;

export async function getHomeHeroContent(locale: string): Promise<HomeHeroContent> {
  if (!sanityClient) return fallbackHomeHero;

  const doc = await sanityClient.fetch<HomeHeroDocument>(homeHeroQuery, { locale });
  if (!doc?.backgroundVideoUrl || !doc?.title || !doc?.description) {
    return fallbackHomeHero;
  }

  return {
    backgroundVideoUrl: doc.backgroundVideoUrl,
    title: doc.title,
    description: doc.description,
  };
}
