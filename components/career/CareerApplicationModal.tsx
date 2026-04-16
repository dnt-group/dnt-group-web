"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import type { Position } from "@/lib/sanity/career";

type CareerApplicationModalProps = {
  selectedPosition: Position | null;
  isGeneral: boolean;
  submitted: boolean;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent, file: File | null) => void;
};

export default function CareerApplicationModal({
  selectedPosition,
  isGeneral,
  submitted,
  loading,
  error,
  onClose,
  onSubmit,
}: CareerApplicationModalProps) {
  const t = useTranslations("career.modal");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleClose = () => {
    setSelectedFile(null);
    onClose();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    onSubmit(e, selectedFile);
  };

  if (!selectedPosition && !isGeneral) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-1">
                {isGeneral ? t("generalTitle") : t("applyForPosition")}
              </p>
              <h3 className="text-xl font-bold text-slate-900">
                {isGeneral ? t("sendCv") : selectedPosition?.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200 shrink-0 cursor-pointer"
              aria-label={t("close")}
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("successTitle")}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{t("successMessage")}</p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-primary transition-colors cursor-pointer"
              >
                {t("close")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Honeypot - use obscure name to avoid autofill */}
              <input
                type="text"
                name="company_website_url_confirm"
                tabIndex={-1}
                autoComplete="new-password"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    {t("firstName")} <span className="text-tertiary">*</span>
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    minLength={2}
                    maxLength={50}
                    placeholder={t("firstNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    {t("lastName")} <span className="text-tertiary">*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    minLength={2}
                    maxLength={50}
                    placeholder={t("lastNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                  />
                </div>
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
                  placeholder={t("phonePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-secondary focus:bg-white transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t("cv")} <span className="text-tertiary">*</span>
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full px-4 py-4 rounded-xl border border-dashed bg-slate-50 text-center cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-colors duration-200 ${
                    selectedFile ? "border-secondary bg-secondary/5" : "border-slate-200"
                  }`}
                >
                  {selectedFile ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm text-slate-700 truncate max-w-[200px]">{selectedFile.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="ml-2 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <p className="text-xs text-slate-400">{t("cvUpload")}</p>
                    </>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:opacity-90 disabled:opacity-60 text-white text-sm font-semibold uppercase tracking-wider py-4 rounded-xl transition-opacity duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    {t("submitting")}
                  </>
                ) : (
                  t("submit")
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
