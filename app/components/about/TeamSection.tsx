"use client";

import { useRef, useState } from "react";

const team = [
  { name: "David Nakashidze", role: "Chief Executive Officer", bio: "20+ years leading hospitality operations across Georgia and Eastern Europe.", img: "https://dntgroup.ge/modules/our_experts/uploads/1.jpg" },
  { name: "Tamar Beridze", role: "Chief Operations Officer", bio: "Expert in scaling boutique hotel brands with a focus on guest satisfaction.", img: "https://dntgroup.ge/modules/our_experts/uploads/3.jpg" },
  { name: "Giorgi Tsiklauri", role: "Head of Revenue Management", bio: "Data-driven strategist with a track record of 30%+ revenue uplifts.", img: "https://dntgroup.ge/modules/our_experts/uploads/4.jpg" },
  { name: "Nino Kvaratskhelia", role: "Director of Development", bio: "Guides new hotel concepts from feasibility study to grand opening.", img: "https://dntgroup.ge/modules/our_experts/uploads/5.jpg" },
  { name: "Luka Maisuradze", role: "Head of Marketing", bio: "Builds compelling brand stories that attract guests and drive direct bookings.", img: "https://dntgroup.ge/modules/our_experts/uploads/11.jpg" },
  { name: "Ana Chikvanaia", role: "Guest Experience Director", bio: "Obsessed with the details that turn first-time visitors into loyal guests.", img: "https://dntgroup.ge/modules/our_experts/uploads/9.jpg" },
  { name: "Nikoloz Gelashvili", role: "Financial Director", bio: "Drives financial strategy and reporting across all managed properties.", img: "https://dntgroup.ge/modules/our_experts/uploads/1.jpg" },
  { name: "Salome Ivanidze", role: "HR & Training Manager", bio: "Builds world-class hospitality teams through structured development programs.", img: "https://dntgroup.ge/modules/our_experts/uploads/3.jpg" },
  { name: "Irakli Dolidze", role: "Sales Director", bio: "Grows revenue through strategic partnerships and direct sales channels.", img: "https://dntgroup.ge/modules/our_experts/uploads/4.jpg" },
  { name: "Mariam Kvlividze", role: "Quality Assurance Manager", bio: "Maintains service excellence through rigorous standards and auditing.", img: "https://dntgroup.ge/modules/our_experts/uploads/5.jpg" },
];

function TeamSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.offsetWidth / getVisibleCards() + 32;
    sliderRef.current.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
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
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
  };

  const ArrowButton = ({ dir }: { dir: "left" | "right" }) => (
    <button
      onClick={() => scroll(dir)}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="absolute top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-colors duration-200"
      style={{ [dir === "left" ? "left" : "right"]: "-20px" }}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  return (
    <div className="relative">
      <ArrowButton dir="left" />
      <ArrowButton dir="right" />

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 select-none mx-4"
        style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {team.map((member) => (
          <div
            key={member.name}
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

export default function TeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-4 block">
              Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Industry Experts Driving Hotel Success
            </h2>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed lg:pb-1">
            DNT Group is powered by a multidisciplinary team with backgrounds in hospitality, real estate, design, and technology. Our combined expertise allows us to deliver strategic hotel management, operational excellence, and innovative solutions that drive both guest satisfaction and financial performance.
          </p>
        </div>

        <TeamSlider />
      </div>
    </section>
  );
}
