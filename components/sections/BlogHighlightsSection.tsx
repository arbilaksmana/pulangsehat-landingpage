import Image from "next/image";
import TrackedBlogLink from "@/components/blog/TrackedBlogLink";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blog";

export default async function BlogHighlightsSection() {
  const posts = await getAllBlogPosts();
  const featuredPosts = await getFeaturedBlogPosts();
  const highlightedPosts = featuredPosts.length
    ? featuredPosts.slice(0, 3)
    : posts.slice(0, 3);

  return (
    <section id="blog" className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
              Insight untuk Caregiver
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Panduan praktis untuk keluarga yang ingin merawat orang tua dengan lebih tenang.
              </h2>
              <p className="text-lg leading-8 text-slate-600">
              Baca artikel tentang pemulihan pasca rawat inap, kepatuhan minum obat, dan koordinasi keluarga
              agar Anda langsung memahami masalah yang ingin diselesaikan PulangSehat.
              </p>
            </div>

          <TrackedBlogLink
            href="/blog"
            trackingEvent="blog_article_back_to_index"
            trackingDestination="/blog"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Baca Semua Artikel
          </TrackedBlogLink>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlightedPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  <span>{post.category}</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900">
                  <TrackedBlogLink
                    href={`/blog/${post.slug}`}
                    trackingEvent="blog_article_card_click"
                    trackingDestination={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </TrackedBlogLink>
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-6">
                  <TrackedBlogLink
                    href={`/blog/${post.slug}`}
                    trackingEvent="blog_article_read_more_click"
                    trackingDestination={`/blog/${post.slug}`}
                    className="font-semibold text-primary hover:text-primary-dark"
                  >
                    Baca artikelnya
                  </TrackedBlogLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
