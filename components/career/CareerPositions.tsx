"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Position } from "@/lib/sanity/career";

type CareerPositionsProps = {
  positions: Position[];
  onApply: (position: Position) => void;
};

export default function CareerPositions({ positions, onApply }: CareerPositionsProps) {
  const t = useTranslations("career.positions");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const typeLabel = (type: Position["type"]) =>
    type === "Full-time" ? t("typeFullTime") : t("typeProjectBased");

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  if (positions.length === 0) {
    return (
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-500 max-w-xl mx-auto">
            {t("noPositionsDescription")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2 block">
            {t("title")}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            {t("rolesAvailable", { count: positions.length })}
          </h2>
        </div>

        {/* Position list */}
        <div className="divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          {positions.map((position) => {
            const isOpen = expandedId === position.id;

            return (
              <div key={position.id} className="group">

                {/* ── Collapsed row ── */}
                <button
                  onClick={() => toggle(position.id)}
                  className="w-full text-left p-6 lg:p-8 hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-12 gap-4 items-start lg:items-center">
                    <div className="min-w-0 lg:col-span-8">

                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${position.type === "Full-time"
                            ? "bg-green-50 text-green-600 border border-green-100"
                            : "bg-blue-50 text-blue-600 border border-blue-100"
                          }`}>
                          {typeLabel(position.type)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-200 ${isOpen ? "text-secondary" : "text-slate-900 group-hover:text-secondary"
                        }`}>
                        {position.title}
                      </h3>

                      {/* Teaser */}
                      {position.description && (
                        <p className="text-sm text-slate-400 leading-relaxed mb-3 line-clamp-1">
                          {position.description}
                        </p>
                      )}

                      {/* Location */}
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </p>
                    </div>

                    {/* Chevron */}
                    <div className="lg:col-span-4 flex justify-end self-start lg:self-auto">
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${isOpen
                          ? "bg-primary border-primary"
                          : "bg-white border-slate-200 group-hover:border-primary"
                        }`}>
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${isOpen ? "rotate-180 text-white" : "text-slate-400 group-hover:text-primary"
                            }`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* ── Expanded content ── */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="px-6 lg:px-8 pb-8 space-y-8 border-t border-slate-100">

                    {/* Requirements */}
                    <div className="pt-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        {t("requirements")}
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                            <div className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Duties */}
                    {position.duties && position.duties.length > 0 && (
                      <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                          {t("duties")}
                        </h4>
                        <ul className="space-y-2">
                          {position.duties.map((duty, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                              <div className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Additional Info */}
                    {(position.salary || position.additionalInfo) && (
                      <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                          {t("additionalInfo")}
                        </h4>
                        {position.salary && (
                          <p className="text-sm text-slate-600 mb-2">
                            <span className="font-semibold text-slate-800">{t("salary")}:</span> {position.salary}
                          </p>
                        )}
                        {position.additionalInfo && (
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {position.additionalInfo}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Apply */}
                    <div className="pt-6 border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => onApply(position)}
                        className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white text-xs font-semibold px-8 py-3.5 rounded-full transition-opacity duration-200 uppercase tracking-wider cursor-pointer"
                      >
                        {t("applyNow")}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}