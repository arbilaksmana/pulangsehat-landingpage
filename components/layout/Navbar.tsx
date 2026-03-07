"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#masalah", label: "Masalah" },
    { href: "#fitur", label: "Fitur" },
    { href: "#cara-kerja", label: "Cara Kerja" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
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

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Spacer for floating pill */}
            <div
                className={cn(
                    "mx-auto transition-all duration-500 ease-out",
                    isScrolled
                        ? "max-w-3xl px-3 pt-3"
                        : "max-w-full px-0 pt-0"
                )}
            >
                <nav
                    className={cn(
                        "transition-all duration-500 ease-out",
                        isScrolled
                            ? "bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/[0.04] border border-white/60 rounded-full"
                            : "bg-transparent"
                    )}
                >
                    <div
                        className={cn(
                            "flex items-center justify-between transition-all duration-500",
                            isScrolled
                                ? "h-14 px-3 pl-5"
                                : "h-16 lg:h-[72px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/assets/logo.png"
                                alt="PulangSehat Logo"
                                width={140}
                                height={24}
                                className={cn(
                                    "w-auto transition-all duration-300",
                                    isScrolled ? "h-5" : "h-7"
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
                                href="https://drive.google.com/drive/folders/1PwA9Kbaca0HB3MgjUXYqZWefY9mxT5zJ?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "inline-flex items-center gap-2 text-sm font-semibold rounded-full transition-all duration-300",
                                    isScrolled
                                        ? "px-5 py-2 bg-primary text-white hover:bg-primary-dark"
                                        : "px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800"
                                )}
                            >
                                <Download className="w-3.5 h-3.5" />
                                Download
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors",
                                isScrolled ? "hover:bg-slate-100" : "hover:bg-white/20"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5 text-slate-700" />
                            ) : (
                                <Menu className="w-5 h-5 text-slate-700" />
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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
                        >
                            <div className="p-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-[15px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-2 mt-1 border-t border-slate-100">
                                    <a
                                        href="https://drive.google.com/drive/folders/1PwA9Kbaca0HB3MgjUXYqZWefY9mxT5zJ?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full px-5 py-3 mt-2 bg-primary text-white font-semibold rounded-xl text-[15px]"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download App
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
