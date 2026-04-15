import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import CareerPageClient from "@/components/career/CareerPageClient";
import { getCareerPositions } from "@/lib/sanity/career";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .career;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function CareerPage() {
  const locale = await getLocale();
  const positions = await getCareerPositions(locale);

  return <CareerPageClient positions={positions} />;
}