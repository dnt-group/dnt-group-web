"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      locale: document.documentElement.lang || "",
      pageUrl: window.location.href,
      honeypot: String(formData.get("company_website_url_confirm") ?? ""),
    };

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setError(t("submitError"));
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(t("submitError"));
    } finally {
      setLoading(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setError(null);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
        <div className="flex flex-col items-center justify-center h-full py-12 text-center">
          <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {t("successTitle")}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
            {t("successMessage")}
          </p>
          <button
            type="button"
            onClick={handleSendAnother}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            {t("sendAnother")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
      <h3 className="text-lg font-bold text-slate-900 mb-6">{t("title")}</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {/* Honeypot - use obscure name to avoid autofill */}
        <input
          type="text"
          name="company_website_url_confirm"
          tabIndex={-1}
          autoComplete="new-password"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
        />

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t("fullName")} <span className="text-tertiary">*</span>
          </label>
          <input
            name="fullName"
            type="text"
            required
            minLength={2}
            maxLength={120}
            placeholder={t("fullNamePlaceholder")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t("email")} <span className="text-tertiary">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            placeholder={t("emailPlaceholder")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t("phone")}
          </label>
          <input
            name="phone"
            type="tel"
            maxLength={20}
            pattern="[+]?[\d\s\-().]{7,20}"
            title={t("phonePattern")}
            placeholder={t("phonePlaceholder")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            {t("message")} <span className="text-tertiary">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={3000}
            placeholder={t("messagePlaceholder")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:opacity-90 disabled:opacity-60 text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-xl transition-opacity duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              {t("sending")}
            </>
          ) : (
            t("submit")
          )}
        </button>
      </form>
    </div>
  );
}
