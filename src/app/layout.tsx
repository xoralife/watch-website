import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/components/CartProvider";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    template: "%s | LUXE Premium Timepieces",
    default: "LUXE | Premium Timepieces",
  },
  description:
    "Discover our curated collection of luxury watches. From Swiss chronographs to smart timepieces, find your perfect match. Free worldwide shipping & 2-year warranty.",
  keywords: [
    "luxury watches",
    "premium timepieces",
    "Swiss watches",
    "chronograph",
    "automatic watches",
    "watch store",
  ],
  authors: [{ name: "LUXE" }],
  openGraph: {
    title: "LUXE | Premium Timepieces",
    description:
      "Discover our curated collection of luxury watches. Free worldwide shipping & 2-year warranty.",
    url: "https://luxe-watches.com",
    siteName: "LUXE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXE | Premium Timepieces",
    description:
      "Discover our curated collection of luxury watches. Free worldwide shipping & 2-year warranty.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
