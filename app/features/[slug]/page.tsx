import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackedBlogLink from "@/components/blog/TrackedBlogLink";
import TrackedExternalLink from "@/components/blog/TrackedExternalLink";
import CheckUpReminderInteractiveDemo from "@/components/features/CheckUpReminderInteractiveDemo";
import FamilySyncInteractiveDemo from "@/components/features/FamilySyncInteractiveDemo";
import ScanToPlanInteractiveDemo from "@/components/features/ScanToPlanInteractiveDemo";
import SmartMedicalReportInteractiveDemo from "@/components/features/SmartMedicalReportInteractiveDemo";
import { CTA_LINKS } from "@/lib/tracking";
import { featureDetails, getAllFeatureSlugs, getFeatureBySlug } from "@/lib/features";

const siteUrl = "https://pulangsehat.com";

type FeaturePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {};
  }

  return {
    title: `${feature.title} | Fitur PulangSehat`,
    description: feature.description,
    alternates: {
      canonical: `/features/${feature.slug}`,
    },
    openGraph: {
      title: `${feature.title} | PulangSehat`,
      description: feature.description,
      url: `${siteUrl}/features/${feature.slug}`,
      type: "article",
      images: [
        {
          url: feature.image,
          width: 1200,
          height: 630,
          alt: feature.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${feature.title} | PulangSehat`,
      description: feature.description,
      images: [feature.image],
    },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  const relatedFeatures = featureDetails.filter((item) => item.slug !== feature.slug).slice(0, 3);

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
          <div className="relative mx-auto max-w-7xl px-4 pb-18 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
            <TrackedBlogLink
              href="/#fitur"
              trackingEvent="blog_article_back_to_index"
              trackingDestination="/#fitur"
              className="inline-flex text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
            >
              ← Kembali ke fitur
            </TrackedBlogLink>
            <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
              <div className="max-w-3xl space-y-6">
                <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
                  {feature.eyebrow}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {feature.title}
                </h1>
                <p className="text-lg leading-8 text-slate-600 sm:text-xl">{feature.heroDescription}</p>
                <div className="flex flex-wrap gap-3">
                  <TrackedExternalLink
                    href={CTA_LINKS.earlyAccessInternal}
                    target="_blank"
                    rel="noopener noreferrer"
                    trackingEvent="blog_article_early_access_click"
                    trackingDestination={CTA_LINKS.earlyAccess}
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Coba Sebagai Early Adopter
                  </TrackedExternalLink>
                </div>
              </div>

              {feature.slug === "scan-to-plan" ? (
                <ScanToPlanInteractiveDemo />
              ) : feature.slug === "family-sync" ? (
                <FamilySyncInteractiveDemo />
              ) : feature.slug === "check-up-reminder" ? (
                <CheckUpReminderInteractiveDemo />
              ) : feature.slug === "smart-medical-report" ? (
                <SmartMedicalReportInteractiveDemo />
              ) : (
                <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-4 shadow-sm">
                  <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={1200}
                      height={900}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Mengapa fitur ini penting?</h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  {feature.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Bagaimana cara kerjanya?</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {feature.howItWorks.map((step, index) => (
                    <div key={step.title} className="rounded-[1.5rem] bg-slate-50 p-6">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Manfaat utama</h2>
                <ul className="mt-6 space-y-4">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Cocok untuk situasi seperti ini</h2>
                <ul className="mt-6 space-y-4">
                  {feature.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Fitur lain yang saling melengkapi</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  PulangSehat dirancang sebagai alur yang saling terhubung, bukan fitur yang berdiri sendiri.
                </p>
              </div>
              <TrackedBlogLink
                href="/#fitur"
                trackingEvent="blog_article_back_to_index"
                trackingDestination="/#fitur"
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Lihat semua fitur
              </TrackedBlogLink>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedFeatures.map((relatedFeature) => (
                <article key={relatedFeature.slug} className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {relatedFeature.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-900">{relatedFeature.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{relatedFeature.description}</p>
                  <TrackedBlogLink
                    href={`/features/${relatedFeature.slug}`}
                    trackingEvent="blog_related_article_click"
                    trackingDestination={`/features/${relatedFeature.slug}`}
                    className="mt-auto inline-flex pt-6 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    Pelajari fitur ini
                  </TrackedBlogLink>
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
