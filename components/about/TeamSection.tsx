"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { TeamMember } from "@/lib/sanity/about";

function TeamSlider({ team }: { team: TeamMember[] }) {
  const t = useTranslations("about.team");
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.offsetWidth / getVisibleCards() + 32;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const needsSlider = team.length > 3;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current || !needsSlider) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) sliderRef.current.style.cursor = needsSlider ? "grab" : "default";
  };

  return (
    <div className="relative">
      {needsSlider && (
        <>
          <button
            onClick={() => scroll("left")}
            aria-label={t("prev")}
            className="absolute top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-colors duration-200"
            style={{ left: "-20px" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label={t("next")}
            className="absolute top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-colors duration-200"
            style={{ right: "-20px" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div
        ref={sliderRef}
        className={`flex gap-6 overflow-x-auto scroll-smooth pb-4 mx-4 ${needsSlider ? "select-none" : ""}`}
        style={{
          cursor: needsSlider ? "grab" : "default",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={needsSlider ? onMouseDown : undefined}
        onMouseMove={needsSlider ? onMouseMove : undefined}
        onMouseUp={needsSlider ? onMouseUp : undefined}
        onMouseLeave={needsSlider ? onMouseUp : undefined}
      >
        {team.map((member) => (
          <div
            key={member.id}
            className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-slate-100">
              <img
                src={member.img}
                alt={member.name}
                draggable={false}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="px-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-1">
                {member.role}
              </p>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {member.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}

export default function TeamSection({ teamMembers }: { teamMembers: TeamMember[] }) {
  const t = useTranslations("about.team");

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-4 block">
              {t("subtitle")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed lg:pb-1">
            {t("description")}
          </p>
        </div>

        <TeamSlider team={teamMembers} />
      </div>
    </section>
  );
}
