import { sanityFetch } from "@/lib/sanity/client";

export type Project = {
  id: string;
  slug: string;
  img: string;
  title: string;
  location: string;
  type: string;
  status: "ongoing" | "completed";
  desc: string;
  showInPreview: boolean;
};

export type ProjectDetail = {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  status: "ongoing" | "completed";
  year?: string;
  services: string[];
  featuredImg: string;
  images: string[];
  body: string;
};
type ProjectDocument = {
  _id: string;
  slug?: string;
  imageUrl?: string;
  title: string;
  location: string;
  projectType: string;
  status: "ongoing" | "completed";
  description: string;
  showInPreview?: boolean;
};
const projectsQuery = `
  *[
    _type == "project" &&
    defined(slug.current) &&
    (!defined(language) || language == $locale)
  ] | order(order asc, _createdAt desc) {
    _id,
    "slug": slug.current,
    "imageUrl": featuredImage.asset->url,
    title,
    location,
    projectType,
    status,
    description,
    showInPreview
  }
`;

const projectBySlugQuery = `
  *[
    _type == "project" &&
    slug.current == $slug &&
    (!defined(language) || language == $locale)
  ][0] {
    _id,
    "slug": slug.current,
    title,
    location,
    projectType,
    status,
    year,
    "services": services[]->title,
    body,
    "featuredImg": featuredImage.asset->url,
    "galleryUrls": gallery[].asset->url
  }
`;
export async function getProjects(locale: string): Promise<Project[]> {
  const docs = await sanityFetch<ProjectDocument[]>(
    projectsQuery,
    { locale },
    { tags: ["projects"] }
  );
  if (!docs) return [];
  return docs
    .filter((doc) => Boolean(doc.slug && doc.imageUrl))
    .map((doc) => ({
      id: doc._id,
      slug: doc.slug!,
      img: doc.imageUrl!,
      title: doc.title,
      location: doc.location,
      type: doc.projectType,
      status: doc.status,
      desc: doc.description,
      showInPreview: doc.showInPreview ?? true,
    }));
}

type ProjectDetailDocument = {
  _id: string;
  slug: string;
  title: string;
  location: string;
  projectType: string;
  status: "ongoing" | "completed";
  year?: string;
  services?: string[];
  body: string;
  featuredImg?: string;
  galleryUrls?: string[];
};

export async function getProjectBySlug(
  locale: string,
  slug: string
): Promise<ProjectDetail | null> {
  const doc = await sanityFetch<ProjectDetailDocument>(
    projectBySlugQuery,
    { locale, slug },
    { tags: ["projects", `project-${slug}`] }
  );

  if (!doc?.featuredImg) return null;

  const gallery = (doc.galleryUrls ?? []).filter(Boolean);

  return {
    id: doc._id,
    slug: doc.slug,
    title: doc.title,
    location: doc.location,
    type: doc.projectType,
    status: doc.status,
    year: doc.year,
    services: doc.services ?? [],
    featuredImg: doc.featuredImg,
    images: [doc.featuredImg, ...gallery],
    body: doc.body,
  };
}
