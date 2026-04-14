import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/sanity/blog";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = await getBlogBySlug(locale, slug);
  if (!post) notFound();

  return (
    <>

      {/* ── HERO ── */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Back */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 mb-10 group"
          >
            <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <div className="max-w-3xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-[1.1] mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>DNT Group</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{post.sections.length * 2} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-0 pt-10">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Sticky sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                  Contents
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

            {/* Article body */}
            <article className="lg:col-span-9">

              {/* Lead */}
              <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100 font-medium">
                {post.desc}
              </p>

              {/* Sections */}
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

              {/* Bottom meta */}
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-secondary border border-secondary/30 bg-secondary/5 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-opacity duration-200 uppercase tracking-wider shrink-0"
                >
                  Talk to Our Team
                </Link>
              </div>

            </article>
          </div>
        </div>
      </section>
    </>
  );
}