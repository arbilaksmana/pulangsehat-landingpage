"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Pill, BrainCog, Briefcase } from "lucide-react";

const painPoints = [
    {
        icon: Pill,
        title: "Jadwal Obat Rumit",
        description:
            "Banyak obat dengan aturan minum berbeda-beda. Pagi, siang, malam — sebelum dan sesudah makan. Mudah bingung dan tertukar, terutama bagi lansia yang tinggal sendiri.",
        stat: "71%",
        statLabel: "pasien lansia minum lebih dari 5 obat setiap hari",
        image: "/assets/dizzy.png",
        color: "from-rose-500 to-pink-600",
        lightBg: "bg-rose-50",
    },
    {
        icon: BrainCog,
        title: "Lupa Minum Obat",
        description:
            "Orang tua sering lupa jadwal dan dosis obat. Tanpa pengawasan yang konsisten, risiko kesehatan meningkat signifikan dan proses pemulihan terhambat.",
        stat: "50%",
        statLabel: "pasien tidak patuh minum obat sesuai resep",
        image: "/assets/forget.png",
        color: "from-rose-500 to-pink-600",
        lightBg: "bg-rose-50",
    },
    {
        icon: Briefcase,
        title: "Anak Sibuk Kerja",
        description:
            "Bekerja jauh dari orang tua, tidak bisa memastikan mereka minum obat tepat waktu. Rasa cemas dan khawatir terus menghantui sepanjang hari.",
        stat: "85%",
        statLabel: "keluarga merasa cemas soal kepatuhan obat",
        image: "/assets/busy.png",
        color: "from-rose-500 to-pink-600",
        lightBg: "bg-rose-50",
    },
];

export default function ProblemSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = painPoints[activeIndex];

    return (
        <section id="masalah" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Bingung Mengurus Banyak Obat{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            Sepulang dari Rumah Sakit?
                        </span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Jutaan keluarga Indonesia menghadapi tantangan yang sama setiap hari.
                    </p>
                </motion.div>

                {/* Interactive Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                        {/* Left: Tab Buttons */}
                        <div className="justify-between lg:w-[380px] shrink-0 flex flex-col gap-3">
                            {painPoints.map((point, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative text-left p-5 lg:p-6 rounded-2xl transition-all duration-300 border ${isActive
                                            ? "bg-slate-900 border-slate-800 shadow-xl"
                                            : "bg-slate-50 border-slate-100 hover:bg-slate-100 hover:border-slate-200"
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive ? "bg-white/15" : "bg-white"
                                                }`}>
                                                <point.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400"
                                                    }`} />
                                            </div>
                                            <div>
                                                <h3 className={`font-semibold text-base mb-1 ${isActive ? "text-white" : "text-slate-700"
                                                    }`}>
                                                    {point.title}
                                                </h3>
                                                <p className={`text-sm leading-relaxed ${isActive ? "text-slate-400" : "text-slate-500"
                                                    }`}>
                                                    {point.statLabel}
                                                </p>
                                            </div>
                                            {isActive && (
                                                <span className={`ml-auto text-2xl font-extrabold bg-gradient-to-r ${point.color} text-transparent bg-clip-text shrink-0`}>

                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right: Content Display */}
                        <div className="flex-1 min-h-[400px] lg:min-h-[440px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`h-full rounded-3xl ${active.lightBg} p-8 lg:p-12 flex flex-col justify-between overflow-hidden relative`}
                                >
                                    {/* Top: Stat + Text */}
                                    <div className="relative z-10 max-w-md">
                                        <span className={`inline-block text-7xl lg:text-8xl font-extrabold bg-gradient-to-r ${active.color} text-transparent bg-clip-text mb-2 tracking-tighter leading-none`}>
                                            {active.stat}
                                        </span>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                                            {active.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-base lg:text-[17px]">
                                            {active.description}
                                        </p>
                                    </div>

                                    {/* Bottom-right: Illustration */}
                                    <div className="absolute bottom-0 right-0 w-[280px] lg:w-[340px] h-[280px] lg:h-[340px]">
                                        <Image
                                            src={active.image}
                                            alt={active.title}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-contain object-bottom drop-shadow-lg"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
