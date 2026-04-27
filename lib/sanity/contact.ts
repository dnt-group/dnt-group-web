import { sanityFetch } from "@/lib/sanity/client";

export type ContactSocialPlatform = "linkedin" | "instagram" | "facebook";

export type ContactSettings = {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  mapEmbedUrl: string;
  mapsUrl: string;
  socialLinks: { id: string; platform: ContactSocialPlatform; url: string }[];
};

type ContactDocument = {
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string;
  mapEmbedUrl?: string;
  mapsUrl?: string;
  socialLinks?: {
    _key?: string;
    platform?: ContactSocialPlatform;
    url?: string;
  }[];
};

const contactQuery = `
  *[
    _type == "contactSettings" &&
    (!defined(language) || language == $locale)
  ][0]{
    address,
    phone,
    email,
    workingHours,
    mapEmbedUrl,
    mapsUrl,
    socialLinks[]{
      _key,
      platform,
      url
    }
  }
`;

const emptyContactSettings: ContactSettings = {
  address: "",
  phone: "",
  email: "",
  workingHours: "",
  mapEmbedUrl: "",
  mapsUrl: "",
  socialLinks: [],
};

export async function getContactSettings(locale: string): Promise<ContactSettings> {
  const doc = await sanityFetch<ContactDocument>(
    contactQuery,
    { locale },
    { tags: ["contact"] }
  );
  if (!doc) return emptyContactSettings;

  const socialLinks = (doc.socialLinks ?? [])
    .filter(
      (item): item is Required<ContactDocument>["socialLinks"][number] =>
        Boolean(item?._key && item?.platform && item?.url)
    )
    .map((item) => ({
      id: item._key!,
      platform: item.platform!,
      url: item.url!,
    }));

  return {
    address: doc.address ?? "",
    phone: doc.phone ?? "",
    email: doc.email ?? "",
    workingHours: doc.workingHours ?? "",
    mapEmbedUrl: doc.mapEmbedUrl ?? "",
    mapsUrl: doc.mapsUrl ?? "",
    socialLinks: socialLinks ?? [],
  };
}
