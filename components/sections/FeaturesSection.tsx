"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScanLine, Users, Bot, FileText, ArrowRight } from "lucide-react";

const features = [
    {
        icon: ScanLine,
        title: "Scan-to-Plan",
        description:
            "Ubah label obat fisik jadi jadwal digital hanya dengan satu foto. Didukung teknologi AI MedGemma.",
        iconBg: "bg-primary",
        iconColor: "text-white",
    },
    {
        icon: Users,
        title: "Family Sync",
        description:
            "Satu pasien dipantau satu keluarga. Notifikasi real-time jika orang tua lupa minum obat.",
        iconBg: "bg-primary",
        iconColor: "text-white",
    },
    {
        icon: Bot,
        title: "Check-Up Reminder",
        description:
            "Jangan sampai lupa kontrol ulang ke dokter. PulangSehat ingatkan jadwal kontrol Anda.",
        iconBg: "bg-primary",
        iconColor: "text-white",
    },
    {
        icon: FileText,
        title: "Smart Medical Report",
        description:
            "Download laporan kepatuhan PDF untuk dibawa saat kontrol ke dokter.",
        iconBg: "bg-primary",
        iconColor: "text-white",
    },
];

export default function FeaturesSection() {
    return (
        <section id="fitur" className="py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Semua yang Anda Butuhkan.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            Tanpa yang Tidak Perlu.
                        </span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Fitur perawatan pasca-rawat inap yang dirancang sederhana namun powerful untuk seluruh keluarga.
                    </p>
                </motion.div>

                {/* Bento Grid - 3 columns, 2 rows */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

                    {/* Card 1 - Top Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="group"
                    >
                        <div className="h-full p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/15 hover:shadow-[0_20px_60px_-15px_rgba(126,11,72,0.08)] transition-all duration-500">
                            <div className={`w-12 h-12 rounded-2xl ${features[0].iconBg} flex items-center justify-center mb-6`}>
                                <ScanLine className={`w-6 h-6 ${features[0].iconColor}`} />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                                {features[0].title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {features[0].description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                Pelajari <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 2 - Top Center (Hero Card with Phone Mockup) - spans 2 rows */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:row-span-2 group"
                    >
                        <div className="h-full max-h-[500px] rounded-3xl bg-primary border border-primary hover:shadow-[0_10px_20px_-15px_rgba(126,11,72,0.3)] transition-all duration-500 overflow-hidden flex flex-col items-center justify-end px-1 relative">
                            {/* Phone Mockup - half visible */}
                            <div className="relative w-[85%] max-w-[300px] translate-y-[25%]">
                                <Image
                                    src="/assets/fitur scan.png"
                                    alt="Fitur Scan PulangSehat"
                                    width={400}
                                    height={800}
                                    className="w-full h-auto object-contain drop-shadow-2xl rounded-t-[2rem]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 - Top Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group"
                    >
                        <div className="h-full p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/15 hover:shadow-[0_20px_60px_-15px_rgba(126,11,72,0.08)] transition-all duration-500">
                            <div className={`w-12 h-12 rounded-2xl ${features[1].iconBg} flex items-center justify-center mb-6`}>
                                <Users className={`w-6 h-6 ${features[1].iconColor}`} />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                                {features[1].title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {features[1].description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                Pelajari <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 4 - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group"
                    >
                        <div className="h-full p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/15 hover:shadow-[0_20px_60px_-15px_rgba(126,11,72,0.08)] transition-all duration-500">
                            <div className={`w-12 h-12 rounded-2xl ${features[2].iconBg} flex items-center justify-center mb-6`}>
                                <Bot className={`w-6 h-6 ${features[2].iconColor}`} />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                                {features[2].title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {features[2].description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                Pelajari <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 5 - Bottom Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="group"
                    >
                        <div className="h-full p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/15 hover:shadow-[0_20px_60px_-15px_rgba(126,11,72,0.08)] transition-all duration-500">
                            <div className={`w-12 h-12 rounded-2xl ${features[3].iconBg} flex items-center justify-center mb-6`}>
                                <FileText className={`w-6 h-6 ${features[3].iconColor}`} />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                                {features[3].title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                {features[3].description}
                            </p>
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                Pelajari <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
