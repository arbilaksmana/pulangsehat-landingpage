import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    product: [
        { href: "#fitur", label: "Fitur" },
        { href: "#cara-kerja", label: "Cara Kerja" },
        { href: "#download", label: "Download" },
    ],
    company: [
        { href: "#tentang", label: "Tentang Kami" },
        { href: "#blog", label: "Blog" },
        { href: "#karir", label: "Karir" },
    ],
    legal: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/contact", label: "Hubungi Kami" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-foreground text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                                <Heart className="w-5 h-5 text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold">
                                Pulang<span className="text-primary-light">Sehat</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Asisten digital pemulihan pasca-rawat inap untuk keluarga Indonesia.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="w-4 h-4 text-primary-light" />
                                <span>hello@pulangsehat.id</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="w-4 h-4 text-primary-light" />
                                <span>+62 21 1234 5678</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-primary-light" />
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Produk
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Perusahaan
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} PulangSehat. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-gray-500">
                            Made with{" "}
                            <Heart className="inline w-3 h-3 text-primary fill-primary mx-1" />{" "}
                            for Indonesian families
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
