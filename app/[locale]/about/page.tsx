import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import PurposeMission from "@/components/about/PurposeMission";
import TeamSection from "@/components/about/TeamSection";
import ResultsCTA from "@/components/about/ResultsCTA";
import { getAboutPageData } from "@/lib/sanity/about";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .about;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const { stats, teamMembers } = await getAboutPageData(locale);

  return (
    <>
      <AboutHero statValues={stats} />
      <PurposeMission />
      <TeamSection teamMembers={teamMembers} />
      <ResultsCTA />
    </>
  );
}
