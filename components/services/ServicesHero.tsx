interface ServicesHeroProps {
  servicesCount: number;
}

export default function ServicesHero({ servicesCount }: ServicesHeroProps) {
  return (
    <section className="bg-white pt-16 pb-0 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-8 block">
          Services
        </span>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-primary leading-[0.9] tracking-tight mb-0">
          Strategic<br />
          <span className="text-stroke">Management</span><br />
          That Drives<br />
          Results
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-12 pt-8 border-t border-slate-100">
          <p className="text-base text-slate-500 leading-relaxed max-w-md">
            DNT Group delivers hands-on hotel management across market positioning, operational optimization, and revenue growth. From concept to full-scale operations.
          </p>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-300 shrink-0">
            {servicesCount} Services
          </span>
        </div>
      </div>

      <style>{`.text-stroke { -webkit-text-stroke: 3px #08213f; color: transparent; }`}</style>
    </section>
  );
}
