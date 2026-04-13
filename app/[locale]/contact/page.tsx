import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import { getLocale } from "next-intl/server";
import { getContactSettings } from "@/lib/sanity/contact";

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
