import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/components/CartProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LUXE | Premium Timepieces",
  description:
    "Discover our curated collection of luxury watches. From Swiss chronographs to smart timepieces, find your perfect match.",
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
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
