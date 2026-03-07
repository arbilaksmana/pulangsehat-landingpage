"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, UserPlus, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Scan Obat",
        description:
            "Foto label obat dari rumah sakit. AI kami akan membaca dan mengekstrak informasi jadwal minum obat secara otomatis dalam hitungan detik.",
        image: "/assets/fitur scan.png",
    },
    {
        icon: UserPlus,
        title: "Undang Keluarga",
        description:
            "Tambahkan anggota keluarga ke dalam akun pasien. Semua bisa memantau dan menerima notifikasi bersama secara real-time.",
        image: "/assets/Family Sync.png",
    },
    {
        icon: CheckCircle,
        title: "Pantau & Tenang",
        description:
            "Terima notifikasi real-time. Pastikan orang tua minum obat tepat waktu. Jalani aktivitas tanpa cemas setiap hari.",
        image: "/assets/riwayat caregiver.png",
    },
];

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(2);

    return (
        <section id="cara-kerja" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Cara Kerja PulangSehat
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Tidak perlu setup rumit. Langsung gunakan PulangSehat dalam hitungan menit.
                    </p>
                </motion.div>

                {/* Step Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-4 lg:gap-5 mb-12"
                >
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        return (
                            <div
                                key={index}
                                className={`rounded-3xl p-6 lg:p-8 cursor-pointer transition-all duration-500 flex flex-col overflow-hidden ${isActive
                                    ? "bg-primary/5 border-2 border-primary/15"
                                    : "bg-slate-50 border-2 border-transparent hover:border-slate-200"
                                    }`}
                                style={{ height: isActive ? "800px" : "440px" }}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                {/* Icon + Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? "bg-primary" : "bg-slate-200"
                                        } transition-colors duration-300`}>
                                        <step.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500"} transition-colors duration-300`} />
                                    </div>
                                    <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-700"
                                        }`}>
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description - only visible when active */}
                                <div className={`transition-all duration-500 overflow-hidden ${isActive ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
                                    }`}>
                                    <p className="text-slate-500 leading-relaxed text-[15px]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* App Preview Image */}
                                <div className={`flex-1 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm mt-auto transition-all duration-500 ${isActive ? "opacity-100" : "opacity-60"
                                    }`}>
                                    {/* Browser Chrome / Window Bar */}
                                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                    </div>

                                    {/* Image */}
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
