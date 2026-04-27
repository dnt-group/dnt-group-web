import { sanityFetch } from "@/lib/sanity/client";

export type Position = {
  id: string;
  title: string;
  type: "Full-time" | "Project-based";
  location: string;
  description?: string;
  requirements: string[];
  salary?: string;
  duties?: string[];
  additionalInfo?: string;
};

type CareerDocument = {
  positions?: {
    _key?: string;
    title?: string;
    type?: "Full-time" | "Project-based";
    location?: string;
    description?: string;
    legacyDescription?: string;
    requirements?: string[];
    salary?: string;
    duties?: string[];
    additionalInfo?: string;
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
      description,
      "legacyDescription": desc,
      requirements,
      salary,
      duties,
      additionalInfo
    }
  }
`;

export async function getCareerPositions(locale: string): Promise<Position[]> {
  const doc = await sanityFetch<CareerDocument>(
    careerQuery,
    { locale },
    { tags: ["career"] }
  );

  return (doc?.positions ?? [])
    .filter(
      (position): position is Required<CareerDocument>["positions"][number] =>
        Boolean(
          position?._key &&
            position?.title &&
            position?.type &&
            position?.location &&
            position?.requirements?.length
        )
    )
    .map((position) => ({
      id: position._key!,
      title: position.title!,
      type: position.type!,
      location: position.location!,
      description: position.description ?? position.legacyDescription,
      requirements: position.requirements!,
      salary: position.salary,
      duties: position.duties,
      additionalInfo: position.additionalInfo,
    }));
}
