"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function CareerHero() {
  const t = useTranslations("career.hero");
  const locale = useLocale();
  const isGeorgian = locale === "ka";

  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              {t("subtitle")}
            </span>
            <h1
              className={`font-bold text-primary leading-[1.1] ${
                isGeorgian
                  ? "text-2xl sm:text-3xl lg:text-5xl"
                  : "text-4xl sm:text-5xl lg:text-6xl"
              }`}
            >
              {t("title")}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
