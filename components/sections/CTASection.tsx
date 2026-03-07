"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CTASection() {
    return (
        <section id="download" className="mb-24 lg:mb-32 relative overflow-hidden">
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
                                    Mulai Pantau<br />
                                    Kesehatan Orang Tua,{" "}
                                    <span className="text-white/80 italic">Tanpa Cemas.</span>
                                </h2>
                                <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                                    Gratis 30 hari pertama. Dipercaya oleh 15.000+ keluarga di Indonesia.
                                </p>

                                {/* Download Buttons */}
                                <div className="flex justify-center lg:justify-start">
                                    <a
                                        href="https://drive.google.com/drive/folders/1PwA9Kbaca0HB3MgjUXYqZWefY9mxT5zJ?usp=sharing"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 text-base font-semibold rounded-2xl hover:bg-white/90 transition-colors shadow-lg"
                                        target="_blank"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download
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
                            />

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
