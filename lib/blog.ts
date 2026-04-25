import "server-only";

import { unstable_cache } from "next/cache";
import { Client, isFullBlock, isFullPageOrDataSource } from "@notionhq/client";
import type {
  BlockObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {
  type BlogPost,
  type BlogPostSection,
  getCategorySlug,
  getLocalAllBlogCategories,
  getLocalAllBlogPosts,
  getLocalAllBlogSlugs,
  getLocalBlogPostBySlug,
  getLocalBlogPostsByCategory,
  getLocalCategoryBySlug,
} from "@/lib/blog-local";

const BLOG_REVALIDATE_SECONDS = 300;
const DEFAULT_AUTHOR = "Tim PulangSehat";
const DEFAULT_CATEGORY = "Artikel PulangSehat";

const curatedBlogOverrides = {
  "cara-merawat-orang-tua-setelah-rawat-inap-di-rumah": {
    title: "48 Jam Pertama Setelah Orang Tua Pulang dari Rumah Sakit",
    description:
      "Rencana 48 jam pertama untuk keluarga: bongkar instruksi pulang, amankan obat, siapkan area istirahat, dan tentukan siapa melakukan apa.",
    excerpt:
      "Hari pertama bukan waktunya menebak-nebak. Artikel ini memakai format rencana tindakan agar keluarga langsung tahu prioritas sejak pasien tiba di rumah.",
    coverImage:
      "https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Dokter menjelaskan instruksi pulang kepada pasien dan keluarga di ruang perawatan",
    sections: [
      {
        heading: "Jam 0-6: bongkar semua instruksi sebelum rutinitas dimulai",
        paragraphs: [
          "Begitu sampai rumah, kumpulkan resep, surat kontrol, ringkasan rawat inap, hasil lab, dan pesan dari dokter dalam satu tempat. Jangan tunggu sampai malam, karena detail kecil biasanya hilang saat keluarga mulai lelah.",
          "Ubah instruksi panjang menjadi tiga daftar pendek: obat yang diminum hari ini, hal yang harus dihindari, dan kondisi yang harus segera dilaporkan.",
        ],
      },
      {
        heading: "Jam 6-24: buat rumah mengikuti kondisi pasien",
        paragraphs: [
          "Pasien mungkin belum kembali ke ritme normal. Karena itu, alur rumah perlu dibuat lebih sederhana: obat mudah dicek, air minum dekat, jalur ke kamar mandi aman, dan nomor darurat bisa ditemukan semua orang.",
        ],
        bullets: [
          "Tempel jadwal obat di area yang terlihat caregiver, bukan hanya di kamar pasien",
          "Pisahkan obat baru, obat lama, dan obat yang dokter minta hentikan",
          "Tentukan siapa mengecek obat pagi, siang, malam, dan siapa menjadi backup",
          "Simpan kontak rumah sakit, apotek, dan anggota keluarga di satu catatan bersama",
          "Foto luka, bengkak, atau perubahan fisik bila dokter meminta pemantauan visual",
        ],
      },
      {
        heading: "Jam 24-48: cari pola kecil sebelum menjadi masalah besar",
        paragraphs: [
          "Hari kedua biasanya mulai menunjukkan apakah sistem keluarga berjalan. Perhatikan obat yang hampir terlewat, keluhan yang berulang, atau anggota keluarga yang mulai memegang terlalu banyak tugas.",
          "Jika ada satu bagian yang kacau, jangan menyalahkan orangnya. Sederhanakan sistemnya: kurangi titik informasi, buat status terlihat bersama, dan sepakati kapan harus eskalasi.",
        ],
      },
      {
        heading: "Output yang diharapkan setelah dua hari",
        paragraphs: [
          "Keluarga idealnya sudah memiliki jadwal obat yang jelas, satu catatan pemulihan, daftar tanda bahaya, dan pembagian peran yang tidak hanya hidup di chat. Dari sini, pemulihan menjadi lebih mudah dipantau dan lebih siap dibawa ke kontrol berikutnya.",
        ],
      },
    ],
  },
  "cara-menjaga-jadwal-obat-orang-tua-tetap-konsisten-di-rumah": {
    title: "Bikin Jadwal Obat yang Benar-Benar Dipakai Keluarga",
    description:
      "Cara merancang jadwal obat yang tahan dipakai di rumah: mudah dibaca, tidak bergantung pada satu orang, dan punya tanda status yang jelas.",
    excerpt:
      "Jadwal obat yang bagus bukan yang paling lengkap, tetapi yang langsung dipahami saat keluarga sedang sibuk. Ini cara membuatnya lebih realistis.",
    coverImage:
      "https://images.pexels.com/photos/4021799/pexels-photo-4021799.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Dokter menunjukkan pilihan obat kepada pasien saat konsultasi",
    sections: [
      {
        heading: "Mulai dari satu pertanyaan: siapa yang akan membaca jadwal ini?",
        paragraphs: [
          "Jadwal obat sering dibuat terlalu medis, padahal yang memakainya adalah keluarga di tengah rutinitas rumah. Gunakan bahasa yang sama dengan percakapan sehari-hari: pagi setelah sarapan, malam sebelum tidur, atau hanya bila nyeri.",
          "Jika caregiver bergantian, jadwal harus bisa dimengerti tanpa penjelasan tambahan dari orang yang membuatnya.",
        ],
      },
      {
        heading: "Format 4 kolom yang cukup untuk sebagian besar keluarga",
        paragraphs: [
          "Alih-alih membuat tabel besar, mulai dari format ringkas. Empat kolom berikut biasanya cukup untuk membuat keluarga bergerak konsisten.",
        ],
        bullets: [
          "Waktu: pagi, siang, sore, malam, atau bila perlu",
          "Nama obat: tulis sesuai label apotek agar tidak tertukar",
          "Aturan: sebelum makan, sesudah makan, atau catatan khusus dari dokter",
          "Status: belum, sudah, dilewati, atau perlu tanya tenaga kesehatan",
        ],
      },
      {
        heading: "Tambahkan aturan anti-dosis-ganda",
        paragraphs: [
          "Masalah yang sering terjadi bukan hanya lupa minum obat, tetapi lupa apakah obat sudah diminum. Karena itu, jadwal perlu punya tanda status yang hanya bisa diubah satu kali oleh caregiver yang bertugas.",
          "Jika ragu, jangan menebak. Tandai sebagai perlu cek, lalu hubungi apoteker, dokter, atau anggota keluarga yang memegang instruksi asli.",
        ],
      },
      {
        heading: "Kapan perlu alat digital?",
        paragraphs: [
          "Jika caregiver tidak tinggal serumah, jadwal sering berubah, atau pasien punya banyak obat, sistem digital membantu membuat status terlihat bersama. Tujuannya bukan membuat perawatan terasa canggih, tetapi mengurangi pertanyaan berulang dan risiko salah informasi.",
        ],
      },
    ],
  },
  "7-cara-membantu-lansia-patuh-minum-obat": {
    title: "7 Cara Membantu Lansia Minum Obat Tepat Waktu Tanpa Membingungkan Keluarga",
    description:
      "Tujuh strategi praktis untuk membantu lansia patuh minum obat, mulai dari rutinitas harian, komunikasi empatik, sampai pengingat digital keluarga.",
    excerpt:
      "Patuh minum obat bukan sekadar disiplin. Lansia membutuhkan sistem yang jelas, empatik, dan mudah dibantu oleh keluarga.",
    coverImage:
      "https://images.pexels.com/photos/8657369/pexels-photo-8657369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Lansia membaca label botol obat dengan bantuan tenaga kesehatan",
    sections: [
      {
        heading: "Kenali penyebab obat sering terlewat",
        paragraphs: [
          "Sebelum menegur, keluarga perlu memahami penyebabnya. Lansia bisa lupa, sulit membaca label kecil, bingung karena obat berubah setelah kontrol, atau merasa tidak nyaman karena efek samping.",
          "Pendekatan yang empatik membuat percakapan lebih terbuka. Tujuannya bukan menyalahkan, tetapi membuat minum obat terasa lebih mudah dijalani.",
        ],
      },
      {
        heading: "Tujuh cara yang bisa langsung dicoba",
        paragraphs: [
          "Mulailah dari perubahan kecil yang konsisten. Sistem yang terlalu rumit justru sulit dipertahankan saat keluarga sedang sibuk.",
        ],
        bullets: [
          "Buat jadwal obat dengan bahasa sederhana dan ukuran tulisan yang mudah dibaca",
          "Hubungkan waktu obat dengan rutinitas harian seperti sarapan atau tidur malam",
          "Gunakan kotak obat atau pemisah waktu bila jumlah obat banyak",
          "Tandai obat yang sudah diminum untuk mencegah lupa atau dosis ganda",
          "Libatkan lebih dari satu anggota keluarga agar pemantauan tidak bertumpu pada satu orang",
          "Catat efek samping atau keluhan untuk dibahas dengan tenaga kesehatan",
          "Gunakan pengingat digital ketika caregiver tidak selalu berada di rumah",
        ],
      },
      {
        heading: "Saat lansia menolak minum obat",
        paragraphs: [
          "Penolakan bisa muncul karena rasa takut, lelah, efek samping, atau merasa sudah sembuh. Hindari memaksa tanpa memahami alasannya.",
          "Tanyakan dengan tenang apa yang membuat obat terasa berat diminum. Jika ada keluhan fisik, komunikasikan ke dokter atau apoteker agar keluarga tidak mengambil keputusan sendiri.",
        ],
      },
      {
        heading: "Kepatuhan lebih stabil jika keluarga punya visibilitas bersama",
        paragraphs: [
          "Ketika semua caregiver bisa melihat jadwal dan status obat yang sama, risiko miskomunikasi menurun. Keluarga juga lebih cepat tahu kapan perlu mengingatkan atau mengambil alih.",
        ],
      },
    ],
  },
  "checklist-caregiver-setelah-orang-tua-pulang-dari-rumah-sakit": {
    title: "Checklist Pulang dari RS: Apa yang Dicek Pagi, Siang, dan Malam?",
    description:
      "Checklist praktis berbasis waktu untuk caregiver: apa yang perlu dicek pagi, siang, malam, dan akhir minggu setelah pasien pulang.",
    excerpt:
      "Bukan daftar panjang yang bikin stres, tetapi ritme harian yang membantu keluarga tahu kapan harus mengecek obat, makan-minum, keluhan, dan kontrol.",
    coverImage:
      "https://images.pexels.com/photos/6129043/pexels-photo-6129043.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Tenaga kesehatan menulis catatan medis di clipboard",
    sections: [
      {
        heading: "Kenapa checklist harus mengikuti ritme hari?",
        paragraphs: [
          "Checklist yang terlalu panjang biasanya hanya dipakai satu-dua hari. Lebih realistis jika tugas dibagi mengikuti momen alami di rumah: pagi saat mulai aktivitas, siang saat energi mulai turun, dan malam sebelum pasien beristirahat.",
        ],
      },
      {
        heading: "Pagi: mulai hari dengan status yang jelas",
        paragraphs: [
          "Pagi adalah waktu terbaik untuk mengecek kondisi dasar dan menyamakan rencana keluarga. Buat catatan pendek agar caregiver berikutnya tidak perlu bertanya ulang.",
        ],
        bullets: [
          "Apakah pasien tidur cukup dan tampak lebih lemas dari biasanya?",
          "Apakah obat pagi sudah siap dan aturan makannya jelas?",
          "Apakah ada keluhan baru sejak semalam?",
          "Siapa caregiver utama hari ini dan siapa backup-nya?",
        ],
      },
      {
        heading: "Siang dan malam: jangan tunggu sampai ada masalah besar",
        paragraphs: [
          "Siang dipakai untuk mengecek makan-minum, obat lanjutan, dan energi pasien. Malam dipakai untuk menutup hari: obat malam, keluhan nyeri, suhu tubuh bila perlu, dan catatan yang harus dibawa ke esok hari.",
          "Jika keluarga bergantian menjaga, catatan malam menjadi jembatan agar caregiver pagi tidak mulai dari nol.",
        ],
      },
      {
        heading: "Checklist mingguan: stok, kontrol, dan beban caregiver",
        paragraphs: [
          "Sekali seminggu, cek stok obat, jadwal kontrol, pertanyaan untuk dokter, dan siapa yang terlihat paling kelelahan. Checklist yang baik bukan hanya menjaga pasien, tetapi juga mencegah caregiver utama menanggung semuanya sendirian.",
        ],
      },
    ],
  },
  "tanda-orang-tua-butuh-bantuan-pemantauan-obat": {
    title: "5 Sinyal Orang Tua Mulai Butuh Bantuan Mengelola Obat",
    description:
      "Kenali sinyal halus bahwa orang tua mulai kesulitan mengelola obat: bingung label, stok tidak terpantau, dosis terlewat, dan resep bercampur.",
    excerpt:
      "Bantuan tidak harus menunggu kejadian besar. Ada tanda-tanda kecil yang menunjukkan keluarga perlu mulai masuk dengan sistem yang lebih suportif.",
    coverImage:
      "https://images.pexels.com/photos/8441792/pexels-photo-8441792.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Perempuan lansia meninjau dokumen bersama pendamping di meja konsultasi",
    sections: [
      {
        heading: "Sinyal pertama biasanya terlihat di benda kecil",
        paragraphs: [
          "Kotak obat yang berantakan, resep lama yang masih tersimpan, atau blister yang tidak habis sesuai jadwal sering dianggap sepele. Padahal benda-benda kecil ini memberi petunjuk tentang bagaimana rutinitas obat berjalan di rumah.",
          "Alih-alih langsung menegur, keluarga bisa memakai tanda tersebut sebagai alasan untuk menawarkan bantuan yang lebih ringan dan tidak menggurui.",
        ],
      },
      {
        heading: "Lima tanda yang perlu diperhatikan",
        paragraphs: [
          "Jika beberapa tanda berikut muncul berulang, keluarga sebaiknya mulai membuat sistem pemantauan bersama.",
        ],
        bullets: [
          "Orang tua sering bertanya ulang obat mana yang diminum hari ini",
          "Obat baru dan obat lama tercampur di tempat yang sama",
          "Stok obat habis tanpa ada yang sadar lebih awal",
          "Label apotek sulit dibaca atau tidak lagi cocok dengan instruksi terbaru",
          "Keluarga menerima kabar obat terlewat setelah kejadian berlangsung beberapa hari",
        ],
      },
      {
        heading: "Cara menawarkan bantuan tanpa membuat orang tua merasa kehilangan kontrol",
        paragraphs: [
          "Gunakan bahasa kolaboratif: kita rapikan jadwalnya supaya semua orang tidak bingung. Hindari kalimat yang terdengar menyalahkan seperti sering lupa atau tidak teliti.",
          "Mulailah dari bantuan kecil: memfoto resep, menulis ulang jadwal dengan huruf besar, atau membuat tanda sudah diminum. Setelah itu baru masuk ke sistem pengingat bersama bila diperlukan.",
        ],
      },
    ],
  },
  "cara-keluarga-memantau-jadwal-obat-bersama": {
    title: "Family Sync untuk Obat: Cara Membuat Semua Caregiver Melihat Status yang Sama",
    description:
      "Panduan koordinasi keluarga agar status obat, jadwal kontrol, stok, dan catatan kondisi tidak tersebar di banyak chat.",
    excerpt:
      "Masalah keluarga bukan kurang peduli, tetapi informasinya pecah. Artikel ini membahas sistem sederhana agar semua caregiver melihat status yang sama.",
    coverImage:
      "https://images.pexels.com/photos/3791666/pexels-photo-3791666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Anak perempuan membantu ibu lansia menggunakan smartphone di taman",
    sections: [
      {
        heading: "Chat keluarga cepat, tapi tidak selalu rapi",
        paragraphs: [
          "WhatsApp berguna untuk kabar cepat, tetapi mudah tenggelam ketika ada banyak topik. Status obat yang penting bisa bercampur dengan foto, obrolan, dan pesan lain.",
          "Untuk perawatan harian, keluarga butuh satu sumber kebenaran: jadwal obat hari ini, siapa yang mengecek, dan apakah ada hal yang perlu ditindaklanjuti.",
        ],
      },
      {
        heading: "Bagi informasi menjadi empat kanal",
        paragraphs: [
          "Tidak semua informasi perlu diperlakukan sama. Dengan membagi kanal, keluarga lebih mudah tahu mana yang harus dicek sekarang dan mana yang cukup direview nanti.",
        ],
        bullets: [
          "Status obat: sudah, belum, dilewati, atau perlu konfirmasi",
          "Jadwal kontrol: tanggal, dokter, transportasi, dan dokumen yang perlu dibawa",
          "Catatan kondisi: keluhan, makan-minum, tidur, tekanan darah bila diminta",
          "Tugas keluarga: siapa bertanggung jawab hari ini dan siapa backup",
        ],
      },
      {
        heading: "Aturan 15 detik untuk update caregiver",
        paragraphs: [
          "Update yang baik harus bisa ditulis dalam 15 detik: obat pagi sudah, makan setengah porsi, keluhan pusing ringan, kontrol Jumat. Format singkat seperti ini lebih mungkin dipakai konsisten daripada laporan panjang.",
        ],
      },
      {
        heading: "Kapan koordinasi perlu dievaluasi?",
        paragraphs: [
          "Jika pertanyaan yang sama muncul berkali-kali, tugas sering tumpang tindih, atau caregiver utama tetap menjadi satu-satunya sumber informasi, sistem koordinasi perlu disederhanakan lagi.",
        ],
      },
    ],
  },
  "pertanyaan-yang-perlu-ditanyakan-saat-kontrol-pasca-rawat-inap": {
    title: "Sebelum Kontrol: 12 Pertanyaan yang Membuat Konsultasi Lebih Fokus",
    description:
      "Daftar pertanyaan untuk kontrol pasca rawat inap: obat, efek samping, aktivitas, tanda bahaya, target pemulihan, dan jadwal berikutnya.",
    excerpt:
      "Kontrol sering terasa singkat karena keluarga baru mengingat pertanyaan setelah keluar ruangan. Siapkan daftar ini sebelum bertemu dokter.",
    coverImage:
      "https://images.pexels.com/photos/6098057/pexels-photo-6098057.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Dokter menulis resep dan catatan medis di meja konsultasi",
    sections: [
      {
        heading: "Bawa catatan, bukan hanya cerita",
        paragraphs: [
          "Dokter bisa membantu lebih spesifik ketika keluarga membawa data: obat yang diminum, keluhan yang muncul, perubahan makan-minum, dan pertanyaan yang sudah ditulis. Tanpa catatan, konsultasi mudah berubah menjadi ingatan yang tercecer.",
        ],
      },
      {
        heading: "Pertanyaan tentang obat",
        paragraphs: ["Mulai dari obat karena bagian ini paling sering berubah setelah rawat inap."],
        bullets: [
          "Obat mana yang wajib diteruskan sampai habis?",
          "Obat mana yang boleh dihentikan jika keluhan membaik?",
          "Apa efek samping yang perlu dicatat keluarga?",
          "Apa yang harus dilakukan jika satu dosis terlewat?",
        ],
      },
      {
        heading: "Pertanyaan tentang aktivitas dan tanda bahaya",
        paragraphs: ["Setelah obat jelas, tanyakan batas aktivitas dan kondisi yang harus membuat keluarga segera mencari bantuan."],
        bullets: [
          "Aktivitas apa yang sudah aman dilakukan minggu ini?",
          "Makanan atau kebiasaan apa yang perlu dibatasi sementara?",
          "Tanda apa yang harus membuat keluarga menghubungi rumah sakit?",
          "Kapan kondisi dianggap tidak membaik sesuai harapan?",
        ],
      },
      {
        heading: "Tutup konsultasi dengan mengulang instruksi",
        paragraphs: [
          "Sebelum keluar, ulangi instruksi dokter dengan bahasa sendiri. Cara ini membantu menangkap salah paham saat masih ada kesempatan bertanya.",
        ],
      },
    ],
  },
  "tanda-bahaya-setelah-pulang-dari-rumah-sakit-yang-perlu-dipantau-keluarga": {
    title: "Tanda Bahaya Setelah Pulang: Mana yang Dipantau, Mana yang Harus Segera Ditangani?",
    description:
      "Panduan triase ringan untuk keluarga: membedakan keluhan yang perlu dicatat, dikonsultasikan, dan kondisi yang harus segera mendapat bantuan medis.",
    excerpt:
      "Tidak semua keluhan berarti darurat, tapi beberapa perubahan tidak boleh ditunda. Gunakan panduan ini sebagai peta kewaspadaan keluarga.",
    coverImage:
      "https://images.pexels.com/photos/16364306/pexels-photo-16364306.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Lansia duduk di kursi roda dengan pendamping di fasilitas perawatan",
    sections: [
      {
        heading: "Mulai dari perubahan yang berbeda dari biasanya",
        paragraphs: [
          "Keluarga adalah orang yang paling mengenal kondisi harian pasien. Karena itu, perubahan perilaku seperti tampak lebih bingung, sangat mengantuk, atau tiba-tiba tidak mau makan bisa sama pentingnya dengan angka suhu atau tekanan darah.",
        ],
      },
      {
        heading: "Zona merah: jangan ditunda",
        paragraphs: ["Ikuti instruksi dokter sebagai acuan utama. Secara umum, beberapa kondisi berikut perlu respons cepat."],
        bullets: [
          "Sesak napas, nyeri dada, atau napas tampak semakin berat",
          "Penurunan kesadaran, bingung berat, atau sulit diajak bicara",
          "Demam tinggi yang tidak membaik sesuai arahan dokter",
          "Luka operasi bernanah, berbau, atau kemerahan yang meluas",
          "Muntah berulang, tidak bisa minum, atau tanda dehidrasi",
        ],
      },
      {
        heading: "Zona kuning: catat dan konsultasikan",
        paragraphs: [
          "Keluhan seperti nafsu makan menurun, nyeri ringan, tidur terganggu, atau lemas bisa dicatat dulu bila tidak berat. Namun jika berulang, memburuk, atau membuat keluarga ragu, hubungi tenaga kesehatan.",
        ],
      },
      {
        heading: "Saat menghubungi dokter, bawa kronologi singkat",
        paragraphs: [
          "Tulis kapan gejala mulai muncul, apa yang sudah dilakukan, obat terakhir yang diminum, dan apakah ada perubahan dibanding kemarin. Kronologi singkat membantu tenaga kesehatan memberi arahan lebih tepat.",
        ],
      },
    ],
  },
  "cara-membagi-tugas-caregiver-keluarga-agar-tidak-bertumpu-pada-satu-orang": {
    title: "Jangan Semua ke Satu Orang: Desain Rota Caregiver Keluarga",
    description:
      "Cara membuat rota caregiver yang adil dan realistis: pemilik tugas, backup, batas waktu, dan review mingguan agar beban tidak menumpuk.",
    excerpt:
      "Caregiver utama sering lelah bukan karena tidak dibantu, tetapi karena semua keputusan tetap kembali kepadanya. Rota sederhana bisa mengubah ritme keluarga.",
    coverImage:
      "https://images.pexels.com/photos/6975089/pexels-photo-6975089.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Pasangan lansia duduk di ruang makan dengan suasana rumah",
    sections: [
      {
        heading: "Bedakan membantu dan memiliki tanggung jawab",
        paragraphs: [
          "Banyak anggota keluarga berkata siap membantu, tetapi tidak punya tugas spesifik. Akibatnya caregiver utama tetap menjadi pusat koordinasi, pengingat, dan pengambil keputusan.",
          "Rota yang baik memberi setiap orang area tanggung jawab, bukan sekadar jadwal jaga.",
        ],
      },
      {
        heading: "Lima peran yang bisa dibagi",
        paragraphs: ["Tidak semua keluarga membutuhkan lima orang berbeda. Satu orang boleh memegang lebih dari satu peran, selama tertulis jelas."],
        bullets: [
          "Koordinator obat: jadwal, status minum, dan stok",
          "Koordinator kontrol: tanggal, transportasi, dan dokumen",
          "Koordinator harian: makan, minum, tidur, aktivitas, dan keluhan",
          "Koordinator komunikasi: update keluarga dan eskalasi kondisi",
          "Backup: mengambil alih saat caregiver utama sakit, bekerja, atau lelah",
        ],
      },
      {
        heading: "Buat aturan handoff 3 kalimat",
        paragraphs: [
          "Setiap pergantian caregiver cukup menjawab tiga hal: apa yang sudah dilakukan, apa yang perlu dipantau, dan apa yang belum selesai. Handoff pendek membuat bantuan lebih mudah dilanjutkan.",
        ],
      },
      {
        heading: "Review bukan untuk menyalahkan",
        paragraphs: [
          "Review mingguan dipakai untuk melihat beban yang tidak seimbang. Jika satu orang terus menjadi sumber jawaban, sistemnya perlu diperbaiki, bukan orangnya yang ditegur.",
        ],
      },
    ],
  },
  "cara-menyiapkan-rumah-agar-lebih-aman-untuk-lansia-setelah-rawat-inap": {
    title: "Audit Rumah 20 Menit untuk Lansia yang Baru Pulang Rawat Inap",
    description:
      "Panduan audit cepat rumah: jalur jalan, kamar mandi, pencahayaan, meja obat, area tidur, dan barang yang harus mudah dijangkau.",
    excerpt:
      "Rumah tidak perlu direnovasi besar. Dalam 20 menit, keluarga bisa mengurangi risiko jatuh, bingung obat, dan panggilan bantuan yang terlambat.",
    coverImage:
      "https://images.pexels.com/photos/8860212/pexels-photo-8860212.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Lansia duduk di tempat tidur dalam suasana rumah yang tenang",
    sections: [
      {
        heading: "Jalani rute pasien, bukan rute keluarga",
        paragraphs: [
          "Mulai dari tempat tidur pasien, lalu berjalan ke kamar mandi, meja makan, tempat obat, dan area duduk. Perhatikan kabel, karpet licin, sudut meja, pencahayaan redup, atau barang yang terlalu tinggi dijangkau.",
        ],
      },
      {
        heading: "Audit 20 menit: area yang paling berdampak",
        paragraphs: ["Gunakan waktu singkat untuk memperbaiki titik yang paling sering dipakai pasien."],
        bullets: [
          "Tempat tidur: air minum, tisu, lampu, dan alat panggil dalam jangkauan",
          "Jalur jalan: bebas kabel, karpet licin, dan barang kecil",
          "Kamar mandi: alas anti-slip, pencahayaan cukup, dan pegangan bila tersedia",
          "Meja obat: obat aktif terpisah dari obat lama dan label mudah dibaca",
          "Pintu keluar: sandal tidak licin dan keluarga tahu jika pasien perlu ditemani",
        ],
      },
      {
        heading: "Buat zona pemulihan, bukan sekadar meja obat",
        paragraphs: [
          "Satu area kecil bisa berisi jadwal obat, catatan harian, kontak penting, dan alat ukur yang direkomendasikan dokter. Zona ini membantu caregiver baru langsung paham tanpa mencari-cari di banyak tempat.",
        ],
      },
      {
        heading: "Ulangi audit setelah tiga hari",
        paragraphs: [
          "Setelah rutinitas berjalan, keluarga biasanya menemukan hambatan baru. Audit ulang membantu menyesuaikan rumah dengan kondisi pasien yang berubah dari hari ke hari.",
        ],
      },
    ],
  },
  "cara-mencatat-kondisi-harian-orang-tua-agar-kontrol-dokter-lebih-efektif": {
    title: "Template Catatan Harian 2 Menit untuk Dibawa Saat Kontrol Dokter",
    description:
      "Format catatan harian singkat untuk caregiver: kondisi umum, obat, keluhan, makan-minum, aktivitas, dan pertanyaan untuk dokter.",
    excerpt:
      "Catatan yang konsisten tidak harus panjang. Format dua menit ini membantu keluarga membawa pola, bukan potongan cerita, saat kontrol.",
    coverImage:
      "https://images.pexels.com/photos/3958396/pexels-photo-3958396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Seseorang menulis catatan konsultasi di atas buku",
    sections: [
      {
        heading: "Dokter lebih mudah membaca pola daripada cerita panjang",
        paragraphs: [
          "Saat kontrol, keluarga sering ingin menceritakan semuanya sekaligus. Masalahnya, detail penting seperti jam obat terlewat atau kapan keluhan muncul bisa kabur jika hanya mengandalkan ingatan.",
          "Catatan dua menit membantu keluarga menyimpan data yang cukup tanpa membuat caregiver merasa sedang menulis laporan medis.",
        ],
      },
      {
        heading: "Format harian yang bisa langsung dipakai",
        paragraphs: ["Isi satu baris per hari. Jika ada bagian yang tidak relevan, kosongkan saja."],
        bullets: [
          "Kondisi umum: lebih segar, sama saja, atau lebih lemas",
          "Obat: semua diminum, ada yang terlewat, atau ada efek yang dicurigai",
          "Keluhan: nyeri, pusing, mual, sesak, sulit tidur, atau keluhan lain",
          "Makan-minum: cukup, berkurang, muntah, atau sulit menelan",
          "Pertanyaan dokter: satu hal yang perlu dijawab saat kontrol",
        ],
      },
      {
        heading: "Contoh catatan yang berguna",
        paragraphs: [
          "9 April: obat pagi dan malam diminum, siang terlewat karena pasien tidur. Makan setengah porsi, minum cukup. Mengeluh pusing ringan jam 16.00, membaik setelah istirahat. Tanya dokter apakah obat siang boleh digeser waktunya.",
        ],
      },
      {
        heading: "Bagikan ke caregiver lain sebelum kontrol",
        paragraphs: [
          "Sebelum bertemu dokter, minta anggota keluarga lain membaca catatan. Mereka mungkin menambahkan detail yang terlewat dan membantu menentukan pertanyaan paling penting.",
        ],
      },
    ],
  },
  "apa-yang-harus-dilakukan-jika-orang-tua-lupa-minum-obat": {
    title: "Obat Terlewat: Protokol Tenang untuk Keluarga di Rumah",
    description:
      "Langkah aman saat obat lansia terlewat: cek jenis obat, jangan menggandakan dosis sembarangan, catat kejadian, dan perbaiki sistem pengingat.",
    excerpt:
      "Saat obat terlewat, respons pertama keluarga menentukan keamanan. Gunakan protokol ini agar tidak panik dan tidak mengambil keputusan dosis tanpa arahan.",
    coverImage:
      "https://images.pexels.com/photos/9902269/pexels-photo-9902269.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Seseorang memegang pil dan segelas air di rumah",
    sections: [
      {
        heading: "Langkah pertama: tahan dorongan untuk mengejar dosis",
        paragraphs: [
          "Keluarga sering ingin segera mengganti dosis yang terlewat. Namun beberapa obat tidak aman jika digandakan atau diminum terlalu dekat dengan jadwal berikutnya.",
          "Gunakan instruksi dokter atau label apotek sebagai acuan utama. Jika tidak jelas, hubungi tenaga kesehatan daripada menebak.",
        ],
      },
      {
        heading: "Protokol 4C",
        paragraphs: ["Gunakan urutan sederhana ini agar respons keluarga lebih konsisten."],
        bullets: [
          "Cek: obat apa yang terlewat dan kapan seharusnya diminum",
          "Cari instruksi: baca label, catatan dokter, atau arahan apoteker",
          "Catat: tulis kejadian, jam, dan kondisi pasien setelahnya",
          "Cegah ulang: perbaiki pengingat, pembagian tugas, atau tanda status obat",
        ],
      },
      {
        heading: "Jangan jadikan pasien sebagai sumber masalah",
        paragraphs: [
          "Obat terlewat bisa terjadi karena jadwal terlalu rumit, label sulit dibaca, atau status tidak terlihat oleh caregiver lain. Fokus pada sistem membuat solusi lebih tahan lama daripada teguran.",
        ],
      },
      {
        heading: "Kapan perlu konsultasi?",
        paragraphs: [
          "Segera konsultasikan bila obat yang terlewat termasuk obat penting yang dokter tekankan, pasien mengalami keluhan baru, atau keluarga tidak yakin apakah dosis boleh dilewati atau harus diminum segera.",
        ],
      },
    ],
  },
  "panduan-komunikasi-dengan-dokter-saat-keluarga-merawat-lansia-di-rumah": {
    title: "Cara Bicara dengan Dokter Tanpa Lupa Detail Penting",
    description:
      "Panduan komunikasi dokter untuk caregiver: menyusun kronologi, membawa data obat, menanyakan prioritas, dan membagikan instruksi ke keluarga.",
    excerpt:
      "Konsultasi yang baik bukan soal banyak bertanya, tetapi membawa informasi yang tepat dan pulang dengan instruksi yang bisa dijalankan keluarga.",
    coverImage:
      "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Dokter berbicara dengan pasien saat konsultasi kesehatan",
    sections: [
      {
        heading: "Masuk ruangan dengan satu tujuan utama",
        paragraphs: [
          "Sebelum konsultasi, sepakati pertanyaan paling penting: apakah soal obat, keluhan baru, aktivitas, atau kontrol berikutnya. Satu tujuan utama membantu keluarga tidak kehilangan arah saat waktu konsultasi singkat.",
        ],
      },
      {
        heading: "Bawa kronologi 30 detik",
        paragraphs: [
          "Latih penjelasan singkat: sejak kapan keluhan muncul, seberapa sering, apa yang sudah dilakukan, dan apakah membaik atau memburuk. Dokter tidak membutuhkan cerita panjang untuk mulai memahami pola.",
        ],
      },
      {
        heading: "Tanyakan prioritas, bukan semua hal sekaligus",
        paragraphs: ["Jika instruksi terasa banyak, minta dokter membantu mengurutkan mana yang paling penting dilakukan minggu ini."],
        bullets: [
          "Obat mana yang tidak boleh terlewat?",
          "Keluhan mana yang harus segera dilaporkan?",
          "Aktivitas apa yang perlu dibatasi dulu?",
          "Data apa yang perlu kami catat sampai kontrol berikutnya?",
        ],
      },
      {
        heading: "Setelah konsultasi, buat ringkasan keluarga",
        paragraphs: [
          "Tulis ulang instruksi dalam bahasa sehari-hari lalu bagikan ke caregiver lain. Ringkasan ini mencegah arahan dokter berubah menjadi versi berbeda-beda di setiap anggota keluarga.",
        ],
      },
    ],
  },
} satisfies Record<string, Partial<BlogPost>>;

const notionApiKey = process.env.NOTION_API_KEY;
const notionDataSourceId = process.env.NOTION_DATA_SOURCE_ID;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notionClient = notionApiKey
  ? new Client({
      auth: notionApiKey,
    })
  : null;

type BlogSummary = Omit<BlogPost, "sections"> & {
  id: string;
};

function normalizePropertyName(name: string) {
  return name.trim().toLowerCase();
}

function getPropertyValue(page: PageObjectResponse, propertyName: string) {
  const match = Object.entries(page.properties).find(
    ([name]) => normalizePropertyName(name) === normalizePropertyName(propertyName)
  );

  return match?.[1];
}

function getPlainTextFromRichText(
  richText: Array<{ plain_text: string }> | undefined
) {
  return richText?.map((item) => item.plain_text).join("").trim() ?? "";
}

function getTitleProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "title" ? getPlainTextFromRichText(property.title) : "";
}

function getRichTextProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "rich_text" ? getPlainTextFromRichText(property.rich_text) : "";
}

function getDateProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "date" ? property.date?.start ?? "" : "";
}

function getCheckboxProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "checkbox" ? property.checkbox : false;
}

function getSelectProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "select" ? property.select?.name ?? "" : "";
}

function getMultiSelectProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "multi_select" ? property.multi_select.map((item) => item.name) : [];
}

function getUrlProperty(page: PageObjectResponse, propertyName: string) {
  const property = getPropertyValue(page, propertyName);
  return property?.type === "url" ? property.url ?? "" : "";
}

function sortBlogPosts<T extends { publishedAt: string }>(posts: T[]) {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function applyCuratedBlogOverride<T extends BlogPost>(post: T): T {
  const override = curatedBlogOverrides[post.slug as keyof typeof curatedBlogOverrides];

  if (!override) {
    return post;
  }

  return {
    ...post,
    ...override,
    sections: override.sections ?? post.sections,
  };
}

function mergeWithLocalFallbackPosts(posts: BlogPost[]) {
  const existingSlugs = new Set(posts.map((post) => post.slug));
  const localOnlyPosts = getLocalAllBlogPosts().filter((post) => !existingSlugs.has(post.slug));

  return sortBlogPosts([...posts, ...localOnlyPosts].map(applyCuratedBlogOverride));
}

function estimateReadingTime(text: string) {
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(wordCount / 180));
  return `${minutes} min baca`;
}

