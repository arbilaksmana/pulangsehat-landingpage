import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | PulangSehat",
  description:
    "Pelajari bagaimana PulangSehat menangani data pengguna, komunikasi, dan keamanan informasi di landing page ini.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          Privacy Policy
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Kebijakan Privasi PulangSehat
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            PulangSehat berkomitmen menjaga kerahasiaan informasi yang Anda bagikan melalui landing page ini,
            termasuk data yang dikirim lewat formulir kontak atau kanal user testing prototype.
          </p>
          <p>
            Informasi yang Anda kirimkan hanya digunakan untuk menindaklanjuti komunikasi, riset produk, dan
            peningkatan layanan. Kami tidak menjual data pribadi Anda kepada pihak lain.
          </p>
          <p>
            Jika di kemudian hari PulangSehat menambahkan formulir, analytics, atau sistem autentikasi resmi,
            kebijakan ini akan diperbarui untuk menjelaskan data apa yang dikumpulkan dan bagaimana data tersebut
            dikelola.
          </p>
        </div>
      </div>
    </main>
  );
}
