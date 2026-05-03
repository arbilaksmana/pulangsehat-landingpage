"use client";

import { motion } from "framer-motion";
import { FileCheck2, Lock, Mail, Shield } from "lucide-react";

const trustPoints = [
    {
        icon: Shield,
        title: "Privasi Data Kesehatan",
        description: "Data kesehatan diperlakukan sebagai data sensitif dan digunakan untuk fungsi inti aplikasi.",
    },
    {
        icon: Lock,
        title: "Pengamanan Akses",
        description: "Akses data dibatasi dan layanan dirancang menggunakan koneksi terenkripsi.",
    },
    {
        icon: FileCheck2,
        title: "Disclaimer Medis Jelas",
        description: "PulangSehat bukan perangkat medis dan bukan pengganti konsultasi tenaga kesehatan.",
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
                        Privasi & Transparansi
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Dirancang untuk{" "}
                        <span className="text-primary">Pencatatan dan Pemantauan</span>
                        Pasca Rawat Inap
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        PulangSehat membantu keluarga menyimpan catatan secara lebih rapi tanpa menggantikan diagnosis,
                        konsultasi, atau keputusan dari tenaga kesehatan profesional.
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

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
                        Kontak Resmi
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="mailto:contact@pulangsehat.com"
                            className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-left shadow-sm transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                                <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground">contact@pulangsehat.com</p>
                                <p className="text-xs text-muted-foreground">Dukungan, privasi, dan user testing</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
