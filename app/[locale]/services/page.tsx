import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";

import { getServices } from "@/lib/sanity/services";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .services;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

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
