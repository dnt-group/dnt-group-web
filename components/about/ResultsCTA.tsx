import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ResultsCTA() {
  const t = useTranslations("about.results");

  return (
    <section className="bg-warm/5 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              {t("subtitle")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-6">
              {t("title")}
            </h2>
            <p className="text-base text-primary/65 leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
            >
              {t("contactBtn")}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-primary/50 text-primary text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 uppercase tracking-wider"
            >
              {t("servicesBtn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