function getBlockText(block: BlockObjectResponse) {
  switch (block.type) {
    case "paragraph":
      return getPlainTextFromRichText(block.paragraph.rich_text);
    case "heading_1":
      return getPlainTextFromRichText(block.heading_1.rich_text);
    case "heading_2":
      return getPlainTextFromRichText(block.heading_2.rich_text);
    case "heading_3":
      return getPlainTextFromRichText(block.heading_3.rich_text);
    case "bulleted_list_item":
      return getPlainTextFromRichText(block.bulleted_list_item.rich_text);
    case "numbered_list_item":
      return getPlainTextFromRichText(block.numbered_list_item.rich_text);
    case "quote":
      return getPlainTextFromRichText(block.quote.rich_text);
    default:
      return "";
  }
}

function blocksToSections(blocks: BlockObjectResponse[], fallbackHeading: string) {
  const sections: BlogPostSection[] = [];
  let currentSection: BlogPostSection | null = null;

  const ensureSection = () => {
    if (!currentSection) {
      currentSection = {
        heading: fallbackHeading,
        paragraphs: [],
      };
      sections.push(currentSection);
    }

    return currentSection;
  };

  for (const block of blocks) {
    switch (block.type) {
      case "heading_1":
      case "heading_2":
      case "heading_3": {
        const heading = getBlockText(block);

        if (!heading) {
          continue;
        }

        currentSection = {
          heading,
          paragraphs: [],
        };
        sections.push(currentSection);
        break;
      }
      case "paragraph": {
        const paragraph = getBlockText(block);

        if (!paragraph) {
          continue;
        }

        ensureSection().paragraphs.push(paragraph);
        break;
      }
      case "bulleted_list_item":
      case "numbered_list_item": {
        const bullet = getBlockText(block);

        if (!bullet) {
          continue;
        }

        const section = ensureSection();
        section.bullets = [...(section.bullets ?? []), bullet];
        break;
      }
      default:
        break;
    }
  }

  return sections.filter((section) => section.heading || section.paragraphs.length || section.bullets?.length);
}

