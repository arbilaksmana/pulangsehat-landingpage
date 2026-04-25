import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami | PulangSehat",
  description:
    "Hubungi tim PulangSehat untuk kolaborasi, pertanyaan produk, atau ikut user testing prototype.",
  alternates: {
    canonical: "/contact",
  },
};

const contactEmail = "contact@pulangsehat.com";
const instagramUrl = "https://www.instagram.com/pulangsehat/";

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
          Contact
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Hubungi Tim PulangSehat
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            Jika Anda ingin berdiskusi tentang produk, kerja sama, atau ikut user testing prototype, silakan hubungi
            kami melalui email atau Instagram resmi berikut.
          </p>
          <div className="space-y-3 rounded-2xl bg-slate-50 p-5">
            <a
              href={`mailto:${contactEmail}`}
              className="block font-semibold text-primary underline decoration-primary/30 underline-offset-4"
            >
              {contactEmail}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold text-primary underline decoration-primary/30 underline-offset-4"
            >
              instagram.com/pulangsehat
            </a>
          </div>
          <p>
            Atau kembali ke <Link href="/" className="font-semibold text-primary underline underline-offset-4">landing page</Link>{" "}
            untuk melihat fitur utama PulangSehat.
          </p>
        </div>
      </div>
    </main>
  );
}
