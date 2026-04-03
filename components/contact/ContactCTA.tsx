import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactCTA() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-warm/5 rounded-2xl py-16 px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 max-w-2xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-base font-body text-primary/65 leading-relaxed mb-8 max-w-xl mx-auto">
            {t("description")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-tertiary rounded-full text-white px-10 py-4 text-sm font-body font-semibold uppercase tracking-widest hover:opacity-90"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
