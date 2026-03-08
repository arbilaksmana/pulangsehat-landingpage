"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
    {
        title: "Produk",
        links: [
            { href: "#fitur", label: "Fitur" },
            { href: "#cara-kerja", label: "Cara Kerja" },
            { href: "#download", label: "Download" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
            { href: "/contact", label: "Hubungi Kami" },
        ],
    },
];

const socials = [
    { href: "#", icon: "lni lni-instagram", label: "Instagram" },
    { href: "#", icon: "lni lni-x", label: "Twitter" },
    { href: "#", icon: "lni lni-linkedin", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Content */}
                <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12">

                    {/* Brand - takes 2 cols */}
                    <div className="col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/assets/PulangSehat White.png"
                                alt="PulangSehat Logo"
                                width={160}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-xs">
                            Asisten digital pemulihan pasca-rawat inap. Membantu keluarga Indonesia memantau kepatuhan minum obat.
                        </p>

                        {/* Social Icons */}
                        {/* <div className="flex items-center gap-2">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all duration-200"
                                >
                                    <i className={`${social.icon} text-base`} />
                                </a>
                            ))}
                        </div> */}
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-sm font-semibold text-white/90 mb-4">
                                {group.title}
                            </h3>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Form */}
                    <div className="col-span-2">
                        <h3 className="text-sm font-semibold text-white/90 mb-4">
                            Hubungi Kami
                        </h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                                // Prevent direct scraping of the master email by simple bots
                                const u = "arbilaksmana2";
                                const d = "gmail.com";
                                window.location.href = `mailto:${u}@${d}?subject=${encodeURIComponent(`Pesan dari ${name}`)}&body=${encodeURIComponent(`Dari: ${name}\nEmail: ${email}\n\n${message}`)}`;
                            }}
                            className="space-y-3"
                        >
                            <input
                                name="name"
                                type="text"
                                placeholder="Nama"
                                required
                                className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                            />
                            <textarea
                                name="message"
                                placeholder="Pesan"
                                rows={3}
                                required
                                className="w-full px-4 py-2.5 bg-white/10 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} PulangSehat. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5 text-xs text-white/40">
                        <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
