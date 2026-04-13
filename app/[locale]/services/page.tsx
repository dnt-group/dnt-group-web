import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";
import { getLocale } from "next-intl/server";
import { getServices } from "@/lib/sanity/services";

export default async function ServicesPage() {
  const locale = await getLocale();
  const services = await getServices(locale);

  return (
    <main>
      <ServicesHero servicesCount={services.length} />
      <ServicesList services={services} />
      <ServicesCTA />
    </main>
  );
}
