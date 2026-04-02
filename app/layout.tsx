import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "DNT Group - Hotel Management Company",
  description: "DNT Group is a professional hotel management company specializing in the successful operation and development of small, medium, and large hospitality projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-['Google_Sans',sans-serif]">
        <>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
