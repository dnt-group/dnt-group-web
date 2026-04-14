import { getTranslations } from "next-intl/server";

export default async function BlogHeroSection() {
  const t = await getTranslations("blogs.hero");

  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              {t("subtitle")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
              {t("title")}
            </h1>
          </div>
          <p className="text-base text-slate-500 leading-relaxed lg:pb-2">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}
