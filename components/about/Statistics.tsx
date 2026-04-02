const stats = [
    { value: "20+", label: "Properties Managed", description: "Overseas diverse hospitality projects across Georgia, from concept to full operational management" },
    { value: "30%", label: "Revenue Growth", description: "Hotel partners achieve significant revenue growth through our expert management and marketing strategies" },
    { value: "95%", label: "Client Retention", description: "Hotel owners continue partnering with us for long-term success" },
    { value: "10+", label: "Years of Experience", description: "Our team brings decades of expertise in hospitality strategy, operations, and financial performance across all property sizes" }
];

export default function Statistics() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border-l-4 border-tertiary shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <span className="block text-2xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 md:mb-2">
                                {stat.value}
                            </span>
                            <span className="block text-xs md:text-sm font-display font-semibold uppercase text-gray-900 mb-1">
                                {stat.label}
                            </span>
                            <span className="hidden md:block text-sm text-gray-400 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                                {stat.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}