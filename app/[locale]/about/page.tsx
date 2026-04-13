import AboutHero from "@/components/about/AboutHero";
import PurposeMission from "@/components/about/PurposeMission";
import TeamSection from "@/components/about/TeamSection";
import ResultsCTA from "@/components/about/ResultsCTA";
import { getLocale } from "next-intl/server";
import { getAboutPageData } from "@/lib/sanity/about";

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
