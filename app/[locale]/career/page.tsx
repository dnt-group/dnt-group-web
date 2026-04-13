import { getLocale } from "next-intl/server";
import CareerPageClient from "@/components/career/CareerPageClient";
import { getCareerPositions } from "@/lib/sanity/career";

export default async function CareerPage() {
  const locale = await getLocale();
  const positions = await getCareerPositions(locale);

  return <CareerPageClient positions={positions} />;
}