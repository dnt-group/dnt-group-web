import { sanityClient } from "@/lib/sanity/client";

export type StatKey = "properties" | "revenue" | "guests" | "experience";

export type StatValues = Record<StatKey, string>;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  img: string;
};

export type AboutPageData = {
  stats: StatValues;
  teamMembers: TeamMember[];
};

const fallbackStats: StatValues = {
  properties: "20+",
  revenue: "30%",
  guests: "95%",
  experience: "10+",
};

const aboutQuery = `
  *[
    _type == "aboutPage" &&
    (!defined(language) || language == $locale)
  ][0]{
    "teamMembers": teamMembers[]{
      _key,
      name,
      role,
      bio,
      "img": image.asset->url
    }
  }
`;

const statisticsQuery = `
  *[
    _type == "statistics" &&
    (!defined(language) || language == $locale)
  ][0]{
    "stats": stats[]{
      key,
      value
    }
  }
`;

type AboutDocument = {
  teamMembers?: {
    _key?: string;
    name?: string;
    role?: string;
    bio?: string;
    img?: string;
  }[];
};

type StatisticsDocument = {
  stats?: { key?: StatKey; value?: string }[];
};

export async function getAboutPageData(locale: string): Promise<AboutPageData> {
  if (!sanityClient) {
    return { stats: fallbackStats, teamMembers: [] };
  }

  const [aboutDoc, statisticsDoc] = await Promise.all([
    sanityClient.fetch<AboutDocument | null>(aboutQuery, { locale }),
    sanityClient.fetch<StatisticsDocument | null>(statisticsQuery, { locale }),
  ]);

  const statEntries = (statisticsDoc?.stats ?? []).filter(
    (item): item is { key: StatKey; value: string } => Boolean(item?.key && item?.value)
  );

  const stats = statEntries.reduce<StatValues>(
    (acc, item) => {
      acc[item.key] = item.value;
      return acc;
    },
    { ...fallbackStats }
  );

  const teamMembers = (aboutDoc?.teamMembers ?? [])
    .filter(
      (member): member is Required<AboutDocument>["teamMembers"][number] =>
        Boolean(member?._key && member?.name && member?.role && member?.bio && member?.img)
    )
    .map((member) => ({
      id: member._key!,
      name: member.name!,
      role: member.role!,
      bio: member.bio!,
      img: member.img!,
    }));

  return { stats, teamMembers };
}
