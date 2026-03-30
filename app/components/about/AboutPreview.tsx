import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <img
                            src="https://media.base44.com/images/public/69ca726767f2d4ba825c17dd/6b14a9417_generated_fcc81c38.png"
                            alt="DNT Group office"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-tertiary mb-3">
                            About DNT Group
                        </p>
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
                            Two Decades of Hospitality Leadership
                        </h2>
                        <p className="text-base font-body text-primary/65 leading-relaxed mb-4">
                            Founded in 2005, DNT Group has established itself as a premier hotel management
                            company with a portfolio spanning luxury resorts, boutique hotels, and urban
                            hospitality concepts across multiple continents.
                        </p>
                        <p className="text-base font-body text-primary/65 leading-relaxed mb-8">
                            Our approach combines deep industry knowledge with innovative management practices
                            to maximize performance while delivering unforgettable guest experiences.
                        </p>
                        <Link
                            href="/about"
                            className="inline-block bg-primary rounded-full text-white px-8 py-3.5 text-sm font-body font-semibold uppercase tracking-wider hover:opacity-90"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}