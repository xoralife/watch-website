"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageLightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[80] flex items-center justify-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((p) => (p - 1 + images.length) % images.length);
          }}
          className="absolute left-4 sm:left-8 p-2 text-white/60 hover:text-white transition-colors z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <motion.img
          key={current}
          src={images[current]}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((p) => (p + 1) % images.length);
          }}
          className="absolute right-4 sm:right-8 p-2 text-white/60 hover:text-white transition-colors z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
