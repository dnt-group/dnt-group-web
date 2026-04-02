import { services } from "./data";
import ServicesHero from "../../components/services/ServicesHero";
import ServicesList from "../../components/services/ServicesList";
import ServicesCTA from "../../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero servicesCount={services.length} />
      <ServicesList services={services} />
      <ServicesCTA />
    </main>
  );
}
