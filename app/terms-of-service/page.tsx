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
  title: "Terms of Service | PulangSehat",
  description:
    "Syarat penggunaan PulangSehat sebagai aplikasi monitoring pasien pasca rawat inap dan pencatatan kondisi kesehatan.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-sm font-semibold text-white">
          Terms of Service
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Syarat Penggunaan PulangSehat
        </h1>
        <p className="mt-4 text-sm text-slate-500">Terakhir diperbarui: 4 Mei 2026</p>

        <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
          <section aria-labelledby="terms-purpose">
            <h2 id="terms-purpose" className="text-xl font-bold text-slate-900">1. Tujuan Layanan</h2>
            <p className="mt-3">
              PulangSehat dikelola oleh Tim PulangSehat. PulangSehat menyediakan fitur pencatatan kondisi pasien setelah pulang dari rumah sakit, pengingat,
              pemantauan jadwal, dan ringkasan informasi untuk membantu pasien, keluarga, dan caregiver mengelola
              riwayat perawatan secara lebih terstruktur.
            </p>
          </section>

          <section aria-labelledby="terms-medical">
            <h2 id="terms-medical" className="text-xl font-bold text-slate-900">2. Bukan Pengganti Tenaga Medis</h2>
            <p className="mt-3">
              PulangSehat bukan perangkat medis dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan,
              atau mencegah penyakit atau kondisi medis apa pun. Informasi, catatan, pengingat, dan fitur pemantauan
              hanya bersifat pendukung pencatatan dan tidak menggantikan nasihat, diagnosis, atau perawatan dari dokter
              atau tenaga kesehatan profesional.
            </p>
          </section>

          <section aria-labelledby="terms-responsibility">
            <h2 id="terms-responsibility" className="text-xl font-bold text-slate-900">3. Tanggung Jawab Pengguna</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Pengguna bertanggung jawab memastikan data pasien, jadwal, catatan obat, dan catatan kondisi yang dimasukkan akurat dan terbaru.</li>
              <li>Caregiver yang memasukkan data pasien menyatakan memiliki persetujuan atau kewenangan yang sesuai.</li>
              <li>Pengguna harus selalu mengikuti arahan dokter, apoteker, atau tenaga kesehatan yang berwenang.</li>
              <li>PulangSehat tidak boleh digunakan sebagai layanan gawat darurat atau dasar tunggal untuk keputusan medis.</li>
            </ul>
          </section>

          <section aria-labelledby="terms-testing">
            <h2 id="terms-testing" className="text-xl font-bold text-slate-900">4. Penggunaan Prototype dan Testing</h2>
            <p className="mt-3">
              Selama masa pengujian, fitur dapat berubah, tidak selalu tersedia, dan mungkin masih memiliki keterbatasan
              teknis. Masukan pengguna dapat digunakan untuk meningkatkan produk, memperbaiki pengalaman pengguna, dan
              menyempurnakan fitur sebelum rilis publik yang lebih luas.
            </p>
          </section>

          <section aria-labelledby="terms-acceptable-use">
            <h2 id="terms-acceptable-use" className="text-xl font-bold text-slate-900">5. Penggunaan yang Dilarang</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Memasukkan data pasien tanpa izin atau kewenangan yang sah.</li>
              <li>Menggunakan PulangSehat untuk membuat diagnosis, terapi, atau instruksi pengobatan mandiri.</li>
              <li>Mengunggah informasi palsu, menyesatkan, melanggar hukum, atau merugikan pihak lain.</li>
              <li>Mencoba merusak, menyalin, melakukan scraping, reverse engineering, atau menyalahgunakan sistem.</li>
            </ul>
          </section>

          <section aria-labelledby="terms-availability">
            <h2 id="terms-availability" className="text-xl font-bold text-slate-900">6. Ketersediaan Layanan</h2>
            <p className="mt-3">
              Kami berupaya menjaga layanan tetap tersedia dan aman, tetapi tidak menjamin aplikasi selalu bebas gangguan,
              bebas kesalahan, atau tersedia setiap saat. Kami dapat memperbarui, menghentikan, atau mengubah fitur untuk
              kebutuhan teknis, keamanan, kepatuhan, atau pengembangan produk.
            </p>
          </section>

          <section aria-labelledby="terms-liability">
            <h2 id="terms-liability" className="text-xl font-bold text-slate-900">7. Batasan Tanggung Jawab</h2>
            <p className="mt-3">
              Sejauh diizinkan oleh hukum yang berlaku, PulangSehat tidak bertanggung jawab atas keputusan medis yang
              dibuat pengguna tanpa berkonsultasi dengan tenaga kesehatan profesional. PulangSehat tidak menjamin hasil
              pemulihan, kepatuhan minum obat, atau kondisi kesehatan tertentu.
            </p>
          </section>

          <section aria-labelledby="terms-contact">
            <h2 id="terms-contact" className="text-xl font-bold text-slate-900">8. Kontak</h2>
            <p className="mt-3">Untuk pertanyaan terkait syarat penggunaan, hubungi:</p>
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
