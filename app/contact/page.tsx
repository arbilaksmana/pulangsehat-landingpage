import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hubungi Kami | PulangSehat",
  description:
    "Kontak resmi PulangSehat untuk dukungan aplikasi monitoring pasien pasca rawat inap, pertanyaan privasi, dan user testing.",
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
            PulangSehat adalah aplikasi monitoring pasien pasca rawat inap yang membantu keluarga dan caregiver
            mencatat kondisi, jadwal obat, jadwal kontrol, dan riwayat pemulihan secara lebih terstruktur.
          </p>
          <section aria-labelledby="about-pulangsehat" className="rounded-2xl bg-slate-50 p-5">
            <h2 id="about-pulangsehat" className="text-lg font-bold text-slate-900">
              Tentang PulangSehat
            </h2>
            <p className="mt-2">
              PulangSehat berfokus pada pencatatan dan pemantauan, bukan diagnosis atau pengobatan otomatis.
              Informasi di aplikasi ditujukan untuk membantu pengguna menyiapkan catatan yang lebih rapi saat
              berkonsultasi dengan tenaga kesehatan profesional.
            </p>
          </section>
          <section aria-labelledby="support-contact">
            <h2 id="support-contact" className="text-lg font-bold text-slate-900">
              Kontak Dukungan
            </h2>
            <p className="mt-2">
              Untuk dukungan aplikasi, pertanyaan privasi, permintaan penghapusan data, kerja sama, atau user testing,
              hubungi kanal resmi berikut.
            </p>
          </section>
          <p>
            Jika Anda mengalami kondisi medis mendesak, segera hubungi layanan gawat darurat, dokter, atau fasilitas
            kesehatan terdekat. PulangSehat bukan layanan gawat darurat.
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
