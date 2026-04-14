import type { BlogPost } from "@/lib/sanity/blog";
import BlogCard from "./BlogCard";

type BlogGridSectionProps = {
  posts: BlogPost[];
};

export default function BlogGridSection({ posts }: BlogGridSectionProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
