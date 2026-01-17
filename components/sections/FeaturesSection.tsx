"use client";

import { motion } from "framer-motion";
import { ScanLine, Users, Bot, FileText, Sparkles } from "lucide-react";

const features = [
    {
        icon: ScanLine,
        title: "Scan-to-Plan",
        subtitle: "AI OCR Technology",
        description:
            "Ubah label obat fisik jadi jadwal digital hanya dengan satu foto. Didukung teknologi AI MedGemma yang memahami resep dokter dengan akurat.",
        gradient: "from-primary to-primary-light",
        bgGradient: "from-accent-rose to-accent-pink",
    },
    {
        icon: Users,
        title: "Family Sync",
        subtitle: "Real-time Monitoring",
        description:
            "Satu pasien dipantau satu keluarga. Notifikasi real-time jika orang tua lupa minum obat. Semua anggota keluarga tetap terhubung.",
        gradient: "from-violet-500 to-purple-500",
        bgGradient: "from-violet-50 to-purple-50",
    },
    {
        icon: Bot,
        title: "AI Health Consultant",
        subtitle: "24/7 Assistance",
        description:
            "Tanya jawab seputar perawatan dan obat dengan asisten cerdas 24/7. Dapatkan informasi medis yang akurat kapan saja Anda butuhkan.",
        gradient: "from-cyan-500 to-teal-500",
        bgGradient: "from-cyan-50 to-teal-50",
    },
    {
        icon: FileText,
        title: "Smart Medical Report",
        subtitle: "Doctor-Ready PDF",
        description:
            "Download laporan kepatuhan PDF untuk dibawa saat kontrol ke dokter. Visualisasi data lengkap yang membantu dokter memahami kondisi pasien.",
        gradient: "from-amber-500 to-orange-500",
        bgGradient: "from-amber-50 to-orange-50",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function FeaturesSection() {
    return (
        <section id="fitur" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        <Sparkles className="w-4 h-4" />
                        Solusi Lengkap
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Fitur Canggih untuk{" "}
                        <span className="text-primary">Ketenangan Keluarga</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Teknologi terdepan yang dirancang khusus untuk memudahkan perawatan
                        pasca-rawat inap orang tua Anda.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div
                                className={`h-full rounded-3xl bg-gradient-to-br ${feature.bgGradient} p-1 transition-all duration-300 hover:shadow-xl`}
                            >
                                <div className="h-full bg-white rounded-[1.4rem] p-6 lg:p-8">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Icon */}
                                        <div
                                            className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="mb-3">
                                                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                                                    {feature.title}
                                                </h3>
                                                <span
                                                    className={`text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                                                >
                                                    {feature.subtitle}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
