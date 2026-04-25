"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
          Terjadi kendala
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Halaman belum bisa dimuat
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Maaf, ada masalah sementara saat memuat konten PulangSehat. Coba muat ulang halaman ini.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Coba Lagi
        </button>
      </div>
    </main>
  );
}
