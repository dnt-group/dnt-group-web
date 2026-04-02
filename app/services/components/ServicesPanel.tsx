"use client";

import { useState } from "react";
import ServicesList from "./ServicesList";
import ServiceDetail from "./ServiceDetail";

export default function ServicesPanel() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start">
          <ServicesList active={active} setActive={setActive} />
          <ServiceDetail active={active} setActive={setActive} />
        </div>
      </div>
    </section>
  );
}
