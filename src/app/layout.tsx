import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETIA怡天科技 | 工业特种标签与UV光固化解决方案",
  description: "20年工业应用经验，为电子、汽车、医疗、新能源、光通信提供工业特种标签、条码追溯和UV光固化设备与工艺支持",
  keywords: "耐高温标签,UV固化,OmniCure,工业标签,UV点光源,PCB标签,医疗标签",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
