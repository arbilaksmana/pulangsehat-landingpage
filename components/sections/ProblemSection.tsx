"use client";

import { motion } from "framer-motion";
import { Pill, Brain, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const painPoints = [
    {
        icon: Pill,
        title: "Jadwal Obat Rumit",
        subtitle: "(Polifarmasi)",
        description:
            "Banyak obat dengan aturan minum berbeda-beda. Pagi, siang, malam. Sebelum makan, sesudah makan. Mudah bingung dan tertukar.",
        color: "from-rose-500 to-pink-500",
        bgColor: "bg-rose-50",
    },
    {
        icon: Brain,
        title: "Lupa Minum Obat",
        subtitle: "",
        description:
            "Orang tua sering lupa jadwal dan dosis obat. Tanpa pengawasan, risiko kesehatan meningkat signifikan.",
        color: "from-violet-500 to-purple-500",
        bgColor: "bg-violet-50",
    },
    {
        icon: Briefcase,
        title: "Anak Sibuk Kerja",
        subtitle: "(Cemas Tidak Bisa Memantau)",
        description:
            "Bekerja jauh dari orang tua, tidak bisa memastikan mereka minum obat tepat waktu. Rasa cemas terus menghantui.",
        color: "from-primary to-primary-light",
        bgColor: "bg-accent-rose",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function ProblemSection() {
    return (
        <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
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
                        Masalah yang Sering Dihadapi
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Bingung Mengurus Banyak Obat{" "}
                        <span className="text-primary">Sepulang dari Rumah Sakit?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Anda tidak sendirian. Jutaan keluarga Indonesia menghadapi tantangan
                        yang sama setiap hari.
                    </p>
                </motion.div>

                {/* Pain Point Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {painPoints.map((point, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                                <CardContent className="p-6 lg:p-8">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${point.bgColor} flex items-center justify-center mb-6`}
                                    >
                                        <point.icon
                                            className={`w-7 h-7 bg-gradient-to-br ${point.color} bg-clip-text`}
                                            style={{
                                                color:
                                                    point.color === "from-primary to-primary-light"
                                                        ? "#7e0b48"
                                                        : point.color.includes("rose")
                                                            ? "#f43f5e"
                                                            : "#8b5cf6",
                                            }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-foreground mb-1">
                                        {point.title}
                                    </h3>
                                    {point.subtitle && (
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {point.subtitle}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed">
                                        {point.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
