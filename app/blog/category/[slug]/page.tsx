import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackedBlogLink from "@/components/blog/TrackedBlogLink";
import {
  getAllBlogCategories,
  getBlogPostsByCategory,
  getCategoryBySlug,
  getCategorySlug,
} from "@/lib/blog";

const siteUrl = "https://pulangsehat.com";
export const revalidate = 300;

type BlogCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (await getAllBlogCategories()).map((category) => ({ slug: getCategorySlug(category) }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Kategori Blog | PulangSehat",
    };
  }

  return {
    title: `${category} | Blog PulangSehat`,
    description: `Jelajahi artikel kategori ${category} di Blog PulangSehat untuk caregiver, keluarga, dan pemulihan lansia.`,
    alternates: {
      canonical: `/blog/category/${slug}`,
    },
    openGraph: {
      title: `${category} | Blog PulangSehat`,
      description: `Artikel kategori ${category} untuk caregiver dan keluarga Indonesia.`,
      url: `${siteUrl}/blog/category/${slug}`,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getBlogPostsByCategory(category);

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-18 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
            <TrackedBlogLink
              href="/blog"
              trackingEvent="blog_article_back_to_index"
              trackingDestination="/blog"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              ← Kembali ke Blog
            </TrackedBlogLink>
            <div className="mt-6 max-w-3xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{category}</h1>
              <p className="text-lg leading-8 text-slate-600">
                Artikel yang membahas {category.toLowerCase()} untuk membantu keluarga merawat orang tua dengan
                sistem yang lebih tenang dan terkoordinasi.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
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
                  <div className="flex min-h-[5.5rem] flex-col items-start gap-3">
                    <span className="line-clamp-2 rounded-full bg-primary/5 px-3 py-1 text-[0.68rem] font-bold uppercase leading-5 tracking-[0.16em] text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>{post.readingTime}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{new Date(post.publishedAt).toLocaleDateString("id-ID")}</span>
                    </div>
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
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{post.description}</p>
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
                  <div className="mt-auto flex items-center justify-end pt-6 text-sm text-slate-500">
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