function extractSummaryFromPage(page: PageObjectResponse): BlogSummary | null {
  const slug = getRichTextProperty(page, "Slug");
  const title = getTitleProperty(page, "Title");
  const description = getRichTextProperty(page, "Description");
  const excerpt = getRichTextProperty(page, "Excerpt") || getRichTextProperty(page, "Excerpt ") || description;
  const publishedAt = getDateProperty(page, "Published At");
  const category = getSelectProperty(page, "Category") || DEFAULT_CATEGORY;
  const tags = getMultiSelectProperty(page, "Tags");
  const featured = getCheckboxProperty(page, "Featured");
  const coverImage = getUrlProperty(page, "Cover Image") || "/assets/cta.jpg";

  if (!slug || !title || !publishedAt) {
    return null;
  }

  const readingTime = estimateReadingTime([title, description, excerpt, ...tags].join(" "));

  return {
    id: page.id,
    slug,
    title,
    description: description || excerpt,
    excerpt,
    publishedAt,
    readingTime,
    author: DEFAULT_AUTHOR,
    category,
    tags,
    featured,
    coverImage,
    coverImageAlt: title,
  };
}

async function resolveNotionDataSourceId() {
  if (!notionClient) {
    return null;
  }

  if (notionDataSourceId) {
    return notionDataSourceId;
  }

  if (!notionDatabaseId) {
    return null;
  }

  const database = await notionClient.databases.retrieve({
    database_id: notionDatabaseId,
  });

  return "data_sources" in database ? database.data_sources?.[0]?.id ?? null : null;
}

