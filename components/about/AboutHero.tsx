import { useTranslations } from "next-intl";
import type { StatValues } from "@/lib/sanity/about";

const statKeys = ["properties", "revenue", "guests", "experience"] as const;


export default function AboutHero({ statValues }: { statValues: StatValues }) {
  const t = useTranslations("about.hero");
  const tStats = useTranslations("home.statistics");

  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
            {t("subtitle")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] max-w-4xl">
            {t("title")}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <p className="text-base text-slate-500 leading-relaxed">
              {t("description1")}
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              {t("description2")}
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-base text-slate-500 leading-relaxed">
              {t("description3")}
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              {t("description4")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 mt-16 rounded-xl overflow-hidden">
          {statKeys.map((key) => (
            <div key={key} className="bg-white px-8 py-7 text-center">
              <span className="block text-3xl lg:text-4xl font-bold text-secondary mb-1">
                {statValues[key]}
              </span>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-semibold">
                {tStats(`${key}.label`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
