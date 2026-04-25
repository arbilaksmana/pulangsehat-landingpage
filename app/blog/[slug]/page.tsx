import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackedBlogLink from "@/components/blog/TrackedBlogLink";
import TrackedExternalLink from "@/components/blog/TrackedExternalLink";
import { CTA_LINKS } from "@/lib/tracking";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug, getCategorySlug } from "@/lib/blog";

const siteUrl = "https://pulangsehat.com";
export const revalidate = 300;

function getAbsoluteImageUrl(imageUrl: string) {
  return imageUrl.startsWith("http") ? imageUrl : `${siteUrl}${imageUrl}`;
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (await getAllBlogSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel tidak ditemukan | PulangSehat",
    };
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Blog PulangSehat`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getAllBlogPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PulangSehat",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/logo.png`,
      },
    },
    image: getAbsoluteImageUrl(post.coverImage),
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 pt-28 sm:pt-32 lg:pt-40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <article className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-14">
            <TrackedBlogLink
              href="/blog"
              trackingEvent="blog_article_back_to_index"
              trackingDestination="/blog"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              ← Kembali ke Blog
            </TrackedBlogLink>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-primary/5 px-3 py-1 font-medium text-primary">
                <TrackedBlogLink
                  href={`/blog/category/${getCategorySlug(post.category)}`}
                  trackingEvent="blog_article_card_click"
                  trackingDestination={`/blog/category/${getCategorySlug(post.category)}`}
                  className="hover:text-primary-dark"
                >
                  {post.category}
                </TrackedBlogLink>
              </span>
              <span>Estimasi {post.readingTime}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString("id-ID")}</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{post.description}</p>
            {post.tags.length ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt}
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-12 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 text-base leading-8 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="space-y-3 rounded-[1.5rem] bg-slate-50 p-6 text-base leading-7 text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-primary px-8 py-8 text-white sm:px-10">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-right-center opacity-40"
                style={{ backgroundImage: "url('/assets/cta2.jpg')" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/72" />
              <div className="relative max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Ingin ikut membentuk PulangSehat sejak tahap awal?
                </h2>
                <p className="text-base leading-8 text-white/80">
                  Daftar sebagai early adopter untuk mencoba prototype PulangSehat dan bantu kami menyusun
                  pengalaman caregiver yang lebih relevan.
                </p>
                <div>
                  <TrackedExternalLink
                    href={CTA_LINKS.earlyAccessInternal}
                    target="_blank"
                    rel="noopener noreferrer"
                    trackingEvent="blog_article_early_access_click"
                    trackingDestination={CTA_LINKS.earlyAccess}
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90"
                  >
                    Gabung Early Access
                  </TrackedExternalLink>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Artikel terkait</h2>
              <TrackedBlogLink
                href="/blog"
                trackingEvent="blog_article_back_to_index"
                trackingDestination="/blog"
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Lihat semua artikel
              </TrackedBlogLink>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="rounded-[1.5rem] border border-slate-200 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900">
                    <TrackedBlogLink
                      href={`/blog/${relatedPost.slug}`}
                      trackingEvent="blog_related_article_click"
                      trackingDestination={`/blog/${relatedPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedPost.title}
                    </TrackedBlogLink>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{relatedPost.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
