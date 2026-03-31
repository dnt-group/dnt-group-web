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
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tertiary mb-4">
                            About DNT Group
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                            A Professional Hotel Management Company Built on Expertise
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-base text-primary/65 leading-relaxed">
                                DNT Group specializes in the successful operation and development of small, medium, and large hospitality projects. Our team brings together experienced industry professionals, hotel owners, and investors with deep knowledge of the hospitality market.
                            </p>
                            <p className="text-base text-primary/65 leading-relaxed">
                                From early-stage concept development to full operational management, we provide clear direction, structured planning, and hands-on leadership to ensure every project reaches its full potential.
                            </p>
                        </div>
                        <Link
                            href="/about"
                            className="inline-block bg-primary rounded-full text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:opacity-90"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}