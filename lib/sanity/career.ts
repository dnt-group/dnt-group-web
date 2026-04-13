import { sanityClient } from "@/lib/sanity/client";

export type Position = {
  id: string;
  title: string;
  type: "Full-time" | "Project-based";
  location: string;
  desc: string;
  requirements: string[];
};

type CareerDocument = {
  positions?: {
    _key?: string;
    title?: string;
    type?: "Full-time" | "Project-based";
    location?: string;
    desc?: string;
    requirements?: string[];
  }[];
};

const careerQuery = `
  *[
    _type == "careerPage" &&
    (!defined(language) || language == $locale)
  ][0]{
    positions[]{
      _key,
      title,
      type,
      location,
      desc,
      requirements
    }
  }
`;

export async function getCareerPositions(locale: string): Promise<Position[]> {
  if (!sanityClient) return [];

  const doc = await sanityClient.fetch<CareerDocument | null>(careerQuery, { locale });

  return (doc?.positions ?? [])
    .filter(
      (position): position is Required<CareerDocument>["positions"][number] =>
        Boolean(
          position?._key &&
            position?.title &&
            position?.type &&
            position?.location &&
            position?.desc &&
            position?.requirements?.length
        )
    )
    .map((position) => ({
      id: position._key!,
      title: position.title!,
      type: position.type!,
      location: position.location!,
      desc: position.desc!,
      requirements: position.requirements!,
    }));
}
