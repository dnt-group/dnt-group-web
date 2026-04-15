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
  coalesce(
    *[_type == "homeHero" && language == $locale][0],
    *[_type == "homeHero" && !defined(language)][0],
    *[_type == "homeHero"][0]
  ){
    "backgroundVideoUrl": coalesce(backgroundVideo.asset->url, backgroundVideoUrl),
    title,
    description
  }
`;

type HomeHeroDocument = Partial<HomeHeroContent> | null;

export async function getHomeHeroContent(locale: string): Promise<HomeHeroContent> {
  if (!sanityClient) return fallbackHomeHero;

  const doc = await sanityClient
    .withConfig({ useCdn: false })
    .fetch<HomeHeroDocument>(homeHeroQuery, { locale });

  return {
    backgroundVideoUrl: doc?.backgroundVideoUrl ?? fallbackHomeHero.backgroundVideoUrl,
    title: doc?.title ?? fallbackHomeHero.title,
    description: doc?.description ?? fallbackHomeHero.description,
  };
}
