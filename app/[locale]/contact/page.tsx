import type { Metadata } from "next";
import { getMessages, getLocale } from "next-intl/server";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import { getContactSettings } from "@/lib/sanity/contact";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const meta = (messages.metadata as Record<string, Record<string, string>>)
    .contact;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const contact = await getContactSettings(locale);

  return (
    <>
      <ContactHero contact={contact} />
      <ContactMap contact={contact} />
    </>
  );
}
