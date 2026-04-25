# PulangSehat Landing Page

Landing page modern untuk **PulangSehat** — asisten digital pemulihan pasca-rawat inap yang membantu keluarga memantau jadwal obat, kondisi harian, kontrol dokter, dan koordinasi caregiver.

![PulangSehat Hero](public/assets/Mockup%20Home.png)

## Tentang Proyek

PulangSehat membantu pasien lansia dan keluarga mengurangi kebingungan setelah pulang dari rumah sakit. Website ini dirancang untuk:

- Mengedukasi keluarga tentang kepatuhan obat dan pemulihan pasca-rawat inap.
- Menjelaskan fitur utama PulangSehat dengan landing page interaktif.
- Mengumpulkan early adopter dan peserta user testing prototype.
- Menyediakan blog caregiver berbasis Notion CMS dengan fallback lokal.

## Teknologi

- **Next.js 16** dengan App Router, SSG/ISR, metadata routes, dan API route redirect early access.
- **React 19** dan **TypeScript**.
- **Tailwind CSS 4** untuk styling responsif.
- **Framer Motion** untuk animasi UI.
- **Lucide React** untuk ikon SVG.
- **Notion API** untuk CMS blog.
- **Microsoft Clarity**, **Google Analytics 4**, **Google Search Console**, dan **Vercel Analytics/Speed Insights** untuk analytics gratis.

## Struktur Utama

- `app/page.tsx` — landing page utama.
- `app/blog/*` — blog listing, kategori, dan detail artikel.
- `app/features/[slug]/page.tsx` — halaman detail fitur.
- `app/api/early-access/route.ts` — redirect internal ke form early access.
- `components/sections/` — hero, problem, feature, cara kerja, blog highlight, CTA.
- `components/features/` — demo interaktif DOM/Framer Motion untuk fitur.
- `lib/blog.ts` dan `lib/blog-local.ts` — adapter Notion + fallback konten lokal.
- `lib/features.ts` — data halaman fitur.
- `lib/tracking.ts` — katalog event tracking.

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Environment Variables

Salin `.env.example` ke `.env` lalu isi nilai yang diperlukan.

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_EARLY_ACCESS_URL=https://forms.gle/BDHUEGQA83ZTkpd37
NEXT_PUBLIC_ENABLE_AGENTATION=false
NEXT_PUBLIC_AGENTATION_ENDPOINT=http://localhost:4747

NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATA_SOURCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Catatan:

- `NEXT_PUBLIC_ENABLE_AGENTATION=true` hanya untuk review lokal dengan Agentation.
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` diisi dari Microsoft Clarity project.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` diisi dengan format `G-XXXXXXXXXX` dari GA4.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` opsional jika memakai verifikasi Search Console via meta tag; verifikasi DNS domain property tetap lebih direkomendasikan.
- Jika `NOTION_API_KEY` atau data source tidak tersedia, blog memakai fallback lokal.

## Validasi

```bash
npm run lint
npm run build
```

CI GitHub Actions menjalankan `npm ci`, `npm run lint`, dan `npm run build` pada push/PR ke `main`.

## Deployment

Pastikan environment production mengisi minimal:

- `NEXT_PUBLIC_EARLY_ACCESS_URL`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NOTION_API_KEY`
- `NOTION_DATA_SOURCE_ID`

Untuk Vercel, aktifkan juga **Web Analytics** dan **Speed Insights** dari dashboard project. Domain production canonical project ini adalah `https://pulangsehat.com`.

Setelah deploy, verifikasi:

- `/`
- `/blog`
- `/features/scan-to-plan`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`
