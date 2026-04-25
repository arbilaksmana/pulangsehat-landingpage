import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackedBlogLink from "@/components/blog/TrackedBlogLink";
import { getAllBlogCategories, getAllBlogPosts, getCategorySlug, getFeaturedBlogPosts } from "@/lib/blog";

const siteUrl = "https://pulangsehat.com";
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog PulangSehat | Tips Caregiver, Lansia, dan Pemulihan",
  description:
    "Artikel PulangSehat untuk caregiver dan keluarga: tips merawat orang tua setelah rawat inap, meningkatkan kepatuhan obat, dan membangun pemantauan yang lebih tenang.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog PulangSehat",
    description:
      "Insight praktis tentang caregiver, pemulihan pasca rawat inap, dan kepatuhan obat lansia.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/assets/cta.jpg",
        width: 1200,
        height: 630,
        alt: "Blog PulangSehat untuk caregiver dan keluarga Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog PulangSehat",
    description:
      "Tips caregiver, obat lansia, dan pemulihan pasca rawat inap untuk keluarga Indonesia.",
    images: ["/assets/cta.jpg"],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const [featuredPost] = await getFeaturedBlogPosts();
  const categories = await getAllBlogCategories();
  const visiblePosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts;

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-primary/[0.08] to-transparent mix-blend-multiply" />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"
              style={{
                backgroundSize: "4rem 4rem",
                maskImage: "radial-gradient(100% 80% at 50% 10%, black 20%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(100% 80% at 50% 10%, black 20%, transparent 100%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40">
            <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
              Blog PulangSehat
            </span>
            <div className="mt-6 max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Panduan praktis untuk merawat orang tua setelah pulang dari rumah sakit.
              </h1>
              <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                Temukan insight tentang pemulihan pasca rawat inap, jadwal minum obat, dan koordinasi keluarga
                agar caregiver bisa bergerak lebih yakin dari hari pertama di rumah.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-10 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <TrackedBlogLink
                key={category}
                href={`/blog/category/${getCategorySlug(category)}`}
                trackingEvent="blog_article_card_click"
                trackingDestination={`/blog/category/${getCategorySlug(category)}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-primary/20 hover:text-primary"
              >
                {category}
              </TrackedBlogLink>
            ))}
          </div>

          {featuredPost ? (
            <article className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] lg:min-h-full">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 sm:px-10 lg:px-12">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span className="max-w-full rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                    <TrackedBlogLink
                      href={`/blog/category/${getCategorySlug(featuredPost.category)}`}
                      trackingEvent="blog_article_card_click"
                      trackingDestination={`/blog/category/${getCategorySlug(featuredPost.category)}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featuredPost.category}
                    </TrackedBlogLink>
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-500 ring-1 ring-slate-200">
                    {featuredPost.readingTime}
                  </span>
                  <span className="text-slate-400">{new Date(featuredPost.publishedAt).toLocaleDateString("id-ID")}</span>
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{featuredPost.excerpt}</p>
                {featuredPost.tags.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="mt-8">
                  <TrackedBlogLink
                    href={`/blog/${featuredPost.slug}`}
                    trackingEvent="blog_featured_article_click"
                    trackingDestination={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Baca Artikel Utama
                  </TrackedBlogLink>
                </div>
              </div>
            </article>
          ) : null}

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-0 flex flex-wrap items-center gap-2">
                    <TrackedBlogLink
                      href={`/blog/category/${getCategorySlug(post.category)}`}
                      trackingEvent="blog_article_card_click"
                      trackingDestination={`/blog/category/${getCategorySlug(post.category)}`}
                      className="line-clamp-2 rounded-full bg-primary/5 px-3 py-1 text-[0.68rem] font-bold uppercase leading-5 tracking-[0.16em] text-primary transition-colors hover:bg-primary/10"
                    >
                      {post.category}
                    </TrackedBlogLink>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-900">
                    <TrackedBlogLink
                      href={`/blog/${post.slug}`}
                      trackingEvent="blog_article_card_click"
                      trackingDestination={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </TrackedBlogLink>
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{post.description}</p>
                  {post.tags.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm text-slate-500">
                    <span>{new Date(post.publishedAt).toLocaleDateString("id-ID")}</span>
                    <TrackedBlogLink
                      href={`/blog/${post.slug}`}
                      trackingEvent="blog_article_read_more_click"
                      trackingDestination={`/blog/${post.slug}`}
                      className="font-semibold text-primary hover:text-primary-dark"
                    >
                      Baca selengkapnya
                    </TrackedBlogLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
