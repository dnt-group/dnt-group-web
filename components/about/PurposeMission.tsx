import { useTranslations } from "next-intl";

const valueKeys = ["standards", "operationalExcellence", "innovation", "partnership"] as const;

export default function PurposeMission() {
  const t = useTranslations("about.purpose");
  const tValues = useTranslations("about.values");

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-10 border border-slate-200">
            <div className="w-8 h-0.5 bg-secondary mb-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4 block">
              {t("title")}
            </span>
            <p className="text-lg font-semibold text-slate-800 leading-relaxed">
              {t("description")}
            </p>
          </div>
          <div className="bg-primary rounded-2xl p-10">
            <div className="w-8 h-0.5 bg-tertiary mb-6" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-4 block">
              {t("missionTitle")}
            </span>
            <p className="text-lg font-semibold text-white leading-relaxed">
              {t("missionDescription")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueKeys.map((key) => (
            <div
              key={key}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-secondary hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-6 h-0.5 bg-secondary mb-4 group-hover:w-10 transition-all duration-300" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {tValues(`${key}.title`)}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {tValues(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