async function queryPublishedNotionPages() {
  if (!notionClient) {
    return [];
  }

  const dataSourceId = await resolveNotionDataSourceId();

  if (!dataSourceId) {
    return [];
  }

  const pages: PageObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notionClient.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Published At",
          direction: "descending",
        },
      ],
      start_cursor: cursor,
      page_size: 100,
    });

    const pageResults = response.results.filter(isFullPageOrDataSource).filter((result): result is PageObjectResponse => result.object === "page");
    pages.push(...pageResults);
    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return pages;
}

async function listBlockChildren(blockId: string) {
  if (!notionClient) {
    return [];
  }

  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notionClient.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    const fullBlocks = response.results.filter(
      (result): result is BlockObjectResponse | PartialBlockObjectResponse => isFullBlock(result)
    );

    for (const block of fullBlocks) {
      if (!isFullBlock(block)) {
        continue;
      }

      blocks.push(block);

      if (block.has_children) {
        const nestedBlocks = await listBlockChildren(block.id);
        blocks.push(...nestedBlocks);
      }
    }

    cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
  } while (cursor);

  return blocks;
}

const getCachedNotionSummaries = unstable_cache(
  async () => {
    try {
      const pages = await queryPublishedNotionPages();
      const summaries = pages.map(extractSummaryFromPage).filter((post): post is BlogSummary => post !== null);
      return sortBlogPosts(summaries);
    } catch {
      return [];
    }
  },
  ["notion-blog-summaries"],
  { revalidate: BLOG_REVALIDATE_SECONDS }
);

