"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, Building2 } from "lucide-react";

const partners = [
    { name: "IDI", subtitle: "Ikatan Dokter Indonesia", icon: Award },
    { name: "IAI", subtitle: "Ikatan Apoteker Indonesia", icon: Building2 },
    { name: "Google Cloud", subtitle: "Cloud Infrastructure", icon: Shield },
];

const trustPoints = [
    {
        icon: Shield,
        title: "Enkripsi End-to-End",
        description: "Semua data medis terenkripsi dengan standar industri kesehatan.",
    },
    {
        icon: Lock,
        title: "Kepatuhan HIPAA",
        description: "Mengikuti standar keamanan data kesehatan internasional.",
    },
    {
        icon: Award,
        title: "Verified by Medical Experts",
        description: "Dikembangkan bersama dokter dan apoteker berpengalaman.",
    },
];

export default function TrustSection() {
    return (
        <section id="tentang" className="py-20 lg:py-28 bg-muted relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        <Shield className="w-4 h-4" />
                        Keamanan Terjamin
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Didukung oleh{" "}
                        <span className="text-primary">Teknologi AI Terkini</span> &
                        Standar Keamanan Data Medis
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Kami berkomitmen menjaga privasi dan keamanan data kesehatan
                        keluarga Anda dengan standar tertinggi.
                    </p>
                </motion.div>

                {/* Trust Points */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
                >
                    {trustPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <point.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {point.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
                        Dipercaya & Didukung Oleh
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                                    <partner.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-foreground">{partner.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {partner.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
