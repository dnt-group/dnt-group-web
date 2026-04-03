import { useTranslations } from "next-intl";

const statKeys = ["properties", "revenue", "guests", "experience"] as const;
const statValues = ["20+", "30%", "95%", "10+"];

export default function Statistics() {
  const t = useTranslations("home.statistics");

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {statKeys.map((key, index) => (
            <div
              key={key}
              className="relative group text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border-l-4 border-tertiary shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="block text-2xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 md:mb-2">
                {statValues[index]}
              </span>
              <span className="block text-xs md:text-sm font-display font-semibold uppercase text-gray-900 mb-1">
                {t(`${key}.label`)}
              </span>
              <span className="hidden md:block text-sm text-gray-400 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                {t(`${key}.description`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
