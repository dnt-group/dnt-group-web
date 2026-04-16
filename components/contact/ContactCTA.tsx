import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactCTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-warm/5 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight break-words mb-6">
            {t("title")}
          </h2>
          <p className="text-base text-primary/65 leading-relaxed mb-10">
            {t("description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
