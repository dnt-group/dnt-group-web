import { getLocale } from "next-intl/server";

import { getServices } from "@/lib/sanity/services";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export default async function ServicesPage() {
  const locale = await getLocale();
  const services = await getServices(locale);

  return (
    <>
      <ServicesHero servicesCount={services.length} />
      <ServicesList services={services} />
      <ServicesCTA />
    </>
  );
}
