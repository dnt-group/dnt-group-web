import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { HomeHeroContent } from "@/lib/sanity/homeHero";

type HeroSectionProps = {
  content: HomeHeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  const t = useTranslations("home.hero");
  const fallbackPosterUrl = "/hero-fallback.jpg";

  return (
    <section className="relative h-[95vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 bg-primary">
        <Image
          src={fallbackPosterUrl}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover z-0"
        />
        <video
          key={content.backgroundVideoUrl}
          src={content.backgroundVideoUrl}
          poster={fallbackPosterUrl}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 bg-primary/60 z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-tight mb-6">
            {content.title}
          </h1>
          <p className="text-base md:text-lg font-body text-white/80 leading-relaxed mb-8 max-w-lg">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-block bg-tertiary rounded-full text-white px-8 py-3.5 text-sm font-body font-semibold uppercase tracking-wider hover:opacity-90"
            >
              {t("servicesBtn")}
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 rounded-full text-white px-8 py-3.5 text-sm font-body font-semibold uppercase tracking-wider hover:bg-white/5"
            >
              {t("contactBtn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
