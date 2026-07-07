"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 glass rounded-lg flex items-center justify-center text-sm font-medium hover:bg-white/20 transition-all"
      >
        −
      </motion.button>
      <span className="w-10 text-center text-sm font-medium">{value}</span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 glass rounded-lg flex items-center justify-center text-sm font-medium hover:bg-white/20 transition-all"
      >
        +
      </motion.button>
    </div>
  );
}
