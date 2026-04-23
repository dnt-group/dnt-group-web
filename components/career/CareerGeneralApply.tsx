"use client";

import { useTranslations } from "next-intl";

export default function CareerGeneralApply({ onGeneralApply }: { onGeneralApply: () => void }) {
  const t = useTranslations("career.general");

  return (
    <section className="bg-warm/5 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary leading-tight mb-4">
              {t("heading")}
            </h2>
            <p className="text-base text-primary/65 leading-relaxed">{t("description")}</p>
          </div>
          <div className="flex lg:justify-end">
            <button
              onClick={onGeneralApply}
              className="inline-flex items-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider cursor-pointer"
            >
              {t("button")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
