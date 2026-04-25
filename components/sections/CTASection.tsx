"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { CTA_LINKS, trackCtaEvent } from "@/lib/tracking";

export default function CTASection() {
    return (
        <section id="user-testing" className="relative overflow-hidden py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative overflow-hidden rounded-[2rem] grid grid-cols-1 lg:grid-cols-2">

                        {/* Left: Text Content */}
                        <div className="relative bg-primary px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                            {/* Decorative blur */}
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                            <div className="relative z-10 text-center lg:text-left">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                                    Jadi Early Adopter<br />
                                    PulangSehat,{" "}
                                    <span className="text-white/80 italic">lebih awal.</span>
                                </h2>
                                <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                                    Bantu kami menyusun pengalaman caregiver yang lebih tepat sejak awal. Dapatkan akses prototype, bagikan masukan, dan ikut membentuk produk PulangSehat.
                                </p>

                                <div className="flex justify-center lg:justify-start">
                                    <a
                                        href={CTA_LINKS.earlyAccessInternal}
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-colors hover:bg-white/90"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Daftar early adopter dan user testing PulangSehat"
                                        onClick={() => trackCtaEvent("early_access_cta_section", CTA_LINKS.earlyAccess)}
                                        data-track-event="early_access_cta_section"
                                    >
                                        <FlaskConical className="w-5 h-5" />
                                        Gabung Early Adopter
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA Image */}
                        <div className="relative min-h-[280px] lg:min-h-0">
                            <Image
                                src="/assets/cta.jpg"
                                alt="Merawat Orang Tua bersama PulangSehat"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
