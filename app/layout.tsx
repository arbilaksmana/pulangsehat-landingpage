import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import AgentationMount from "@/components/agentation/AgentationMount";
import FreeAnalytics from "@/components/analytics/FreeAnalytics";
import "./globals.css";
import "lineicons/dist/lineicons.css";

const siteUrl = "https://pulangsehat.com";
const socialImage = "/assets/cta.jpg";
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PulangSehat - Rawat Orang Tua Tanpa Cemas",
  description:
    "Asisten digital pemulihan pasca-rawat inap. Scan label obat dengan AI, atur jadwal otomatis, dan pantau kepatuhan minum obat orang tua secara real-time bersama keluarga.",
  keywords: [
    "PulangSehat",
    "pemulihan pasca rawat inap",
    "obat lansia",
    "perawatan orang tua",
    "pengingat minum obat",
    "aplikasi kesehatan",
    "sandwich generation",
  ],
  authors: [{ name: "PulangSehat Team" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon1.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "PulangSehat - Rawat Orang Tua Tanpa Cemas",
    description:
      "Asisten digital pemulihan pasca-rawat inap. Pantau kepatuhan minum obat orang tua secara real-time.",
    url: siteUrl,
    siteName: "PulangSehat",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "PulangSehat membantu keluarga memantau obat dan pemulihan orang tua.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulangSehat - Rawat Orang Tua Tanpa Cemas",
    description:
      "Pantau jadwal obat, kondisi, dan pemulihan orang tua secara real-time bersama keluarga.",
    images: [socialImage],
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {clarityProjectId ? (
          <Script id="microsoft-clarity" strategy="beforeInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");`}
          </Script>
        ) : null}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-xl focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          Lewati ke konten utama
        </a>
        <FreeAnalytics />
        <AgentationMount />
        {children}
      </body>
    </html>
  );
}
