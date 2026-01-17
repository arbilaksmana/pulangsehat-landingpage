import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "PulangSehat - Rawat Orang Tua Tanpa Cemas",
    description:
      "Asisten digital pemulihan pasca-rawat inap. Pantau kepatuhan minum obat orang tua secara real-time.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
