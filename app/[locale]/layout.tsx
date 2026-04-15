import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dntgroup.ge";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as {
    title: string;
    description: string;
    keywords: string;
    companyName: string;
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: metadata.title,
      template: `%s | ${metadata.companyName}`,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: metadata.companyName }],
    creator: metadata.companyName,
    publisher: metadata.companyName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ka" ? "ka_GE" : "en_US",
      alternateLocale: locale === "ka" ? "en_US" : "ka_GE",
      url: SITE_URL,
      siteName: metadata.companyName,
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        en: `${SITE_URL}/en`,
        ka: `${SITE_URL}/ka`,
      },
    },
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-['Google_Sans',sans-serif]">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
