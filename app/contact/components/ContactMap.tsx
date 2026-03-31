import Link from "next/link";

export default function ContactMap() {
  return (
    <section className="w-full h-[480px] lg:h-[560px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1!2d44.7833!3d41.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7f5b8a5d5%3A0x1234567890abcdef!2s22%20Ushangi%20Chkheidze%20St%2C%20Tbilisi!5e0!3m2!1sen!2sge!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) contrast(95%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DNT Group Office Location"
      />

      <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-4 max-w-xs">
        <p className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-1">Our Office</p>
        <p className="text-sm font-bold text-slate-900">DNT Group</p>
        <p className="text-xs text-slate-500 mt-1">
          22 Ushangi Chkheidze Street,<br />Tbilisi, Georgia
        </p>

        <Link
          href="https://maps.google.com/?q=22+Ushangi+Chkheidze+Street+Tbilisi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:opacity-75 transition-opacity mt-3"
        >
          Open in Maps
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
