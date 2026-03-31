"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
        <div className="flex flex-col items-center justify-center h-full py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Thank you for reaching out. We'll get back to you within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Full Name <span className="text-tertiary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
          />
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
            Message <span className="text-tertiary">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="Tell us about your hospitality project..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200 resize-none"
          />
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
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
