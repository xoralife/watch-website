"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function RecentlyViewed() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentlyViewed");
    if (stored) {
      try {
        setIds(JSON.parse(stored));
      } catch {}
    }
  }, []);

  const recentProducts = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8"
        >
          <Clock className="w-5 h-5 text-primary-400" />
          <h2 className="text-xl font-serif font-semibold">Recently Viewed</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((p, i) => (
            <ProductCard key={p!.id} product={p!} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
