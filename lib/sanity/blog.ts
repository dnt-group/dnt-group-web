import { sanityClient } from "@/lib/sanity/client";

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  img: string;
  date: string;
  title: string;
  desc: string;
  tags: string[];
  sections: BlogSection[];
};

type BlogDocument = {
  _id: string;
  slug?: string;
  imageUrl?: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  tags?: string[];
  sections?: BlogSection[];
};

const blogsQuery = `
  *[
    _type == "blog" &&
    defined(slug.current) &&
    (!defined(language) || language == $locale)
  ] | order(order asc, publishedAt desc, _createdAt desc) {
    _id,
    "slug": slug.current,
    "imageUrl": coverImage.asset->url,
    publishedAt,
    title,
    excerpt,
    tags,
    sections[]{
      heading,
      body
    }
  }
`;

const blogBySlugQuery = `
  *[
    _type == "blog" &&
    slug.current == $slug &&
    (!defined(language) || language == $locale)
  ][0] {
    _id,
    "slug": slug.current,
    "imageUrl": coverImage.asset->url,
    publishedAt,
    title,
    excerpt,
    tags,
    sections[]{
      heading,
      body
    }
  }
`;

function formatDate(dateValue: string): string {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function mapBlog(doc: BlogDocument): BlogPost | null {
  if (!doc.slug || !doc.imageUrl) return null;

  return {
    id: doc._id,
    slug: doc.slug,
    img: doc.imageUrl,
    date: formatDate(doc.publishedAt),
    title: doc.title,
    desc: doc.excerpt,
    tags: doc.tags ?? [],
    sections: (doc.sections ?? []).filter(
      (section) => Boolean(section.heading && section.body)
    ),
  };
}

export async function getBlogs(locale: string): Promise<BlogPost[]> {
  if (!sanityClient) return [];

  const docs = await sanityClient.fetch<BlogDocument[]>(blogsQuery, { locale });
  return docs.map(mapBlog).filter((post): post is BlogPost => Boolean(post));
}

export async function getBlogBySlug(
  locale: string,
  slug: string
): Promise<BlogPost | null> {
  if (!sanityClient) return null;

  const doc = await sanityClient.fetch<BlogDocument | null>(blogBySlugQuery, {
    locale,
    slug,
  });

  if (!doc) return null;
  return mapBlog(doc);
}
