"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, brands } from "@/data/products";
import ProductCard from "./ProductCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products
    .filter(
      (p) =>
        (activeCategory === "All" || p.category === activeCategory) &&
        (activeBrand === "All" || p.brand === activeBrand) &&
        (p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    });

  return (
    <section className="py-24 relative" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
            Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Featured <span className="text-gradient">Timepieces</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Each watch in our collection is selected for its exceptional
            craftsmanship and timeless design.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search watches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 focus:outline-none focus:border-primary-500/50 transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                    : "glass text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No watches found</p>
            <p className="text-gray-600 text-sm mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
