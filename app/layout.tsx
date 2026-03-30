import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
