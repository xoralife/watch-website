"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  {
    name: "Horizon",
    tagline: "Swiss Precision Since 1886",
    description:
      "Master chronograph manufacturers known for pushing the boundaries of mechanical watchmaking.",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
  },
  {
    name: "Vanguard",
    tagline: "Modern Innovation",
    description:
      "Where cutting-edge technology meets luxury design. Pioneers of smart luxury timepieces.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
  },
  {
    name: "Heritage",
    tagline: "Timeless Elegance",
    description:
      "Guardians of traditional watchmaking arts. Each piece tells a story of centuries-old craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
  },
];

export default function BrandShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-accent-900/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
            Our Brands
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Crafted by <span className="text-gradient">Legends</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative glass rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif font-bold mb-1">
                  {brand.name}
                </h3>
                <p className="text-sm text-primary-400 mb-2">{brand.tagline}</p>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
