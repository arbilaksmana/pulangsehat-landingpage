"use client";

import { motion } from "framer-motion";
import { Apple, Play, Sparkles, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-rose via-white to-accent-purple -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Didukung Teknologi AI MedGemma</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                            Rawat Orang Tua{" "}
                            <span className="text-primary">Tanpa Cemas</span>, Pantau dari
                            Mana Saja.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Asisten digital pemulihan pasca-rawat inap. Scan label obat dengan
                            AI, atur jadwal otomatis, dan pantau kepatuhan minum obat orang
                            tua secara real-time bersama keluarga.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <Button size="lg" className="gap-3">
                                <Apple className="w-5 h-5" />
                                Download di App Store
                            </Button>
                            <Button size="lg" variant="outline" className="gap-3">
                                <Play className="w-5 h-5 fill-current" />
                                Download di Play Store
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                <span>Data Terenkripsi</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span>10K+ Keluarga</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                                {/* Screen */}
                                <div className="w-full h-full bg-gradient-to-br from-primary via-primary-light to-secondary rounded-[2.5rem] overflow-hidden relative">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl" />

                                    {/* App UI Mockup */}
                                    <div className="pt-10 px-4 h-full flex flex-col">
                                        {/* Header */}
                                        <div className="text-white text-center mb-6">
                                            <p className="text-xs opacity-75">Selamat Pagi</p>
                                            <p className="text-lg font-bold">Jadwal Hari Ini</p>
                                        </div>

                                        {/* Medicine Cards */}
                                        <div className="space-y-3 flex-1">
                                            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center text-xl">
                                                        💊
                                                    </div>
                                                    <div className="flex-1 text-white">
                                                        <p className="font-semibold text-sm">Amlodipine 5mg</p>
                                                        <p className="text-xs opacity-75">08:00 - Setelah Makan</p>
                                                    </div>
                                                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white text-xs">
                                                        ✓
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center text-xl">
                                                        💉
                                                    </div>
                                                    <div className="flex-1 text-white">
                                                        <p className="font-semibold text-sm">Metformin 500mg</p>
                                                        <p className="text-xs opacity-75">12:00 - Sebelum Makan</p>
                                                    </div>
                                                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-white text-xs">
                                                        ○
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center text-xl">
                                                        🩹
                                                    </div>
                                                    <div className="flex-1 text-white">
                                                        <p className="font-semibold text-sm">Simvastatin 20mg</p>
                                                        <p className="text-xs opacity-75">20:00 - Sebelum Tidur</p>
                                                    </div>
                                                    <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-white text-xs">
                                                        ○
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Nav Hint */}
                                        <div className="pb-6 pt-4">
                                            <div className="w-32 h-1 bg-white/30 rounded-full mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
                            >
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <span className="text-green-600 text-sm">✓</span>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-foreground">Obat Diminum</p>
                                    <p className="text-[10px] text-muted-foreground">Baru saja</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
                            >
                                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Users className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-foreground">Family Sync</p>
                                    <p className="text-[10px] text-muted-foreground">3 anggota aktif</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
