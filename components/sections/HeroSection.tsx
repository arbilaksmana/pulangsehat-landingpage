"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, FlaskConical } from "lucide-react";
import RotatingText from "@/components/ui/RotatingText";
import { CTA_LINKS, trackCtaEvent } from "@/lib/tracking";

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
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6 max-w-5xl tracking-tight flex flex-col justify-center items-center"
                >
                    <span className="mb-2 sm:mb-4">Rawat Orang Tua Tanpa Cemas</span>
                    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-4">
                        <span>Pantau</span>
                        <RotatingText
                            texts={['Obat.', 'Kondisi.', 'Jadwal.', 'Pemulihan.']}
                            mainClassName="px-4 sm:px-6 bg-gradient-to-r from-primary to-rose-600 text-white overflow-hidden py-1 sm:py-2 inline-flex justify-center items-center rounded-2xl md:rounded-3xl shadow-lg border-b-4 border-rose-800/50"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.014}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 34, stiffness: 520 }}
                            rotationInterval={2400}
                        />
                    </div>
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
                    className="mb-16 flex justify-center lg:mb-20"
                >
                    <div className="relative group inline-block cursor-pointer">
                        <a
                            href={CTA_LINKS.earlyAccessInternal}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Daftar user testing PulangSehat untuk early adopter"
                            onClick={() => trackCtaEvent("early_access_hero", CTA_LINKS.earlyAccess)}
                            data-track-event="early_access_hero"
                            className="relative flex h-[60px] items-center gap-4 rounded-full border border-white/20 bg-primary pl-8 pr-2.5 text-white shadow-[0_8px_30px_rgba(225,29,72,0.3)] transition-all duration-300 group-hover:-translate-y-[2px]"
                        >
                            <div className="space-y-0.5">
                                <span className="block text-base font-semibold tracking-wide text-white">
                                    Ikut User Testing
                                </span>
                                <span className="block text-xs text-white/70">
                                    Akses early adopter terbatas
                                </span>
                            </div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-inner transition-transform duration-300 group-hover:rotate-12">
                                <FlaskConical className="h-4.5 w-4.5" strokeWidth={2.2} />
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Centered Phone Mockups Area */}
                <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end mt-4">
                    {/* Floating Card Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
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
                                priority
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
                                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 38vw, 34vw"
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
                                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 28vw"
                            />
                        </div>
                    </motion.div>

                    {/* Floating Card Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: -10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
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
