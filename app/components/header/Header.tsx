"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image src={logo} alt="DNT Group Logo" className="h-6 sm:h-8 md:h-10 w-auto" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm uppercase tracking-widest font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
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
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}