"use client";

import { useRef, useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchPageClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const q = query.toLowerCase();
    setResults(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative max-w-xl mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, brand, or category..."
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
          />
        </div>

        <p className="text-gray-400 mb-6">
          {results.length} result{results.length !== 1 ? "s" : ""} for
          &ldquo;{query || "all watches"}&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No watches found</p>
            <p className="text-gray-600 text-sm mt-1">
              Try a different search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
