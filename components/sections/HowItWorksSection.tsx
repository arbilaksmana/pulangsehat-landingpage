"use client";

import { motion } from "framer-motion";
import { Camera, UserPlus, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Camera,
        title: "Scan Obat",
        description:
            "Foto label obat dari rumah sakit. AI kami akan membaca dan mengekstrak informasi jadwal minum obat secara otomatis.",
        color: "from-primary to-primary-light",
    },
    {
        number: "02",
        icon: UserPlus,
        title: "Undang Keluarga",
        description:
            "Tambahkan anggota keluarga ke dalam akun pasien. Semua bisa memantau dan menerima notifikasi bersama.",
        color: "from-violet-500 to-purple-500",
    },
    {
        number: "03",
        icon: CheckCircle,
        title: "Pantau & Tenang",
        description:
            "Terima notifikasi real-time. Pastikan orang tua minum obat tepat waktu. Jalani aktivitas tanpa cemas.",
        color: "from-emerald-500 to-teal-500",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="cara-kerja" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent-rose to-accent-purple rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        Mudah & Cepat
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Mulai dalam <span className="text-primary">3 Langkah</span> Sederhana
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tidak perlu setup rumit. Langsung gunakan PulangSehat dalam hitungan
                        menit.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-violet-500 to-emerald-500 -translate-y-1/2 opacity-20" />

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Arrow (Mobile Hidden, Desktop Between Steps) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                                    </div>
                                )}

                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border relative overflow-hidden group">
                                    {/* Step Number Background */}
                                    <div className="absolute -top-4 -right-4 text-[120px] font-black text-muted/30 leading-none select-none">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span
                                                className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                                            >
                                                Langkah {step.number}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
