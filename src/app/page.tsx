"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BrandShowcase from "@/components/BrandShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import PaymentMethods from "@/components/PaymentMethods";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BrandShowcase />
      <FeaturedProducts />
      <Stats />
      <Testimonials />
      <Newsletter />
      <PaymentMethods />
    </>
  );
}
