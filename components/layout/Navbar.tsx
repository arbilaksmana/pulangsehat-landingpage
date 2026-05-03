"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA_LINKS, trackCtaEvent } from "@/lib/tracking";

const navLinks = [
    { href: "/#masalah", label: "Masalah" },
    { href: "/#fitur", label: "Fitur" },
    { href: "/#cara-kerja", label: "Cara Kerja" },
    { href: "/blog", label: "Blog" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
    const hasOpenedMobileMenuRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMobileMenuOpen(false);
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            hasOpenedMobileMenuRef.current = true;
            firstMobileLinkRef.current?.focus();
            return;
        }

        if (hasOpenedMobileMenuRef.current) {
            menuButtonRef.current?.focus();
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Spacer for floating pill */}
            <div
                className={cn(
                    "mx-auto transition-all duration-500 ease-out",
                    isScrolled
                        ? "max-w-3xl px-3 pt-3"
                        : "max-w-full px-3 pt-3 md:px-0 md:pt-0"
                )}
            >
                <nav
                    aria-label="Navigasi utama"
                    className={cn(
                        "transition-all duration-500 ease-out",
                        isScrolled
                            ? "bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/[0.04] border border-white/60 rounded-full"
                            : "rounded-full border border-white/70 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-2xl md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-none"
                    )}
                >
                    <div
                        className={cn(
                            "flex items-center justify-between transition-all duration-500",
                            isScrolled
                                ? "h-14 px-2 pl-4 sm:px-3 sm:pl-5"
                                : "h-14 px-2 pl-4 sm:px-4 sm:pl-5 md:h-16 md:px-6 lg:h-[72px] lg:px-8 max-w-7xl mx-auto"
                        )}
                    >
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex min-h-11 items-center shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Image
                                src="/assets/logo.png"
                                alt="PulangSehat Logo"
                                width={140}
                                height={24}
                                className={cn(
                                    "w-auto transition-all duration-300",
                                    isScrolled ? "h-5" : "h-5.5 sm:h-6 md:h-7"
                                )}
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                                        isScrolled
                                            ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                                            : "text-slate-500 hover:text-slate-900"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center">
                            <a
                                href={CTA_LINKS.earlyAccessInternal}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Gabung early adopter dan user testing PulangSehat"
                                onClick={() => trackCtaEvent("early_access_navbar_desktop", CTA_LINKS.earlyAccess)}
                                data-track-event="early_access_navbar_desktop"
                                className={cn(
                                    "inline-flex items-center gap-2 text-sm font-semibold rounded-full transition-all duration-300",
                                    isScrolled
                                        ? "px-5 py-2 bg-primary text-white hover:bg-primary-dark"
                                        : "px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800"
                                )}
                            >
                                <FlaskConical className="w-3.5 h-3.5" />
                                Coba Sekarang
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={menuButtonRef}
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "md:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                isMobileMenuOpen
                                    ? "bg-slate-900 text-white"
                                    : isScrolled
                                        ? "text-slate-700 hover:bg-slate-100"
                                        : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:bg-transparent md:shadow-none"
                            )}
                            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation-menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <Menu className="w-5 h-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        {/* Panel */}
                        <motion.div
                            id="mobile-navigation-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu navigasi mobile"
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-3 right-3 top-[4.75rem] z-[60] max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[1.75rem] border border-white/70 bg-white/95 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl md:hidden sm:left-5 sm:right-5"
                        >
                            <div className="p-3 sm:p-4">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.href}
                                        ref={index === 0 ? firstMobileLinkRef : undefined}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex min-h-12 items-center rounded-2xl px-4 text-[15px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-2 mt-1 border-t border-slate-100">
                                    <a
                                        href={CTA_LINKS.earlyAccessInternal}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Gabung early adopter dan user testing PulangSehat"
                                        onClick={() => {
                                            trackCtaEvent("early_access_navbar_mobile", CTA_LINKS.earlyAccess);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        data-track-event="early_access_navbar_mobile"
                                        className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-[15px] font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        <FlaskConical className="w-4 h-4" />
                                        Coba Sekarang
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
