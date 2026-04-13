"use client";

import { useState } from "react";
import CareerHero from "@/components/career/CareerHero";
import CareerPositions from "@/components/career/CareerPositions";
import CareerGeneralApply from "@/components/career/CareerGeneralApply";
import CareerApplicationModal from "@/components/career/CareerApplicationModal";
import type { Position } from "@/lib/sanity/career";

export default function CareerPageClient({ positions }: { positions: Position[] }) {
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);

  const openForm = (position: Position | null, general = false) => {
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
      <CareerHero />
      <CareerPositions positions={positions} onApply={(position) => openForm(position)} />
      <CareerGeneralApply onGeneralApply={() => openForm(null, true)} />
      <CareerApplicationModal
        selectedPosition={selectedPosition}
        isGeneral={isGeneral}
        submitted={submitted}
        loading={loading}
        onClose={() => openForm(null)}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
