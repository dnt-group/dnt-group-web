import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/lib/sanity/blog";

type BlogPostArticleProps = {
  post: BlogPost;
  contentsLabel: string;
  talkToTeamLabel: string;
};

export default function BlogPostArticle({
  post,
  contentsLabel,
  talkToTeamLabel,
}: BlogPostArticleProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                {contentsLabel}
              </p>
              <ul className="space-y-2">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <Link
                      href={`#section-${i}`}
                      className="text-sm text-slate-500 hover:text-primary transition-colors duration-200 leading-snug block py-1 border-l-2 border-slate-100 hover:border-secondary pl-3"
                    >
                      {section.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="lg:col-span-9">
            <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100 font-medium">
              {post.desc}
            </p>

            <div className="space-y-12">
              {post.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="scroll-mt-32">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-xs font-mono text-slate-300 mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-900">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="pl-8">
                    <div className="w-8 h-0.5 bg-secondary mb-4" />
                    <p className="text-base text-slate-500 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-opacity duration-200 uppercase tracking-wider shrink-0"
              >
                {talkToTeamLabel}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
