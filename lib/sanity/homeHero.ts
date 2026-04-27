import { sanityClient } from "@/lib/sanity/client";

export type HomeHeroContent = {
  backgroundVideoUrl: string;
  backgroundPosterImageUrl: string;
  title: string;
  description: string;
};

const fallbackHomeHero: HomeHeroContent = {
  backgroundVideoUrl: "https://assets.mixkit.co/videos/1170/1170-720.mp4",
  backgroundPosterImageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
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
    "backgroundPosterImageUrl": select(
      defined(backgroundPosterImage.asset->url) => backgroundPosterImage.asset->url + "?auto=format&fit=crop&w=1600&q=70",
      null
    ),
    title,
    description
  }
`;

type HomeHeroDocument = Partial<HomeHeroContent> | null;

export async function getHomeHeroContent(locale: string): Promise<HomeHeroContent> {
  if (!sanityClient) return fallbackHomeHero;

  const doc = await sanityClient
    .withConfig({ useCdn: false })
    .fetch<HomeHeroDocument>(homeHeroQuery, { locale }, {
      next: { revalidate: 86400, tags: ["home-hero"] },
    });

  return {
    backgroundVideoUrl: doc?.backgroundVideoUrl ?? fallbackHomeHero.backgroundVideoUrl,
    backgroundPosterImageUrl: doc?.backgroundPosterImageUrl ?? fallbackHomeHero.backgroundPosterImageUrl,
    title: doc?.title ?? fallbackHomeHero.title,
    description: doc?.description ?? fallbackHomeHero.description,
  };
}
