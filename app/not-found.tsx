import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
          404
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Link yang Anda buka mungkin sudah berubah atau belum tersedia. Kembali ke halaman utama untuk melihat fitur dan panduan PulangSehat.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-primary/20 hover:text-primary"
          >
            Baca Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
