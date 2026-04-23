"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import CareerHero from "@/components/career/CareerHero";
import CareerPositions from "@/components/career/CareerPositions";
import CareerGeneralApply from "@/components/career/CareerGeneralApply";
import CareerApplicationModal from "@/components/career/CareerApplicationModal";
import type { Position } from "@/lib/sanity/career";

export default function CareerPageClient({ positions }: { positions: Position[] }) {
  const t = useTranslations("career.modal");
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isModalOpen = Boolean(selectedPosition) || isGeneral;

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  const openForm = (position: Position | null, general = false) => {
    setSelectedPosition(position);
    setIsGeneral(general);
    setSubmitted(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent, file: File | null) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError(t("cvRequired"));
      return;
    }

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const payload = new FormData();
    payload.append("firstName", String(formData.get("firstName") ?? ""));
    payload.append("lastName", String(formData.get("lastName") ?? ""));
    payload.append("email", String(formData.get("email") ?? ""));
    payload.append("phone", String(formData.get("phone") ?? ""));
    payload.append("positionTitle", selectedPosition?.title ?? "");
    payload.append("isGeneral", String(isGeneral));
    payload.append("locale", document.documentElement.lang || "");
    payload.append("honeypot", String(formData.get("company_website_url_confirm") ?? ""));
    payload.append("cv", file);

    setLoading(true);
    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: payload,
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

  return (
    <main>
      <CareerHero />
      <CareerPositions positions={positions} onApply={(position) => openForm(position)} />
      <CareerGeneralApply onGeneralApply={() => openForm(null, true)} />
      <CareerApplicationModal
        selectedPosition={selectedPosition}
        isGeneral={isGeneral}
        submitted={submitted}
        loading={loading}
        error={error}
        onClose={() => openForm(null)}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
