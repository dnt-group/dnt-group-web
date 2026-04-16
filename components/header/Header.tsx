"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import logo from "@/public/logo.svg";
import type { Locale } from "@/i18n/routing";

const navLinks = [
  { labelKey: "home", href: "/" },
  { labelKey: "about", href: "/about" },
  { labelKey: "services", href: "/services" },
  { labelKey: "projects", href: "/projects" },
  { labelKey: "career", href: "/career" },
  { labelKey: "contact", href: "/contact" },
] as const;

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "GE" },
];

export default function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={logo}
              alt={tHeader("logoAlt")}
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Right side — lang switcher + burger */}
          <div className="flex items-center gap-4">
            {/* Pill switcher */}
            <div className="hidden relative lg:flex items-center bg-slate-100 rounded-full p-0.5">
              {/* Sliding pill */}
              <div
                className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary transition-transform duration-200 ease-in-out"
                style={{
                  transform:
                    locale === "en"
                      ? "translateX(2px)"
                      : "translateX(calc(100% + 2px))",
                }}
              />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`relative z-10 w-9 py-1 text-xs font-bold tracking-wider rounded-full cursor-pointer transition-colors duration-200 ${
                    locale === lang.code
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Burger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={tHeader("toggleMenu")}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
            >
              {t(link.labelKey)}
            </Link>
          ))}

          {/* Lang switcher in mobile menu too */}
          <div className="flex items-center gap-3 px-3 py-3 mt-1 border-t border-gray-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {tHeader("language")}
            </span>
            <div className="relative flex items-center bg-slate-100 rounded-full p-0.5">
              <div
                className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary transition-transform duration-200 ease-in-out"
                style={{
                  transform:
                    locale === "en"
                      ? "translateX(2px)"
                      : "translateX(calc(100% + 2px))",
                }}
              />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`relative z-10 w-9 py-1 text-xs font-bold tracking-wider rounded-full transition-colors duration-200 ${
                    locale === lang.code
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
