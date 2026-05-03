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
  title: "Kebijakan Privasi | PulangSehat",
  description:
    "Kebijakan Privasi PulangSehat untuk aplikasi monitoring pasien pasca rawat inap, termasuk pengelolaan data pribadi dan data kesehatan pengguna.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          Privacy Policy
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Kebijakan Privasi PulangSehat
        </h1>
        <p className="mt-4 text-sm text-slate-500">Terakhir diperbarui: 4 Mei 2026</p>

        <div className="mt-8 space-y-8 text-base leading-8 text-slate-600">
          <section aria-labelledby="privacy-intro">
            <h2 id="privacy-intro" className="text-xl font-bold text-slate-900">1. Ringkasan</h2>
            <p className="mt-3">
              PulangSehat dikelola oleh Tim PulangSehat. Kebijakan Privasi ini menjelaskan bagaimana PulangSehat mengakses, mengumpulkan, menggunakan,
              menyimpan, melindungi, dan membagikan data pengguna, termasuk data kesehatan yang bersifat sensitif.
              PulangSehat adalah aplikasi pendukung pencatatan dan pemantauan kondisi pasien setelah pulang dari
              rumah sakit. PulangSehat bukan perangkat medis dan tidak menggantikan konsultasi dengan dokter atau
              tenaga kesehatan profesional.
            </p>
          </section>

          <section aria-labelledby="data-collected">
            <h2 id="data-collected" className="text-xl font-bold text-slate-900">2. Data yang Kami Kumpulkan</h2>
            <p className="mt-3">Data yang dapat dikumpulkan bergantung pada fitur yang digunakan, termasuk:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong>Data akun dan kontak:</strong> nama, alamat email, nomor telepon, dan informasi komunikasi.</li>
              <li><strong>Data pasien dan caregiver:</strong> nama pasien, hubungan caregiver, serta informasi profil dasar yang dimasukkan pengguna.</li>
              <li><strong>Data kesehatan:</strong> catatan kondisi setelah rawat inap, keluhan atau gejala yang dicatat pengguna, jadwal kontrol, catatan obat, status minum obat, catatan perawatan, dan riwayat pemulihan.</li>
              <li><strong>Konten yang dibuat pengguna:</strong> catatan harian, unggahan dokumen, foto label obat, atau informasi lain yang pengguna pilih untuk masukkan ketika fitur tersedia.</li>
              <li><strong>Data teknis dan penggunaan:</strong> jenis perangkat, log error, performa aplikasi, interaksi fitur, dan data analytics untuk meningkatkan stabilitas layanan.</li>
            </ul>
          </section>

          <section aria-labelledby="purpose">
            <h2 id="purpose" className="text-xl font-bold text-slate-900">3. Tujuan Penggunaan Data</h2>
            <p className="mt-3">Kami menggunakan data pengguna untuk tujuan berikut:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Menyediakan fitur pencatatan dan pemantauan kondisi pasien pasca rawat inap.</li>
              <li>Menyimpan jadwal obat, jadwal kontrol, pengingat, dan riwayat yang dimasukkan pengguna.</li>
              <li>Membantu caregiver dan keluarga meninjau catatan pasien secara lebih terstruktur.</li>
              <li>Memberikan dukungan pelanggan, komunikasi produk, dan pengelolaan user testing.</li>
              <li>Menjaga keamanan layanan, mencegah penyalahgunaan, dan memperbaiki bug atau gangguan teknis.</li>
              <li>Menganalisis penggunaan fitur secara terbatas untuk meningkatkan pengalaman pengguna dan performa aplikasi.</li>
            </ul>
            <p className="mt-3">
              Data kesehatan hanya digunakan untuk fungsi inti aplikasi yang secara wajar diharapkan pengguna, bukan
              untuk diagnosis otomatis, keputusan klinis, pengobatan otomatis, penentuan kelayakan asuransi, kredit,
              pekerjaan, atau tujuan serupa.
            </p>
          </section>

          <section aria-labelledby="health-data">
            <h2 id="health-data" className="text-xl font-bold text-slate-900">4. Perlakuan terhadap Data Kesehatan</h2>
            <p className="mt-3">
              Data kesehatan, termasuk catatan kondisi pasien, gejala, tanda vital yang dimasukkan pengguna, catatan
              obat, dan riwayat pemulihan, diperlakukan sebagai data pribadi sensitif. Kami membatasi akses dan
              penggunaan data tersebut hanya untuk menyediakan fitur PulangSehat, membantu dukungan pengguna, atau
              memenuhi kewajiban hukum yang berlaku.
            </p>
          </section>

          <section aria-labelledby="sharing">
            <h2 id="sharing" className="text-xl font-bold text-slate-900">5. Pembagian Data</h2>
            <p className="mt-3">Kami tidak menjual data pribadi atau data kesehatan pengguna. Data dapat dibagikan hanya dalam kondisi berikut:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Kepada caregiver, anggota keluarga, atau tenaga kesehatan jika pengguna memilih untuk membagikannya.</li>
              <li>Kepada penyedia layanan teknologi seperti hosting, analytics, crash reporting, email, atau layanan pendukung lain yang membantu menjalankan aplikasi.</li>
              <li>Jika diwajibkan oleh hukum, proses hukum, atau permintaan sah dari otoritas berwenang.</li>
              <li>Untuk melindungi keamanan pengguna, layanan, atau mencegah penyalahgunaan.</li>
            </ul>
          </section>

          <section aria-labelledby="third-party-services">
            <h2 id="third-party-services" className="text-xl font-bold text-slate-900">6. Layanan Pihak Ketiga yang Digunakan</h2>
            <p className="mt-3">
              PulangSehat menggunakan beberapa layanan pihak ketiga untuk menjalankan website, analytics, formulir user testing,
              dan pengelolaan konten. Layanan ini hanya digunakan sesuai kebutuhan operasional dan pengembangan produk.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong>Vercel:</strong> hosting website, deployment, Web Analytics, dan Speed Insights.</li>
              <li><strong>Google Analytics 4:</strong> analisis penggunaan website dan performa funnel secara agregat.</li>
              <li><strong>Microsoft Clarity:</strong> analisis pengalaman pengguna website seperti interaksi halaman dan heatmap.</li>
              <li><strong>Notion:</strong> pengelolaan konten blog dan materi edukasi PulangSehat.</li>
              <li><strong>Google Forms:</strong> formulir early access, user testing, dan komunikasi calon pengguna.</li>
              <li><strong>Google Search Console:</strong> verifikasi kepemilikan domain dan pemantauan performa indexing website.</li>
            </ul>
            <p className="mt-3">
              Jika aplikasi mobile PulangSehat di kemudian hari menggunakan layanan tambahan seperti Firebase, crash reporting,
              push notification, atau autentikasi, Kebijakan Privasi ini akan diperbarui agar tetap sesuai dengan praktik aktual.
            </p>
          </section>

          <section aria-labelledby="security">
            <h2 id="security" className="text-xl font-bold text-slate-900">7. Penyimpanan dan Keamanan Data</h2>
            <p className="mt-3">
              Kami menerapkan langkah keamanan yang wajar, termasuk transmisi data melalui koneksi terenkripsi,
              pembatasan akses internal, dan pengamanan sistem untuk melindungi data pribadi dan data kesehatan.
              Namun, tidak ada sistem digital yang sepenuhnya bebas risiko. Pengguna juga bertanggung jawab menjaga
              keamanan perangkat, akun, dan informasi login masing-masing.
            </p>
          </section>

          <section aria-labelledby="retention">
            <h2 id="retention" className="text-xl font-bold text-slate-900">8. Retensi dan Penghapusan Data</h2>
            <p className="mt-3">
              Data disimpan selama akun pengguna aktif atau selama diperlukan untuk menyediakan layanan, memenuhi
              kewajiban hukum, menyelesaikan sengketa, menjaga keamanan, atau mencegah penyalahgunaan. Pengguna dapat
              meminta akses, koreksi, atau penghapusan data dengan menghubungi kami melalui email di bawah ini.
            </p>
          </section>

          <section aria-labelledby="rights">
            <h2 id="rights" className="text-xl font-bold text-slate-900">9. Hak Pengguna</h2>
            <p className="mt-3">Sesuai hukum yang berlaku, pengguna dapat meminta untuk:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Mengakses data pribadi yang terkait dengan akun atau komunikasi pengguna.</li>
              <li>Memperbaiki data yang tidak akurat.</li>
              <li>Menghapus akun atau data tertentu, sejauh tidak bertentangan dengan kewajiban hukum.</li>
              <li>Menarik persetujuan untuk pemrosesan tertentu jika pemrosesan tersebut berdasarkan persetujuan.</li>
              <li>Meminta penjelasan tentang penggunaan dan pembagian data.</li>
            </ul>
          </section>

          <section aria-labelledby="children">
            <h2 id="children" className="text-xl font-bold text-slate-900">10. Anak-anak dan Pasien di Bawah Umur</h2>
            <p className="mt-3">
              PulangSehat tidak ditujukan untuk digunakan oleh anak-anak tanpa pendampingan orang tua atau wali. Jika
              data pasien anak dicatat oleh caregiver, pengguna menyatakan memiliki kewenangan yang sesuai untuk
              memasukkan dan mengelola data tersebut.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="text-xl font-bold text-slate-900">11. Kontak</h2>
            <p className="mt-3">
              Untuk pertanyaan privasi, permintaan akses data, koreksi, atau penghapusan data, hubungi:
            </p>
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
