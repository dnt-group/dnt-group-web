import Link from "next/link";

export default function ContactMap() {
  return (
    <section className="w-full h-[480px] lg:h-[560px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1!2d44.7833!3d41.6833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7f5b8a5d5%3A0x1234567890abcdef!2s22%20Ushangi%20Chkheidze%20St%2C%20Tbilisi!5e0!3m2!1sen!2sge!4v1234567890&output=embed&hl=en"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(20%) contrast(95%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

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
    </section>
  );
}
