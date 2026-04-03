import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ServicesCTA() {
  const t = useTranslations("services.cta");

  return (
    <section className="bg-warm/5 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
            {t("subtitle")}
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-primary leading-tight mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base text-primary/65 leading-relaxed mb-10">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
            >
              {t("contactBtn")}
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-primary/20 hover:border-primary/50 text-primary text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 uppercase tracking-wider"
            >
              {t("projectsBtn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
