import { getLocale } from "next-intl/server";

import { getBlogs } from "@/lib/sanity/blog";

import BlogGridSection from "../../../components/blogs/BlogGridSection";
import BlogHeroSection from "../../../components/blogs/BlogHeroSection";

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