import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat Layanan | PulangSehat",
  description:
    "Baca syarat layanan dasar PulangSehat untuk penggunaan landing page, materi prototype, dan komunikasi tim.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold text-white">
          Terms of Service
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Syarat Layanan PulangSehat
        </h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
          <p>
            Seluruh informasi pada landing page PulangSehat disediakan untuk tujuan edukasi, promosi produk, dan
            koordinasi user testing prototype. Materi ini belum menggantikan saran medis profesional.
          </p>
          <p>
            Dengan menggunakan halaman ini, Anda setuju untuk memberikan informasi yang akurat saat menghubungi tim
            PulangSehat serta tidak menyalahgunakan akses ke prototype, aset, atau materi komunikasi yang tersedia.
          </p>
          <p>
            Tim PulangSehat dapat memperbarui fitur, materi, dan alur akses prototype sewaktu-waktu untuk kebutuhan
            riset produk dan peningkatan pengalaman pengguna.
          </p>
        </div>
      </div>
    </main>
  );
}
