export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  coverImageAlt: string;
  sections: BlogPostSection[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "cara-merawat-orang-tua-setelah-rawat-inap-di-rumah",
    title: "Cara Merawat Orang Tua Setelah Rawat Inap di Rumah",
    description:
      "Panduan caregiver untuk merawat orang tua setelah rawat inap: dari obat, kontrol, nutrisi, hingga koordinasi keluarga di rumah.",
    excerpt:
      "Perawatan setelah rawat inap sering terasa membingungkan. Artikel ini membahas langkah-langkah praktis agar keluarga bisa mendampingi orang tua dengan lebih tenang.",
    publishedAt: "2026-04-18",
    readingTime: "6 min baca",
    author: "Tim PulangSehat",
    category: "Perawatan Lansia",
    tags: ["caregiver", "rawat inap", "lansia", "pemulihan"],
    featured: true,
    coverImage:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Caregiver berdiskusi dengan lansia di rumah sambil menyiapkan obat harian",
    sections: [
      {
        heading: "Kenapa masa transisi pulang dari rumah sakit itu krusial?",
        paragraphs: [
          "Banyak masalah muncul justru setelah pasien pulang dari rumah sakit. Jadwal obat berubah, kontrol lanjutan harus dijaga, dan keluarga sering harus menyesuaikan rutinitas secara mendadak.",
          "Untuk keluarga yang merawat orang tua, masa ini sering menjadi titik paling rawan karena informasi medis tersebar di kertas resep, pesan WhatsApp, dan ingatan masing-masing anggota keluarga.",
        ],
      },
      {
        heading: "Hal yang perlu dipastikan dalam 48 jam pertama",
        paragraphs: [
          "Fokus awal setelah rawat inap adalah memastikan semua instruksi dokter benar-benar dipahami dan bisa dijalankan di rumah. Ini termasuk jadwal obat, pantangan aktivitas, pola makan, dan tanda bahaya yang harus dipantau.",
        ],
        bullets: [
          "Pisahkan obat berdasarkan waktu minum dan dosis",
          "Catat jadwal kontrol atau pemeriksaan lanjutan",
          "Pastikan satu anggota keluarga menjadi koordinator utama",
          "Simpan nomor dokter, rumah sakit, dan apotek yang relevan",
        ],
      },
      {
        heading: "Cara keluarga membagi peran tanpa saling bingung",
        paragraphs: [
          "Salah satu penyebab paling umum kesalahan perawatan di rumah adalah asumsi bahwa orang lain sudah menangani tugas tertentu. Karena itu, keluarga perlu membagi peran secara jelas sejak awal.",
          "Misalnya, satu orang bertanggung jawab mengecek obat, satu orang memantau kontrol dan transportasi, dan anggota keluarga lain memastikan kebutuhan harian pasien tetap terpenuhi.",
        ],
      },
      {
        heading: "Gunakan sistem pencatatan yang sederhana",
        paragraphs: [
          "Caregiver tidak butuh sistem yang rumit. Yang dibutuhkan adalah cara yang konsisten untuk melihat apakah obat sudah diminum, kondisi pasien stabil, dan keluarga lain bisa ikut memantau.",
          "Di sinilah alat bantu digital seperti PulangSehat bisa relevan, karena membantu keluarga membangun ritme pemantauan yang lebih rapi sejak awal pemulihan.",
        ],
      },
    ],
  },
  {
    slug: "cara-menjaga-jadwal-obat-orang-tua-tetap-konsisten-di-rumah",
    title: "Cara Menjaga Jadwal Obat Orang Tua Tetap Konsisten di Rumah",
    description:
      "Panduan membuat jadwal obat lansia yang mudah diikuti keluarga: dari menyederhanakan instruksi, memakai rutinitas harian, sampai mencegah dosis ganda.",
    excerpt:
      "Konsistensi minum obat bukan hanya soal mengingatkan. Keluarga perlu sistem sederhana agar jadwal terlihat jelas dan semua caregiver tahu status terbaru.",
    publishedAt: "2026-04-18",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Kepatuhan Obat",
    tags: ["caregiver", "obat lansia", "jadwal obat"],
    featured: true,
    coverImage:
      "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Caregiver menyiapkan obat harian untuk lansia di rumah",
    sections: [
      {
        heading: "Jadwal obat harus bisa dibaca dalam hitungan detik",
        paragraphs: [
          "Setelah rawat inap, orang tua bisa pulang dengan beberapa obat baru. Jika jadwal hanya tersimpan di kertas resep, keluarga mudah bingung membedakan obat pagi, siang, malam, dan obat yang diminum bila perlu.",
          "Buat jadwal yang sangat sederhana: nama obat, dosis, waktu minum, dan catatan khusus seperti sebelum makan atau setelah makan. Hindari istilah yang hanya dipahami satu anggota keluarga.",
        ],
      },
      {
        heading: "Bangun rutinitas yang melekat pada aktivitas harian",
        paragraphs: [
          "Pengingat paling kuat biasanya terhubung dengan kebiasaan yang sudah ada. Misalnya obat pagi setelah sarapan, obat siang setelah makan, dan obat malam sebelum tidur.",
        ],
        bullets: [
          "Kelompokkan obat berdasarkan waktu minum, bukan berdasarkan jenis kemasan",
          "Gunakan kotak obat mingguan jika cocok untuk kondisi pasien",
          "Tempel jadwal di tempat yang mudah dilihat caregiver, bukan tempat yang hanya terlihat pasien",
          "Berikan tanda setelah obat diminum agar tidak terjadi dosis ganda",
          "Pisahkan obat lama, obat baru, dan obat yang sudah dihentikan dokter",
        ],
      },
      {
        heading: "Jangan menebak jika instruksi tidak jelas",
        paragraphs: [
          "Jika ada aturan yang membingungkan, seperti dosis berubah, obat tampak mirip, atau muncul efek samping, keluarga sebaiknya bertanya ke dokter atau apoteker. Menebak bisa membuat obat terlewat atau diminum berlebihan.",
          "Catat pertanyaan begitu muncul agar tidak lupa saat kontrol berikutnya.",
        ],
      },
      {
        heading: "Buat status obat terlihat oleh seluruh keluarga",
        paragraphs: [
          "Bila hanya satu caregiver yang tahu status obat, keluarga lain sulit membantu saat caregiver utama sibuk. Sistem bersama membuat semua orang bisa melihat apakah obat sudah diminum dan kapan perlu follow-up.",
        ],
      },
    ],
  },
  {
    slug: "7-cara-membantu-lansia-patuh-minum-obat",
    title: "7 Cara Membantu Lansia Patuh Minum Obat",
    description:
      "Strategi praktis agar lansia lebih patuh minum obat: pengingat, keluarga, komunikasi dokter, dan penyusunan jadwal yang sederhana.",
    excerpt:
      "Kepatuhan minum obat pada lansia bukan cuma soal disiplin, tapi soal sistem yang memudahkan. Ini tujuh cara yang bisa diterapkan keluarga.",
    publishedAt: "2026-04-17",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Kepatuhan Obat",
    tags: ["obat lansia", "pengingat obat", "caregiver", "kepatuhan"],
    featured: true,
    coverImage:
      "https://images.pexels.com/photos/8657369/pexels-photo-8657369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Lansia membaca label botol obat dengan bantuan tenaga kesehatan",
    sections: [
      {
        heading: "Patuh minum obat adalah proses, bukan sekadar niat",
        paragraphs: [
          "Banyak keluarga mengira masalah minum obat selesai setelah pasien diberi resep. Padahal tantangan sebenarnya muncul saat obat harus diminum tepat waktu setiap hari.",
          "Lansia bisa lupa, bingung dengan dosis, atau merasa kondisinya sudah membaik sehingga tidak perlu melanjutkan obat tertentu.",
        ],
      },
      {
        heading: "Tujuh cara yang paling realistis dilakukan keluarga",
        paragraphs: [
          "Keluarga bisa membangun kebiasaan minum obat dengan pendekatan yang ringan tapi konsisten. Fokusnya bukan kontrol berlebihan, melainkan dukungan yang memudahkan.",
        ],
        bullets: [
          "Gunakan jadwal yang sama setiap hari",
          "Pasangkan waktu minum obat dengan rutinitas yang familiar",
          "Kurangi jumlah instruksi yang membingungkan",
          "Libatkan lebih dari satu anggota keluarga dalam pemantauan",
          "Simpan obat di tempat yang mudah diakses namun aman",
          "Tanyakan ulang instruksi dokter bila ada yang tidak jelas",
          "Gunakan pengingat digital bila keluarga tidak selalu berada di rumah",
        ],
      },
      {
        heading: "Bagaimana kalau lansia menolak minum obat?",
        paragraphs: [
          "Penolakan sering terjadi karena efek samping, rasa tidak nyaman, atau kelelahan mental. Daripada memaksa, keluarga sebaiknya mencari penyebab utama dan mendiskusikannya dengan tenaga kesehatan.",
          "Pendekatan yang empatik biasanya jauh lebih efektif dibanding teguran berulang.",
        ],
      },
      {
        heading: "Dukungan keluarga membuat hasil jauh lebih stabil",
        paragraphs: [
          "Ketika keluarga bisa memantau bersama, risiko dosis terlewat menjadi lebih kecil. Sistem yang memberi visibilitas ke semua caregiver juga membantu mengurangi miskomunikasi.",
        ],
      },
    ],
  },
  {
    slug: "checklist-caregiver-setelah-orang-tua-pulang-dari-rumah-sakit",
    title: "Checklist Caregiver Setelah Orang Tua Pulang dari Rumah Sakit",
    description:
      "Checklist sederhana untuk caregiver setelah orang tua pulang dari rumah sakit: obat, kontrol, nutrisi, aktivitas, dan komunikasi keluarga.",
    excerpt:
      "Gunakan checklist ini agar keluarga tidak melewatkan hal penting di masa pemulihan pasca rawat inap.",
    publishedAt: "2026-04-16",
    readingTime: "4 min baca",
    author: "Tim PulangSehat",
    category: "Checklist Caregiver",
    tags: ["caregiver", "checklist", "pasca rawat inap", "pemulihan"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7262998/pexels-photo-7262998.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Checklist dan catatan perawatan pasien di meja rumah",
    sections: [
      {
        heading: "Checklist membantu keluarga bergerak lebih tenang",
        paragraphs: [
          "Saat pasien baru pulang dari rumah sakit, caregiver sering kewalahan karena banyak detail kecil yang harus dipikirkan sekaligus. Checklist sederhana membantu keluarga fokus pada prioritas terpenting terlebih dahulu.",
        ],
      },
      {
        heading: "Checklist utama yang perlu disiapkan",
        paragraphs: [
          "Berikut beberapa poin minimum yang sebaiknya selalu dicek oleh keluarga setelah orang tua kembali ke rumah.",
        ],
        bullets: [
          "Daftar obat dan jadwal minum sudah jelas",
          "Hasil rawat inap dan surat kontrol tersimpan rapi",
          "Asupan makan dan minum sesuai anjuran dokter",
          "Aktivitas harian menyesuaikan kondisi pasien",
          "Anggota keluarga tahu siapa yang memantau apa",
          "Ada satu tempat untuk mencatat perubahan kondisi pasien",
        ],
      },
      {
        heading: "Jangan tunggu masalah baru mulai mencatat",
        paragraphs: [
          "Kebiasaan dokumentasi sejak awal membantu keluarga mengenali pola pemulihan. Bila ada gejala baru atau efek samping, catatan ini akan sangat berguna saat berkonsultasi ke dokter.",
        ],
      },
    ],
  },
  {
    slug: "tanda-orang-tua-butuh-bantuan-pemantauan-obat",
    title: "Tanda Orang Tua Butuh Bantuan Pemantauan Obat",
    description:
      "Kenali tanda-tanda ketika orang tua mulai membutuhkan bantuan untuk memantau obat, dosis, dan jadwal minum harian.",
    excerpt:
      "Tidak semua lansia langsung meminta bantuan. Artikel ini membantu keluarga mengenali sinyal awal bahwa pemantauan obat perlu diperkuat.",
    publishedAt: "2026-04-15",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Kepatuhan Obat",
    tags: ["obat lansia", "pemantauan obat", "caregiver", "keluarga"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Caregiver menyiapkan obat harian untuk lansia di rumah",
    sections: [
      {
        heading: "Bantuan sering dibutuhkan sebelum masalah besar muncul",
        paragraphs: [
          "Banyak keluarga baru sadar ada masalah setelah obat beberapa kali terlewat. Padahal biasanya ada sinyal kecil yang muncul lebih awal, seperti kebingungan membaca resep, lupa waktu, atau stok obat yang tidak terpantau.",
          "Semakin cepat keluarga mengenali tanda ini, semakin mudah membangun sistem pemantauan yang tidak terasa memberatkan orang tua.",
        ],
      },
      {
        heading: "Tanda yang paling sering terlihat di rumah",
        paragraphs: [
          "Beberapa tanda cukup jelas, tapi sering dianggap hal biasa. Jika muncul berulang, keluarga sebaiknya mulai membantu lebih aktif.",
        ],
        bullets: [
          "Sering bingung obat mana yang harus diminum pagi atau malam",
          "Lupa apakah obat sudah diminum hari itu atau belum",
          "Resep lama dan baru tercampur tanpa pemisahan yang jelas",
          "Mulai mengandalkan ingatan saja untuk semua jadwal kontrol dan obat",
          "Anak atau caregiver menerima kabar terlambat ketika obat habis",
        ],
      },
      {
        heading: "Fokus pada sistem, bukan sekadar teguran",
        paragraphs: [
          "Jika keluarga hanya mengingatkan secara verbal, masalah biasanya berulang. Yang lebih efektif adalah membangun sistem sederhana: jadwal jelas, visibilitas bersama, dan notifikasi yang membantu caregiver dari jauh.",
        ],
      },
    ],
  },
  {
    slug: "cara-keluarga-memantau-jadwal-obat-bersama",
    title: "Cara Keluarga Memantau Jadwal Obat Bersama",
    description:
      "Panduan agar keluarga bisa memantau jadwal obat orang tua bersama-sama tanpa miskomunikasi dan tugas yang tumpang tindih.",
    excerpt:
      "Saat beberapa anggota keluarga ikut terlibat, pemantauan obat bisa jadi lebih kuat atau malah lebih membingungkan. Artikel ini membahas cara menyusunnya.",
    publishedAt: "2026-04-14",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Koordinasi Keluarga",
    tags: ["family sync", "caregiver", "jadwal obat", "koordinasi keluarga"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Keluarga dan caregiver berdiskusi tentang rutinitas perawatan lansia",
    sections: [
      {
        heading: "Masalah muncul ketika semua peduli, tapi tidak ada sistem",
        paragraphs: [
          "Dalam banyak keluarga, semua orang sebenarnya ingin membantu. Namun tanpa pembagian peran yang jelas, justru muncul pertanyaan berulang: siapa yang mengingatkan, siapa yang mengecek stok obat, dan siapa yang mencatat kondisi terbaru.",
        ],
      },
      {
        heading: "Prinsip koordinasi yang paling penting",
        paragraphs: [
          "Keluarga tidak harus punya sistem yang rumit. Yang penting adalah semua orang melihat data yang sama dan tahu siapa penanggung jawab untuk setiap hal penting.",
        ],
        bullets: [
          "Tentukan satu koordinator utama untuk jadwal obat",
          "Pastikan anggota keluarga lain bisa melihat status yang sama",
          "Gunakan format pencatatan yang singkat dan konsisten",
          "Pisahkan pengingat obat dari urusan kontrol dan logistik",
          "Lakukan review mingguan untuk melihat hambatan yang berulang",
        ],
      },
      {
        heading: "Koordinasi yang baik menurunkan beban mental caregiver",
        paragraphs: [
          "Ketika tugas dibagi dengan jelas, caregiver utama tidak merasa bekerja sendirian. Ini penting bukan hanya untuk pasien, tapi juga untuk keberlanjutan dukungan keluarga dalam jangka panjang.",
        ],
      },
    ],
  },
  {
    slug: "pertanyaan-yang-perlu-ditanyakan-saat-kontrol-pasca-rawat-inap",
    title: "Pertanyaan yang Perlu Ditanyakan Saat Kontrol Pasca Rawat Inap",
    description:
      "Daftar pertanyaan penting saat kontrol pasca rawat inap agar keluarga lebih siap memahami obat, gejala, dan langkah pemulihan berikutnya.",
    excerpt:
      "Kontrol setelah rawat inap sering berlangsung singkat. Gunakan daftar pertanyaan ini agar keluarga tidak pulang dengan kebingungan baru.",
    publishedAt: "2026-04-13",
    readingTime: "4 min baca",
    author: "Tim PulangSehat",
    category: "Pemulihan Pasca Rawat Inap",
    tags: ["kontrol dokter", "rawat inap", "caregiver", "pemulihan"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Catatan medis dan persiapan pertanyaan untuk kontrol dokter",
    sections: [
      {
        heading: "Kontrol adalah momen klarifikasi, bukan formalitas",
        paragraphs: [
          "Setelah rawat inap, banyak keluarga datang ke kontrol hanya untuk memastikan kondisi pasien membaik. Padahal sesi ini adalah kesempatan penting untuk mengklarifikasi obat, pantangan, aktivitas, dan target pemulihan selanjutnya.",
        ],
      },
      {
        heading: "Pertanyaan yang sebaiknya tidak dilewatkan",
        paragraphs: [
          "Agar konsultasi tidak berlalu begitu saja, siapkan daftar singkat pertanyaan sebelum bertemu dokter.",
        ],
        bullets: [
          "Obat mana yang harus diteruskan, dikurangi, atau dihentikan?",
          "Tanda bahaya apa yang perlu diwaspadai di rumah?",
          "Kapan pasien boleh kembali ke aktivitas tertentu?",
          "Kapan kontrol berikutnya diperlukan?",
          "Apakah ada efek samping obat yang umum dan bagaimana menyikapinya?",
        ],
      },
      {
        heading: "Catatan yang rapi membuat konsultasi lebih efektif",
        paragraphs: [
          "Jika keluarga membawa catatan kepatuhan obat dan kondisi pasien, dokter akan lebih mudah memahami perkembangan pemulihan. Karena itu, pencatatan harian tetap penting walaupun terlihat sederhana.",
        ],
      },
    ],
  },
  {
    slug: "tanda-bahaya-setelah-pulang-dari-rumah-sakit-yang-perlu-dipantau-keluarga",
    title: "Tanda Bahaya Setelah Pulang dari Rumah Sakit yang Perlu Dipantau Keluarga",
    description:
      "Panduan keluarga untuk mengenali tanda bahaya setelah pasien pulang dari rumah sakit, mulai dari demam, sesak, nyeri memburuk, sampai perubahan kesadaran.",
    excerpt:
      "Tidak semua keluhan setelah pulang harus membuat panik, tetapi beberapa tanda perlu ditangani cepat. Ini daftar sinyal yang sebaiknya dipantau caregiver.",
    publishedAt: "2026-04-12",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Pemulihan Pasca Rawat Inap",
    tags: ["tanda bahaya", "rawat inap", "caregiver", "pemulihan"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Caregiver menyiapkan catatan kesehatan untuk kontrol setelah rawat inap",
    sections: [
      {
        heading: "Pantau perubahan, bukan hanya keluhan besar",
        paragraphs: [
          "Setelah pasien pulang, keluarga sering fokus pada obat dan jadwal kontrol. Itu penting, tetapi perubahan kecil pada kondisi pasien juga perlu dicatat agar keluarga tahu kapan harus meminta bantuan.",
          "Tanda bahaya tidak selalu muncul sebagai gejala dramatis. Kadang bentuknya adalah keluhan yang makin sering, kondisi yang tidak membaik, atau perilaku yang berbeda dari biasanya.",
        ],
      },
      {
        heading: "Tanda yang perlu segera diperhatikan",
        paragraphs: [
          "Ikuti instruksi dokter sebagai acuan utama. Secara umum, keluarga sebaiknya lebih waspada bila beberapa tanda berikut muncul setelah pasien pulang.",
        ],
        bullets: [
          "Demam tinggi atau demam yang tidak membaik sesuai arahan dokter",
          "Sesak napas, nyeri dada, atau napas tampak semakin berat",
          "Nyeri yang memburuk atau tidak terkontrol dengan obat yang diberikan",
          "Luka operasi tampak makin merah, bengkak, bernanah, atau berbau",
          "Pasien tampak sangat mengantuk, bingung, atau sulit diajak berkomunikasi",
          "Muntah berulang, tidak bisa makan-minum, atau tanda dehidrasi",
        ],
      },
      {
        heading: "Catat jam kejadian dan perubahan yang terlihat",
        paragraphs: [
          "Saat menghubungi tenaga kesehatan, catatan singkat sangat membantu. Tulis kapan gejala mulai muncul, seberapa sering terjadi, obat apa yang sudah diminum, dan apakah kondisinya membaik atau memburuk.",
          "Catatan ini membuat keluarga lebih siap menjelaskan kondisi tanpa bergantung pada ingatan di situasi panik.",
        ],
      },
      {
        heading: "Jangan menunggu bila kondisi memburuk cepat",
        paragraphs: [
          "Jika kondisi pasien berubah cepat atau keluarga merasa ada tanda yang mengkhawatirkan, lebih baik segera menghubungi fasilitas kesehatan. Artikel ini bersifat edukatif dan tidak menggantikan arahan dokter yang menangani pasien.",
        ],
      },
    ],
  },
  {
    slug: "cara-membagi-tugas-caregiver-keluarga-agar-tidak-bertumpu-pada-satu-orang",
    title: "Cara Membagi Tugas Caregiver Keluarga Agar Tidak Bertumpu pada Satu Orang",
    description:
      "Panduan membagi tugas caregiver keluarga: siapa memantau obat, siapa mengurus kontrol, siapa mencatat kondisi, dan bagaimana mengurangi miskomunikasi.",
    excerpt:
      "Caregiver utama sering kelelahan karena semua hal menumpuk di satu orang. Pembagian tugas yang jelas membuat perawatan lebih ringan dan konsisten.",
    publishedAt: "2026-04-11",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Koordinasi Keluarga",
    tags: ["caregiver", "family sync", "koordinasi keluarga", "beban caregiver"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Keluarga berdiskusi membagi tugas perawatan orang tua di rumah",
    sections: [
      {
        heading: "Semua ingin membantu, tapi tugas sering tidak terlihat",
        paragraphs: [
          "Dalam perawatan orang tua, banyak tugas kecil yang mudah luput: mengingatkan obat, mengecek stok, menyiapkan transportasi kontrol, mencatat keluhan, dan memberi kabar ke anggota keluarga lain.",
          "Jika tidak dibagi jelas, tugas-tugas ini biasanya jatuh ke caregiver utama. Lama-lama, caregiver bisa merasa sendirian meskipun keluarga sebenarnya peduli.",
        ],
      },
      {
        heading: "Bagi tugas berdasarkan area, bukan berdasarkan siapa yang sempat",
        paragraphs: [
          "Cara paling sederhana adalah membagi peran berdasarkan area tanggung jawab. Dengan begitu, setiap orang tahu bagian mana yang harus dipantau.",
        ],
        bullets: [
          "Koordinator obat: memastikan jadwal, dosis, dan stok obat jelas",
          "Koordinator kontrol: mencatat jadwal dokter, transportasi, dan dokumen",
          "Koordinator harian: memantau makan, minum, tidur, aktivitas, dan keluhan",
          "Koordinator komunikasi: mengabari keluarga saat ada perubahan penting",
          "Backup caregiver: siap mengambil alih saat caregiver utama sibuk atau lelah",
        ],
      },
      {
        heading: "Gunakan satu sumber informasi bersama",
        paragraphs: [
          "Pembagian tugas tetap bisa kacau jika informasinya tersebar di banyak chat. Keluarga perlu satu tempat untuk melihat status terbaru: obat sudah diminum atau belum, kontrol berikutnya kapan, dan catatan apa yang perlu dibahas.",
        ],
      },
      {
        heading: "Review singkat setiap minggu",
        paragraphs: [
          "Luangkan waktu beberapa menit setiap minggu untuk mengecek: tugas apa yang sering terlewat, siapa yang terlalu terbebani, dan apa yang perlu disederhanakan. Perawatan yang baik bukan hanya membantu pasien, tetapi juga menjaga caregiver tetap kuat.",
        ],
      },
    ],
  },
  {
    slug: "cara-menyiapkan-rumah-agar-lebih-aman-untuk-lansia-setelah-rawat-inap",
    title: "Cara Menyiapkan Rumah Agar Lebih Aman untuk Lansia Setelah Rawat Inap",
    description:
      "Checklist sederhana menyiapkan rumah untuk lansia setelah rawat inap: jalur berjalan, kamar mandi, pencahayaan, obat, dan area istirahat.",
    excerpt:
      "Pemulihan tidak hanya soal obat. Rumah yang lebih aman membantu lansia bergerak lebih tenang dan mengurangi risiko jatuh atau kebingungan.",
    publishedAt: "2026-04-10",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Perawatan Lansia",
    tags: ["lansia", "keamanan rumah", "pemulihan", "caregiver"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Caregiver membantu lansia menjalani rutinitas pemulihan di rumah",
    sections: [
      {
        heading: "Rumah perlu disesuaikan dengan kondisi pemulihan",
        paragraphs: [
          "Setelah rawat inap, kemampuan bergerak orang tua bisa berubah sementara. Hal yang dulu terasa mudah, seperti berjalan ke kamar mandi atau mengambil minum, bisa menjadi lebih berisiko.",
          "Keluarga tidak harus merenovasi rumah besar-besaran. Mulailah dari jalur yang paling sering dilewati pasien dan area yang paling rawan seperti kamar mandi, kamar tidur, dan meja obat.",
        ],
      },
      {
        heading: "Checklist keamanan rumah",
        paragraphs: [
          "Gunakan checklist berikut untuk menilai area rumah yang perlu dirapikan sebelum rutinitas pemulihan berjalan penuh.",
        ],
        bullets: [
          "Pastikan jalur dari tempat tidur ke kamar mandi bebas kabel, karpet licin, atau barang kecil",
          "Sediakan pencahayaan cukup terutama malam hari",
          "Letakkan air minum, tisu, bel/panggilan, dan barang penting dalam jangkauan",
          "Simpan obat di tempat yang aman, rapi, dan tidak bercampur dengan obat lama",
          "Gunakan alas kaki yang tidak licin bila pasien perlu berjalan",
          "Pastikan kursi atau tempat duduk cukup stabil saat pasien bangun dan duduk",
        ],
      },
      {
        heading: "Atur area obat dan catatan harian",
        paragraphs: [
          "Buat satu area kecil untuk obat, jadwal minum, dan catatan harian. Area ini sebaiknya mudah dilihat caregiver tetapi tetap aman dari anak kecil atau orang yang tidak berkepentingan.",
        ],
      },
      {
        heading: "Perubahan kecil bisa menurunkan beban caregiver",
        paragraphs: [
          "Saat rumah lebih rapi dan alur pemantauan jelas, caregiver tidak perlu terus-menerus mengingat detail kecil. Ini membuat perawatan terasa lebih tenang untuk pasien dan keluarga.",
        ],
      },
    ],
  },
  {
    slug: "cara-mencatat-kondisi-harian-orang-tua-agar-kontrol-dokter-lebih-efektif",
    title: "Cara Mencatat Kondisi Harian Orang Tua Agar Kontrol Dokter Lebih Efektif",
    description:
      "Panduan mencatat kondisi harian lansia di rumah: keluhan, obat, makan-minum, tidur, tekanan darah, dan pertanyaan untuk dokter.",
    excerpt:
      "Kontrol dokter akan lebih fokus jika keluarga membawa catatan, bukan hanya mengandalkan ingatan. Ini format sederhana yang bisa dipakai caregiver.",
    publishedAt: "2026-04-09",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Pemulihan Pasca Rawat Inap",
    tags: ["catatan harian", "kontrol dokter", "caregiver", "laporan medis"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Catatan kondisi harian pasien untuk dibawa saat kontrol dokter",
    sections: [
      {
        heading: "Dokter membutuhkan pola, bukan potongan cerita",
        paragraphs: [
          "Saat kontrol, keluarga sering lupa detail penting: kapan keluhan muncul, obat apa yang terlewat, atau apakah nafsu makan membaik. Catatan harian membantu mengubah cerita yang tercecer menjadi pola yang lebih mudah dibaca.",
        ],
      },
      {
        heading: "Apa saja yang perlu dicatat?",
        paragraphs: [
          "Tidak perlu membuat catatan yang rumit. Fokus pada informasi yang membantu keluarga dan dokter melihat perkembangan dari hari ke hari.",
        ],
        bullets: [
          "Obat yang sudah diminum dan jika ada dosis yang terlewat",
          "Keluhan utama seperti nyeri, pusing, mual, sesak, atau sulit tidur",
          "Makan dan minum: apakah cukup, berkurang, atau ada pantangan yang sulit diikuti",
          "Aktivitas: apakah pasien bisa berjalan, duduk, mandi, atau makan mandiri",
          "Tanda vital bila diminta dokter, misalnya tekanan darah, gula darah, suhu, atau saturasi",
          "Pertanyaan keluarga yang ingin dibahas saat kontrol",
        ],
      },
      {
        heading: "Gunakan format singkat agar konsisten",
        paragraphs: [
          "Format terbaik adalah yang benar-benar dipakai. Misalnya: tanggal, obat, kondisi hari ini, keluhan, dan catatan untuk dokter. Jika terlalu panjang, caregiver akan sulit konsisten.",
        ],
      },
      {
        heading: "Bagikan catatan ke keluarga lain",
        paragraphs: [
          "Jika beberapa orang bergantian merawat, catatan harus mudah dilihat bersama. Ini mengurangi pertanyaan berulang dan membantu caregiver berikutnya langsung memahami kondisi terakhir.",
        ],
      },
    ],
  },
  {
    slug: "apa-yang-harus-dilakukan-jika-orang-tua-lupa-minum-obat",
    title: "Apa yang Harus Dilakukan Jika Orang Tua Lupa Minum Obat?",
    description:
      "Langkah aman saat lansia lupa minum obat: jangan langsung menggandakan dosis, cek instruksi, catat kejadian, dan konsultasi bila ragu.",
    excerpt:
      "Obat terlewat bisa terjadi di rumah. Yang penting, keluarga tidak panik dan tidak mengambil keputusan dosis tanpa arahan tenaga kesehatan.",
    publishedAt: "2026-04-08",
    readingTime: "4 min baca",
    author: "Tim PulangSehat",
    category: "Kepatuhan Obat",
    tags: ["obat terlewat", "obat lansia", "pengingat obat", "caregiver"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/8657369/pexels-photo-8657369.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Lansia dan caregiver memeriksa obat yang perlu diminum",
    sections: [
      {
        heading: "Jangan langsung menggandakan dosis",
        paragraphs: [
          "Saat menyadari obat terlewat, reaksi pertama keluarga kadang ingin mengejar dosis dengan menggandakan obat berikutnya. Ini bisa berbahaya untuk beberapa jenis obat.",
          "Langkah paling aman adalah membaca instruksi obat, mengecek arahan dokter atau apoteker, dan menghubungi tenaga kesehatan bila ragu.",
        ],
      },
      {
        heading: "Langkah yang bisa dilakukan keluarga",
        paragraphs: [
          "Setiap obat bisa punya aturan berbeda. Namun beberapa prinsip umum berikut membantu keluarga bertindak lebih tenang.",
        ],
        bullets: [
          "Cek obat apa yang terlewat dan jam berapa seharusnya diminum",
          "Baca catatan dokter atau label apotek terkait dosis terlewat",
          "Jangan menggandakan dosis tanpa instruksi tenaga kesehatan",
          "Catat kejadian agar bisa dibahas saat kontrol atau konsultasi",
          "Amati apakah ada keluhan setelah dosis terlewat",
          "Perbaiki sistem pengingat agar kejadian yang sama tidak berulang",
        ],
      },
      {
        heading: "Cari pola, bukan menyalahkan pasien",
        paragraphs: [
          "Jika obat sering terlewat, masalahnya mungkin bukan niat pasien. Bisa jadi jadwal terlalu rumit, label sulit dibaca, atau caregiver tidak memiliki status yang sama.",
          "Fokus pada perbaikan sistem: jadwal lebih jelas, pengingat lebih awal, dan pembagian peran keluarga.",
        ],
      },
    ],
  },
  {
    slug: "panduan-komunikasi-dengan-dokter-saat-keluarga-merawat-lansia-di-rumah",
    title: "Panduan Komunikasi dengan Dokter Saat Keluarga Merawat Lansia di Rumah",
    description:
      "Tips agar keluarga lebih siap berkomunikasi dengan dokter: membawa catatan, menyusun pertanyaan, menjelaskan gejala, dan memahami instruksi pulang.",
    excerpt:
      "Komunikasi yang jelas dengan dokter membantu keluarga mengambil keputusan lebih tenang selama masa pemulihan di rumah.",
    publishedAt: "2026-04-07",
    readingTime: "5 min baca",
    author: "Tim PulangSehat",
    category: "Pemulihan Pasca Rawat Inap",
    tags: ["komunikasi dokter", "kontrol dokter", "caregiver", "lansia"],
    featured: false,
    coverImage:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coverImageAlt: "Keluarga menyiapkan catatan untuk komunikasi dengan dokter",
    sections: [
      {
        heading: "Kontrol terasa singkat jika tidak disiapkan",
        paragraphs: [
          "Banyak keluarga baru teringat pertanyaan penting setelah keluar dari ruang praktik. Karena waktu konsultasi terbatas, persiapan sebelum kontrol sangat membantu.",
          "Tujuan komunikasi bukan hanya mendapatkan jawaban, tetapi memastikan keluarga paham apa yang harus dilakukan di rumah.",
        ],
      },
      {
        heading: "Bawa tiga jenis informasi",
        paragraphs: [
          "Agar diskusi lebih fokus, siapkan informasi yang ringkas dan konkret. Dokter akan lebih mudah membantu jika keluarga menjelaskan data yang jelas.",
        ],
        bullets: [
          "Daftar obat yang sedang diminum, termasuk dosis dan waktu minum",
          "Catatan keluhan: kapan muncul, seberapa sering, dan apa pemicunya",
          "Pertanyaan keluarga: obat, aktivitas, makanan, kontrol berikutnya, dan tanda bahaya",
        ],
      },
      {
        heading: "Ulangi instruksi dengan bahasa sendiri",
        paragraphs: [
          "Sebelum pulang, coba ulangi instruksi dokter dengan bahasa keluarga sendiri. Misalnya: obat A diminum pagi setelah makan, kontrol dua minggu lagi, dan segera hubungi rumah sakit jika muncul sesak.",
          "Cara ini membantu memastikan tidak ada instruksi yang salah tangkap.",
        ],
      },
      {
        heading: "Simpan jawaban agar caregiver lain ikut paham",
        paragraphs: [
          "Setelah kontrol, ringkas jawaban dokter dan bagikan ke anggota keluarga yang ikut merawat. Ini mengurangi miskomunikasi dan membantu semua caregiver mengikuti arahan yang sama.",
        ],
      },
    ],
  },
];

export function getLocalAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getLocalFeaturedBlogPosts() {
  return getLocalAllBlogPosts().filter((post) => post.featured);
}

export function getLocalBlogPostBySlug(slug: string) {
  return getLocalAllBlogPosts().find((post) => post.slug === slug);
}

export function getLocalAllBlogSlugs() {
  return getLocalAllBlogPosts().map((post) => post.slug);
}

export function getLocalAllBlogCategories() {
  return Array.from(new Set(getLocalAllBlogPosts().map((post) => post.category))).sort();
}

export function getCategorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function getLocalCategoryBySlug(slug: string) {
  return getLocalAllBlogCategories().find((category) => getCategorySlug(category) === slug);
}

export function getLocalBlogPostsByCategory(category: string) {
  return getLocalAllBlogPosts().filter((post) => post.category === category);
}
