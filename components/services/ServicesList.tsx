import type { Service } from "@/lib/sanity/services";
import ServiceCard from "./ServiceCard";

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="divide-y divide-slate-100">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