const getCachedNotionPostBySlug = unstable_cache(
  async (slug: string) => {
    const summaries = await getCachedNotionSummaries();
    const summary = summaries.find((post) => post.slug === slug);

    if (!summary) {
      return null;
    }

    try {
      const blocks = await listBlockChildren(summary.id);
      const sections = blocksToSections(blocks, summary.title);
      const readingTime = estimateReadingTime(
        [summary.title, summary.description, summary.excerpt, ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])])].join(" ")
      );

      return {
        ...summary,
        readingTime,
        sections: sections.length
          ? sections
          : [
              {
                heading: summary.title,
                paragraphs: [summary.description],
              },
            ],
      } satisfies BlogPost;
    } catch {
      return {
        ...summary,
        sections: [
          {
            heading: summary.title,
            paragraphs: [summary.description],
          },
        ],
      } satisfies BlogPost;
    }
  },
  ["notion-blog-post-by-slug"],
  { revalidate: BLOG_REVALIDATE_SECONDS }
);

async function getSourceMode() {
  const notionPosts = await getCachedNotionSummaries();
  return notionPosts.length > 0 ? "notion" : "local";
}

export type { BlogPost, BlogPostSection } from "@/lib/blog-local";
export { getCategorySlug } from "@/lib/blog-local";

export async function getAllBlogPosts() {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    return getLocalAllBlogPosts().map(applyCuratedBlogOverride);
  }

  const summaries = await getCachedNotionSummaries();
  const posts = summaries.map(({ id, ...post }) => {
    void id;
    return applyCuratedBlogOverride({ ...post, sections: [] });
  });

  return mergeWithLocalFallbackPosts(posts);
}

export async function getFeaturedBlogPosts() {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured);
}

export async function getBlogPostBySlug(slug: string) {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    const post = getLocalBlogPostBySlug(slug);
    return post ? applyCuratedBlogOverride(post) : undefined;
  }

  const notionPost = await getCachedNotionPostBySlug(slug);

  if (notionPost) {
    return applyCuratedBlogOverride(notionPost);
  }

  const localPost = getLocalBlogPostBySlug(slug);
  return localPost ? applyCuratedBlogOverride(localPost) : undefined;
}

export async function getAllBlogSlugs() {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    return getLocalAllBlogSlugs();
  }

  const posts = await getCachedNotionSummaries();
  return Array.from(new Set([...posts.map((post) => post.slug), ...getLocalAllBlogSlugs()]));
}

export async function getAllBlogCategories() {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    return getLocalAllBlogCategories();
  }

  const posts = await getAllBlogPosts();
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export async function getCategoryBySlug(slug: string) {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    return getLocalCategoryBySlug(slug);
  }

  const categories = await getAllBlogCategories();
  return categories.find((category) => getCategorySlug(category) === slug);
}

export async function getBlogPostsByCategory(category: string) {
  const sourceMode = await getSourceMode();

  if (sourceMode === "local") {
    return getLocalBlogPostsByCategory(category);
  }

  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.category === category);
}
