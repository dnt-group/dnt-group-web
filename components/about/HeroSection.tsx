import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="relative h-[95vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.25em] text-tertiary mb-4">
              Hotel Management Excellence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-tight mb-6">
              Crafting Exceptional Hospitality Experiences
            </h1>
            <p className="text-base md:text-lg font-body text-white/80 leading-relaxed mb-8 max-w-lg">
              DNT Group brings decades of expertise in hotel management, development, 
              and consulting to create world-class hospitality destinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-block bg-tertiary rounded-full text-white px-8 py-3.5 text-sm font-body font-semibold uppercase tracking-wider hover:opacity-90"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/30 rounded-full text-white px-8 py-3.5 text-sm font-body font-semibold uppercase tracking-wider hover:bg-white/5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }