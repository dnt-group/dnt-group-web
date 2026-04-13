import { sanityClient } from "@/lib/sanity/client";

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  body: string;
  tags: string[];
  showInPreview: boolean;
}

interface ServiceDocument {
  _id: string;
  title: string;
  summary: string;
  body: string;
  tags?: string[];
  showInPreview?: boolean;
}

const servicesQuery = `
  *[
    _type == "service" &&
    (!defined(language) || language == $locale)
  ] | order(order asc, _createdAt asc) {
    _id,
    title,
    summary,
    body,
    tags,
    showInPreview
  }
`;

export async function getServices(locale: string): Promise<Service[]> {
  if (!sanityClient) return [];

  const docs = await sanityClient.fetch<ServiceDocument[]>(servicesQuery, { locale });

  return docs.map((doc, index) => ({
    id: doc._id,
    number: String(index + 1).padStart(2, "0"),
    title: doc.title,
    summary: doc.summary,
    body: doc.body,
    tags: doc.tags ?? [],
    showInPreview: doc.showInPreview ?? true,
  }));
}
