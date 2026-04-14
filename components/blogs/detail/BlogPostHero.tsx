import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/lib/sanity/blog";

type BlogPostHeroProps = {
  post: BlogPost;
  backToBlogsLabel: string;
  authorLabel: string;
  minReadLabel: string;
};

export default function BlogPostHero({
  post,
  backToBlogsLabel,
  authorLabel,
  minReadLabel,
}: BlogPostHeroProps) {
  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 mb-10 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {backToBlogsLabel}
        </Link>

        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.1] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{authorLabel}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{minReadLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
