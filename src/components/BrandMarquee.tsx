"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Rolex", tier: "Luxury" },
  { name: "Omega", tier: "Luxury" },
  { name: "Tag Heuer", tier: "Premium" },
  { name: "Breitling", tier: "Luxury" },
  { name: "Seiko", tier: "Premium" },
  { name: "Citizen", tier: "Premium" },
  { name: "Longines", tier: "Luxury" },
  { name: "Tissot", tier: "Premium" },
];

export default function BrandMarquee() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="mb-8 text-center">
        <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
          Brands We Carry
        </span>
      </div>
      <div className="flex gap-16 animate-marquee" style={{ animationDuration: "30s" }}>
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 min-w-[120px]"
          >
            <span className="text-lg font-serif font-bold text-gray-300 whitespace-nowrap">
              {brand.name}
            </span>
            <span className="text-xs text-gray-600">{brand.tier}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
