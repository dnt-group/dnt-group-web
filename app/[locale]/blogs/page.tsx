import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";

import { getBlogs } from "@/lib/sanity/blog";

import BlogGridSection from "../../../components/blogs/BlogGridSection";
import BlogHeroSection from "../../../components/blogs/BlogHeroSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .blogs;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BlogPage() {
  const locale = await getLocale();
  const blogs = await getBlogs(locale);

  return (
    <>
      <BlogHeroSection />
      <BlogGridSection posts={blogs} />
    </>
  );
}