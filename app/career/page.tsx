"use client";

import { useState } from "react";

const positions = [
  {
    id: 1,
    title: "Hotel Operations Manager",
    type: "Full-time",
    location: "Tbilisi, Georgia",
    department: "Operations",
    desc: "Lead day-to-day operations across one or more managed properties, ensuring service excellence, team performance, and financial targets are met.",
    requirements: [
      "3+ years hotel operations experience",
      "Strong leadership and team management skills",
      "Fluent in Georgian and English",
      "Experience with PMS systems",
    ],
  },
  {
    id: 2,
    title: "Revenue Manager",
    type: "Full-time",
    location: "Tbilisi, Georgia",
    department: "Revenue",
    desc: "Drive revenue performance across our hotel portfolio through dynamic pricing, OTA optimization, demand forecasting, and market benchmarking.",
    requirements: [
      "2+ years revenue management experience",
      "Proficiency in OTA platforms and channel managers",
      "Strong analytical and Excel skills",
      "Knowledge of ADR, RevPAR, and occupancy metrics",
    ],
  },
  {
    id: 3,
    title: "Sales & Marketing Specialist",
    type: "Full-time",
    location: "Tbilisi, Georgia",
    department: "Sales",
    desc: "Develop and execute sales and marketing strategies for hotel clients, including digital marketing, corporate partnerships, and direct booking campaigns.",
    requirements: [
      "2+ years in hospitality sales or marketing",
      "Experience with digital marketing tools",
      "Strong communication and presentation skills",
      "English proficiency required",
    ],
  },
  {
    id: 4,
    title: "Hotel Pre-Opening Coordinator",
    type: "Project-based",
    location: "Georgia (various)",
    department: "Development",
    desc: "Coordinate all pre-opening activities for new hotel projects, working closely with owners, contractors, and operational teams to ensure a smooth launch.",
    requirements: [
      "Experience in hotel pre-opening or project management",
      "Strong organizational and multitasking skills",
      "Ability to travel across Georgia",
      "Fluent in Georgian and English",
    ],
  },
  {
    id: 5,
    title: "Front Office Supervisor",
    type: "Full-time",
    location: "Tbilisi, Georgia",
    department: "Operations",
    desc: "Oversee front desk operations at a managed property, ensuring exceptional guest check-in/check-out experiences and smooth daily workflow.",
    requirements: [
      "1+ years front office experience",
      "Warm, guest-focused personality",
      "Fluent in Georgian, English; Russian is a plus",
      "Experience with hotel PMS software",
    ],
  },
];

const departments = ["All", ...Array.from(new Set(positions.map((p) => p.department)))];

export default function CareerPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [selectedPosition, setSelectedPosition] = useState<typeof positions[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);

  const filtered = positions.filter((p) =>
    activeDept === "All" ? true : p.department === activeDept
  );

  const openForm = (position: typeof positions[0] | null, general = false) => {
    setSelectedPosition(position);
    setIsGeneral(general);
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
                Careers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1]">
                Build Your Career in Hospitality
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSITIONS ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header + filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2 block">
                Open Positions
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                {filtered.length} {activeDept === "All" ? "Roles" : activeDept + " Roles"} Available
              </h2>
            </div>
          </div>

          {/* Position list */}
          <div className="divide-y divide-slate-200 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {filtered.map((position) => (
              <div
                key={position.id}
                className="group p-6 lg:p-8 hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">

                  {/* Info */}
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-tertiary border border-tertiary/30 bg-tertiary/5 px-2.5 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        position.type === "Full-time"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}>
                        {position.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                      {position.title}
                    </h3>

                    <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </p>

                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {position.desc}
                    </p>

                    {/* Requirements */}
                    <ul className="space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                          <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="lg:col-span-4 flex lg:justify-end lg:items-start">
                    <button
                      onClick={() => openForm(position)}
                      className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white text-xs font-semibold px-6 py-3 rounded-full transition-opacity duration-200 uppercase tracking-wider"
                    >
                      Apply Now
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── GENERAL APPLY ── */}
      <section className="bg-warm/5 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary mb-5 block">
                Don't See Your Role?
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">
                Send us a general application
              </h2>
              <p className="text-base text-primary/65 leading-relaxed">
                We're always interested in meeting talented hospitality professionals. Send us your CV and tell us how you'd contribute to the DNT Group team.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <button
                onClick={() => openForm(null, true)}
                className="inline-flex items-center gap-2 bg-tertiary hover:opacity-90 text-white text-sm font-semibold px-8 py-4 rounded-full transition-opacity duration-200 uppercase tracking-wider"
              >
                General Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION MODAL ── */}
      {(selectedPosition || isGeneral) && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) openForm(null); }}
        >
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">

              {/* Modal header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-1">
                    {isGeneral ? "General Application" : "Apply for Position"}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">
                    {isGeneral ? "Send Your CV" : selectedPosition?.title}
                  </h3>
                </div>
                <button
                  onClick={() => openForm(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200 shrink-0"
                >
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Application Sent</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Thank you for your interest in DNT Group. We'll review your application and be in touch within a few business days.
                  </p>
                  <button
                    onClick={() => openForm(null)}
                    className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        First Name <span className="text-tertiary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Last Name <span className="text-tertiary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Email Address <span className="text-tertiary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+995 555 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Cover Letter / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about yourself and why you'd like to join DNT Group..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      CV / Resume <span className="text-tertiary">*</span>
                    </label>
                    <div className="w-full px-4 py-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-colors duration-200">
                      <svg className="w-5 h-5 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <p className="text-xs text-slate-400">Upload PDF or Word document</p>
                      <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:opacity-90 disabled:opacity-60 text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-xl transition-opacity duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}