import { useTranslations } from "next-intl";
import type { ContactSettings } from "@/lib/sanity/contact";

export default function ContactMap({ contact }: { contact: ContactSettings }) {
  const t = useTranslations("contact.map");

  return (
    <section className="w-full h-[480px] lg:h-[560px] relative">
      <iframe
        src={contact.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) contrast(95%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a
        href={contact.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:opacity-75 transition-opacity mt-3"
      >
        {t("openInMaps")}
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </section>
  );
}
