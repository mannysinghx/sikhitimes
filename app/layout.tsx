import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SikhiTimes — Neutral Sikh News & Information",
    template: "%s | SikhiTimes",
  },
  description:
    "SikhiTimes is a neutral, research-based Sikh information platform covering Punjab & Sikh world news, Sikh Gurus, history, Hukumnama, community, and more.",
  keywords: ["Sikh", "Sikhism", "Punjab", "Golden Temple", "Guru Granth Sahib", "Hukumnama", "Khalsa"],
  openGraph: {
    siteName: "SikhiTimes",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
