import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BlogPostArticle from "@/components/blogs/detail/BlogPostArticle";
import BlogPostCoverImage from "@/components/blogs/detail/BlogPostCoverImage";
import BlogPostHero from "@/components/blogs/detail/BlogPostHero";
import { getBlogBySlug } from "@/lib/sanity/blog";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale();
  const t = await getTranslations("blogs");
  const { slug } = await params;
  const post = await getBlogBySlug(locale, slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostHero
        post={post}
        backToBlogsLabel={t("backToBlogs")}
        authorLabel={t("author")}
        minReadLabel={t("minRead", { minutes: post.sections.length * 2 })}
      />
      <BlogPostCoverImage post={post} />
      <BlogPostArticle
        post={post}
        contentsLabel={t("contents")}
        talkToTeamLabel={t("talkToTeam")}
      />
    </>
  );
}