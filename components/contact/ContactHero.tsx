import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactHero() {
  return (
    <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 lg:mb-16 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
              Ready to Grow Your Hotel?
            </h1>
          </div>
          <p className="text-base text-slate-500 leading-relaxed lg:pb-2">
            Contact DNT Group in Tbilisi to discuss strategic management, operational optimization, and revenue growth for your hospitality project.
          </p>
        </div>

        <div className="w-full h-px bg-slate-200 mb-12 lg:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
