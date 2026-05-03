import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "contact@pulangsehat.com";
const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Medical Disclaimer" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Medical Disclaimer | PulangSehat",
  description:
    "Disclaimer medis PulangSehat untuk aplikasi monitoring pasien pasca rawat inap. PulangSehat bukan pengganti diagnosis atau konsultasi medis profesional.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
          Medical Disclaimer
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Disclaimer Medis PulangSehat
        </h1>
        <p className="mt-4 text-sm text-slate-500">Terakhir diperbarui: 4 Mei 2026</p>

        <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
          <section aria-labelledby="disclaimer-main">
            <h2 id="disclaimer-main" className="text-xl font-bold text-slate-900">Aplikasi Bukan Pengganti Tenaga Medis</h2>
            <p className="mt-3 text-lg font-semibold text-slate-800">
              Aplikasi ini tidak menggantikan diagnosis atau konsultasi medis profesional.
            </p>
            <p className="mt-3">
              PulangSehat dikelola oleh Tim PulangSehat. PulangSehat bukan perangkat medis dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan,
              atau mencegah penyakit atau kondisi medis apa pun. PulangSehat hanya membantu pengguna mencatat,
              menyimpan, dan meninjau informasi perawatan pasca rawat inap secara lebih terstruktur.
            </p>
          </section>

          <section aria-labelledby="disclaimer-consult">
            <h2 id="disclaimer-consult" className="text-xl font-bold text-slate-900">Konsultasikan dengan Tenaga Kesehatan</h2>
            <p className="mt-3">
              Selalu konsultasikan kondisi medis, gejala, perubahan kondisi, obat, dosis, jadwal minum obat, atau
              rencana perawatan dengan dokter, apoteker, perawat, atau tenaga kesehatan profesional yang berwenang.
              Jangan mengubah obat atau perawatan berdasarkan informasi aplikasi tanpa arahan tenaga kesehatan.
            </p>
          </section>

          <section aria-labelledby="disclaimer-emergency">
            <h2 id="disclaimer-emergency" className="text-xl font-bold text-slate-900">Keadaan Darurat</h2>
            <p className="mt-3">
              Dalam keadaan darurat medis, segera hubungi layanan gawat darurat, rumah sakit, dokter, atau fasilitas
              kesehatan terdekat. Jangan menunda penanganan medis karena informasi, pengingat, atau catatan yang tersedia
              di PulangSehat.
            </p>
          </section>

          <section aria-labelledby="disclaimer-data">
            <h2 id="disclaimer-data" className="text-xl font-bold text-slate-900">Batasan Data Pengguna</h2>
            <p className="mt-3">
              Akurasi catatan di PulangSehat bergantung pada data yang dimasukkan pengguna. Kesalahan input, keterlambatan
              pencatatan, atau data yang tidak lengkap dapat memengaruhi ringkasan dan riwayat yang ditampilkan.
            </p>
          </section>

          <section aria-labelledby="disclaimer-contact">
            <h2 id="disclaimer-contact" className="text-xl font-bold text-slate-900">Kontak</h2>
            <p className="mt-3">Untuk pertanyaan terkait disclaimer ini, hubungi:</p>
            <a href={`mailto:${supportEmail}`} className="mt-3 inline-block font-semibold text-primary underline underline-offset-4">
              {supportEmail}
            </a>
          </section>

          <nav aria-label="Halaman legal PulangSehat" className="rounded-2xl bg-slate-50 p-5">
            <h2 className="text-lg font-bold text-slate-900">Halaman Legal Terkait</h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </main>
  );
}
