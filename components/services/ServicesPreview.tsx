import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const serviceKeys = [
  "operations",
  "revenue",
  "marketing",
  "financial",
  "hr",
  "quality",
] as const;

const serviceNumbers = ["01", "02", "03", "04", "05", "06"];

export default function ServicesPreview() {
  const t = useTranslations("home.services");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl mb-12 md:mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-tertiary mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary">
            {t("title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, index) => (
            <div
              key={key}
              className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="block text-xs font-mono text-slate-300 tracking-widest mb-6">
                {serviceNumbers[index]}
              </span>
              <h3 className="text-base font-semibold text-slate-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                {t(`items.${key}.title`)}
              </h3>
              <div className="w-8 h-px bg-slate-200 mb-4 group-hover:w-14 group-hover:bg-secondary transition-all duration-300" />
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 flex items-center gap-6 justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-tertiary transition-colors duration-300"
          >
            <span className="w-10 h-px bg-primary group-hover:w-16 group-hover:bg-tertiary transition-all duration-300 inline-block" />
            {t("viewAll")}
            <svg
              className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
