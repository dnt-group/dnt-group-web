import { Link } from "@/i18n/navigation";

import type { BlogPost } from "@/lib/sanity/blog";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-400">{post.date}</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug mb-3 group-hover:text-secondary transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {post.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
