"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, HeartPulse, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative pt-28 pb-0 lg:pt-44 lg:pb-0 overflow-hidden bg-slate-50">
            {/* Background Base with modern grid & gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Subtle top gradient (Primary brand color) */}
                <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-primary/[0.08] to-transparent mix-blend-multiply" />

                {/* 2. Soft Modern Grid lines */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"
                    style={{ backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(100% 80% at 50% 10%, black 20%, transparent 100%)', WebkitMaskImage: 'radial-gradient(100% 80% at 50% 10%, black 20%, transparent 100%)' }}
                />

                {/* 3. Glowing Blobs for depth & color */}

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                {/* Badge
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm text-primary text-sm font-semibold mb-4"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Didukung Teknologi AI MedGemma</span>
                </motion.div> */}

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6 max-w-5xl tracking-tight"
                >
                    Rawat Orang Tua <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tanpa Cemas</span>, Pantau dari Mana Saja.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                    Asisten digital pemulihan pasca-rawat inap. Scan label obat dengan
                    AI, atur jadwal otomatis, dan pantau kepatuhan minum obat orang
                    tua secara real-time bersama keluarga.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center mb-16 lg:mb-20"
                >
                    <div className="relative group cursor-pointer inline-block">
                        {/* Glow/Blur effect underneath */}
                        <a
                            href="https://drive.google.com/drive/folders/1PwA9Kbaca0HB3MgjUXYqZWefY9mxT5zJ?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-4 h-[60px] pl-8 pr-2.5 bg-primary border border-white/20 text-white rounded-full shadow-[0_8px_30px_rgba(225,29,72,0.3)] transition-all duration-300 transform group-hover:-translate-y-[2px]"
                        >
                            <span className="font-semibold text-base tracking-wide text-white">
                                Download Sekarang
                            </span>
                            <div className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-inner transition-transform group-hover:rotate-12 duration-300">
                                <Download className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Centered Phone Mockups Area */}
                <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end mt-4">
                    {/* Floating Card Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: [-5, 5, -5] }}
                        transition={{
                            opacity: { duration: 0.8, delay: 0.6 },
                            x: { duration: 0.8, delay: 0.6 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                        className="absolute top-[18%] left-[-12%] md:left-[2%] lg:left-[10%] xl:left-[12%] z-40 bg-white/90 backdrop-blur-md p-2.5 pr-6 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-white flex items-center gap-3 hidden md:flex"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center shadow-inner">
                            <HeartPulse className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-900 leading-tight">Pantau Keluarga</p>
                            <p className="text-[11px] text-slate-500 font-medium">Real-time update</p>
                        </div>
                    </motion.div>

                    {/* Main Mockup Container (3 Phones Overlapping) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
                        className="relative z-10 w-full max-w-[500px] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[1050px] flex justify-center items-end mt-8 lg:mt-12 -mb-8 sm:-mb-16 md:-mb-24 lg:-mb-32 xl:-mb-40"
                    >
                        {/* Glow effect behind phones */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full -z-10" />

                        {/* Left Phone (Splash Screen) */}
                        <div className="absolute left-[2%] sm:left-[6%] bottom-[5%] w-[33%] sm:w-[30%] lg:w-[28%] -rotate-[10deg] translate-y-[10%] flex justify-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:-translate-y-4 hover:rotate-0 transition-all duration-500 z-10 group">
                            <Image
                                src="/assets/splash screen.png"
                                alt="Splash Screen"
                                width={400}
                                height={800}
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Center Phone (Home) */}
                        <div className="relative z-30 w-[42%] sm:w-[38%] lg:w-[34%] flex justify-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:-translate-y-6 transition-all duration-500 group">
                            <Image
                                src="/assets/Mockup Home.png"
                                alt="Home Screen"
                                width={500}
                                height={1000}
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>

                        {/* Right Phone (Fitur Scan) */}
                        <div className="absolute right-[2%] sm:right-[6%] bottom-[5%] w-[33%] sm:w-[30%] lg:w-[28%] rotate-[10deg] translate-y-[10%] flex justify-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:-translate-y-4 hover:rotate-0 transition-all duration-500 z-20 group">
                            <Image
                                src="/assets/fitur scan.png"
                                alt="Scan Feature"
                                width={400}
                                height={800}
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Floating Card Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: -10 }}
                        animate={{ opacity: 1, x: 0, y: [5, -5, 5] }}
                        transition={{
                            opacity: { duration: 0.8, delay: 0.8 },
                            x: { duration: 0.8, delay: 0.8 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                        }}
                        className="absolute top-[8%] right-[-2%] md:right-[2%] lg:right-[8%] xl:right-[10%] z-40 bg-white/90 backdrop-blur-md p-2.5 pr-6 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-white flex items-center gap-3 hidden md:flex"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-inner relative">
                            {/* Pinging effect underneath the checkmark */}
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75" />
                            <CheckCircle2 className="w-5 h-5 text-white z-10" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <p className="text-sm font-bold text-slate-900 leading-tight">Obat Diminum</p>
                            <p className="text-[11px] text-slate-500 font-medium">Baru saja</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade to transition smoothly into the next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        </section>
    );
}
