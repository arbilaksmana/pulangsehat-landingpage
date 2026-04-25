export type FeatureDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  overview: string[];
  benefits: string[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  useCases: string[];
};

export const featureDetails: FeatureDetail[] = [
  {
    slug: "scan-to-plan",
    title: "Scan-to-Plan",
    eyebrow: "Digitalisasi obat lebih cepat",
    description:
      "Ubah label obat fisik jadi jadwal digital hanya dengan satu foto. Didukung teknologi AI MedGemma.",
    heroDescription:
      "Scan-to-Plan membantu keluarga mengubah instruksi obat yang tercecer di label, kemasan, dan catatan dokter menjadi jadwal digital yang lebih mudah dipantau bersama.",
    image: "/assets/fitur scan.png",
    imageAlt: "Fitur Scan-to-Plan PulangSehat",
    overview: [
      "Setelah pasien pulang dari rumah sakit, keluarga sering harus mengelola beberapa obat sekaligus dengan aturan minum yang berbeda-beda. Scan-to-Plan dirancang untuk mempercepat proses itu tanpa harus memasukkan semuanya secara manual.",
      "Cukup arahkan kamera ke label obat atau instruksi yang dibawa pulang, lalu PulangSehat membantu mengubahnya menjadi rencana pemantauan yang lebih rapi untuk seluruh keluarga.",
    ],
    benefits: [
      "Mengurangi input manual yang memakan waktu di hari-hari awal pemulihan",
      "Membantu keluarga menyusun jadwal obat lebih cepat dan lebih konsisten",
      "Menurunkan risiko salah baca dosis atau waktu minum antar caregiver",
    ],
    howItWorks: [
      {
        title: "Scan instruksi obat",
        description:
          "Foto label atau instruksi yang dibawa pulang setelah rawat inap untuk menangkap detail penting secara cepat.",
      },
      {
        title: "Validasi jadwal digital",
        description:
          "Keluarga meninjau hasil pembacaan, memastikan nama obat, dosis, dan waktu minum sudah sesuai.",
      },
      {
        title: "Pantau bersama",
        description:
          "Setelah jadwal aktif, semua caregiver bisa melihat rencana yang sama dan mengikuti ritme pemantauan yang konsisten.",
      },
    ],
    useCases: [
      "Pasien pulang dengan banyak obat baru dari rawat inap",
      "Anak perlu membantu orang tua dari jarak jauh",
      "Keluarga ingin mengurangi kebingungan saat menyusun jadwal obat awal",
    ],
  },
  {
    slug: "family-sync",
    title: "Family Sync",
    eyebrow: "Koordinasi caregiver tanpa miskomunikasi",
    description:
      "Satu pasien dipantau satu keluarga. Notifikasi real-time jika orang tua lupa minum obat.",
    heroDescription:
      "Family Sync memberi visibilitas yang sama ke semua anggota keluarga yang ikut terlibat, sehingga pemantauan obat dan kondisi harian tidak bertumpu pada satu orang saja.",
    image: "/assets/Family Sync.png",
    imageAlt: "Fitur Family Sync PulangSehat",
    overview: [
      "Dalam banyak keluarga, semua orang ingin membantu, tetapi informasi sering tersebar di chat, panggilan telepon, dan ingatan masing-masing. Family Sync menyatukan semuanya ke satu alur yang lebih jelas.",
      "Dengan visibilitas yang sama untuk semua caregiver, keluarga bisa tahu siapa yang sudah memantau, siapa yang perlu follow-up, dan kapan intervensi dibutuhkan.",
    ],
    benefits: [
      "Mengurangi miskomunikasi antar anggota keluarga",
      "Membantu caregiver utama tidak merasa bekerja sendirian",
      "Mendorong keputusan yang lebih cepat saat ada dosis terlewat atau kondisi berubah",
    ],
    howItWorks: [
      {
        title: "Tambahkan caregiver keluarga",
        description:
          "Undang anggota keluarga yang perlu ikut melihat perkembangan pasien dan jadwal harian.",
      },
      {
        title: "Bagikan status yang sama",
        description:
          "Semua caregiver melihat data yang sama, termasuk pengingat obat, riwayat, dan perubahan kondisi penting.",
      },
      {
        title: "Tindak lanjuti lebih cepat",
        description:
          "Saat ada pengingat terlewat atau kebutuhan baru, anggota keluarga lain bisa langsung turun tangan.",
      },
    ],
    useCases: [
      "Beberapa anak bergantian mendampingi orang tua",
      "Caregiver utama butuh backup saat bekerja atau berada di luar rumah",
      "Keluarga tinggal di kota berbeda tetapi tetap ingin ikut memantau",
    ],
  },
  {
    slug: "check-up-reminder",
    title: "Check-Up Reminder",
    eyebrow: "Kontrol ulang tidak lagi terlewat",
    description:
      "Jangan sampai lupa kontrol ulang ke dokter. PulangSehat ingatkan jadwal kontrol Anda.",
    heroDescription:
      "Check-Up Reminder membantu keluarga menjaga jadwal kontrol, pemeriksaan lanjutan, dan momen penting setelah pasien pulang dari rumah sakit.",
    image: "/assets/Mockup Home.png",
    imageAlt: "Fitur Check-Up Reminder PulangSehat",
    overview: [
      "Setelah rawat inap, keluarga sering harus mengelola banyak tanggal penting: kontrol ulang, refill obat, pemeriksaan laboratorium, atau konsultasi lanjutan. Jika hanya mengandalkan kertas atau chat lama, jadwal mudah terlewat.",
      "Check-Up Reminder membantu keluarga menyimpan tanggal-tanggal penting itu di satu tempat dan mengingatkannya kembali sebelum terlambat.",
    ],
    benefits: [
      "Menjaga kepatuhan terhadap jadwal kontrol pasca rawat inap",
      "Membantu keluarga menyiapkan transportasi dan logistik lebih awal",
      "Mengurangi risiko lupa follow-up yang penting untuk pemulihan",
    ],
    howItWorks: [
      {
        title: "Masukkan jadwal kontrol",
        description:
          "Simpan tanggal kontrol, pemeriksaan, atau tindakan lanjutan ke dalam sistem pemantauan keluarga.",
      },
      {
        title: "Terima pengingat lebih awal",
        description:
          "PulangSehat memberi pengingat sebelum hari H agar keluarga punya waktu menyiapkan kebutuhan pasien.",
      },
      {
        title: "Pantau ritme pemulihan",
        description:
          "Kontrol yang konsisten membantu keluarga membaca progres pemulihan dengan lebih teratur dari minggu ke minggu.",
      },
    ],
    useCases: [
      "Pasien punya beberapa jadwal kontrol dari dokter berbeda",
      "Keluarga sering kewalahan setelah hari-hari pertama pulang",
      "Anak ingin memastikan kontrol orang tua tidak terlewat meski tidak selalu hadir langsung",
    ],
  },
  {
    slug: "smart-medical-report",
    title: "Smart Medical Report",
    eyebrow: "Ringkasan yang siap dibawa ke dokter",
    description:
      "Download laporan kepatuhan PDF untuk dibawa saat kontrol ke dokter.",
    heroDescription:
      "Smart Medical Report merangkum kepatuhan minum obat dan catatan penting keluarga menjadi laporan yang lebih mudah dibawa saat kontrol atau diskusi dengan tenaga kesehatan.",
    image: "/assets/Report.png",
    imageAlt: "Fitur Smart Medical Report PulangSehat",
    overview: [
      "Banyak keluarga datang ke kontrol tanpa catatan yang rapi. Akibatnya, dokter sulit melihat pola dosis terlewat, keluhan berulang, atau dinamika pemulihan di rumah.",
      "Smart Medical Report membantu mengubah catatan harian itu menjadi ringkasan yang lebih rapi dan siap digunakan dalam percakapan medis.",
    ],
    benefits: [
      "Membantu dokter memahami kondisi pasien dengan konteks yang lebih lengkap",
      "Memudahkan keluarga membawa riwayat kepatuhan secara praktis",
      "Mengurangi ketergantungan pada ingatan saat sesi kontrol berlangsung singkat",
    ],
    howItWorks: [
      {
        title: "Kumpulkan data pemantauan",
        description:
          "Status minum obat, reminder, dan catatan keluarga disimpan sebagai jejak yang bisa ditinjau kembali.",
      },
      {
        title: "Susun ringkasan otomatis",
        description:
          "PulangSehat menyusun informasi penting menjadi format laporan yang lebih mudah dipahami.",
      },
      {
        title: "Bawa saat kontrol",
        description:
          "Gunakan laporan untuk membantu diskusi yang lebih fokus dengan dokter saat kontrol berikutnya.",
      },
    ],
    useCases: [
      "Keluarga ingin punya ringkasan kepatuhan yang rapi",
      "Dokter membutuhkan konteks pemantauan di rumah",
      "Caregiver ingin membawa data, bukan hanya mengandalkan ingatan saat konsultasi",
    ],
  },
];

export function getAllFeatureSlugs() {
  return featureDetails.map((feature) => feature.slug);
}

export function getFeatureBySlug(slug: string) {
  return featureDetails.find((feature) => feature.slug === slug);
}
