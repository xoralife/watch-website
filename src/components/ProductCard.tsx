"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Star,
  Clock,
  Shield,
  Truck,
} from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "./CartProvider";
import { useState } from "react";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.07]"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
              product.badge === "Best Seller"
                ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                : product.badge === "Limited"
                ? "bg-accent-500/20 text-accent-300 border border-accent-500/30"
                : product.badge === "Premium"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-green-500/20 text-green-300 border border-green-500/30"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20">
        <Heart className="w-4 h-4 text-white" />
      </button>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-luxury-800">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-1">
              {product.brand}
            </p>
            <Link href={`/products/${product.id}`}>
              <h3 className="font-serif font-semibold text-lg text-white group-hover:text-primary-300 transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary-400">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => addItem(product)}
          className="w-full py-3 bg-white/10 hover:bg-primary-600/30 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 border border-white/10 hover:border-primary-500/30 group"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
