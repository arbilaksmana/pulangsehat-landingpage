"use client";

import { motion } from "framer-motion";
import { Apple, Play, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section id="download" className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] text-white/10 hidden lg:block"
            >
                <Heart className="w-24 h-24" fill="currentColor" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-[15%] text-white/10 hidden lg:block"
            >
                <Heart className="w-16 h-16" fill="currentColor" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                        <Heart className="w-4 h-4 fill-current" />
                        <span>Untuk Keluarga Indonesia</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                        Berikan Perawatan Terbaik untuk{" "}
                        <span className="text-white/90 underline decoration-white/30 underline-offset-8">
                            Orang Tua Tersayang
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Mulai pantau kesehatan orang tua Anda hari ini. Gratis untuk 30 hari
                        pertama, tanpa kartu kredit.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <Button
                            size="xl"
                            className="bg-white text-primary hover:bg-white/90 shadow-xl gap-3"
                        >
                            <Apple className="w-6 h-6" />
                            Download di App Store
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            size="xl"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10 gap-3"
                        >
                            <Play className="w-6 h-6 fill-current" />
                            Download di Play Store
                        </Button>
                    </div>

                    {/* Trust Note */}
                    <p className="text-sm text-white/60">
                        ⭐ Rating 4.9/5 dari 10,000+ pengguna • 🔒 Data terenkripsi & aman
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
