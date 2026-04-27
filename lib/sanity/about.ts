import { sanityFetch } from "@/lib/sanity/client";

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

const aboutPageQuery = `
{
  "about": *[
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
  },
  "statistics": *[
    _type == "statistics" &&
    (!defined(language) || language == $locale)
  ][0]{
    "stats": stats[]{
      key,
      value
    }
  }
}
`;

type AboutPageQueryResult = {
  about: {
    teamMembers?: {
      _key?: string;
      name?: string;
      role?: string;
      bio?: string;
      img?: string;
    }[];
  } | null;
  statistics: {
    stats?: { key?: StatKey; value?: string }[];
  } | null;
};

export async function getAboutPageData(locale: string): Promise<AboutPageData> {
  const result = await sanityFetch<AboutPageQueryResult>(
    aboutPageQuery,
    { locale },
    { tags: ["about", "statistics"] }
  );

  if (!result) {
    return { stats: fallbackStats, teamMembers: [] };
  }

  const statEntries = (result.statistics?.stats ?? []).filter(
    (item): item is { key: StatKey; value: string } => Boolean(item?.key && item?.value)
  );

  const stats = statEntries.reduce<StatValues>(
    (acc, item) => {
      acc[item.key] = item.value;
      return acc;
    },
    { ...fallbackStats }
  );

  const teamMembers = (result.about?.teamMembers ?? [])
    .filter(
      (member): member is Required<NonNullable<AboutPageQueryResult["about"]>>["teamMembers"][number] =>
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
