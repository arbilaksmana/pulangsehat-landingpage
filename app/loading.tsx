export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="h-8 w-40 animate-pulse rounded-full bg-slate-200" />
        <div className="h-14 max-w-3xl animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-6 max-w-2xl animate-pulse rounded-full bg-slate-200" />
        <div className="grid gap-6 pt-8 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-72 animate-pulse rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200" />
          ))}
        </div>
      </div>
    </main>
  );
}
