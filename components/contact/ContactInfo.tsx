"use client";

import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contact.info");
  const tCommon = useTranslations("common");

  const contactItems = [
    {
      icon: (
        <svg
          className="w-4 h-4 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: t("office"),
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          {tCommon("address")}
        </p>
      ),
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: t("phone"),
      content: (
        <a
          href={`tel:${tCommon("phone").replace(/\s/g, "")}`}
          className="text-sm text-slate-700 hover:text-secondary transition-colors"
        >
          {tCommon("phone")}
        </a>
      ),
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: t("email"),
      content: (
        <a
          href={`mailto:${tCommon("email")}`}
          className="text-sm text-slate-700 hover:text-secondary transition-colors"
        >
          {tCommon("email")}
        </a>
      ),
    },
    {
      icon: (
        <svg
          className="w-4 h-4 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: t("workingHours"),
      content: <p className="text-sm text-slate-700">{t("hours")}</p>,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-8">{t("title")}</h2>

      <div className="space-y-6 mb-12">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                {item.label}
              </p>
              {item.content}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-slate-200 mb-8" />
      <p className="text-xs text-slate-400 leading-relaxed">
        {t("responseNote")}
      </p>
    </div>
  );
}
