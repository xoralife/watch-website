"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8 sm:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-primary-400/30 mx-auto mb-6" />
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonials[current].rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-14 h-14 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-lg">
                {testimonials[current].name}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full glass hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary-400 w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full glass hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
