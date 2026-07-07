"use client";

import { motion } from "framer-motion";

const MIN = 0;
const MAX = 6000;

export default function PriceRangeFilter({
  min,
  max,
  onChange,
}: {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}) {
  const leftPercent = (min / MAX) * 100;
  const rightPercent = (max / MAX) * 100;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-gray-300">Price Range</h4>
      <div className="relative h-2 bg-luxury-700 rounded-full">
        <motion.div
          className="absolute h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          style={{ left: `${leftPercent}%`, width: `${rightPercent - leftPercent}%` }}
          layout
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">${min.toLocaleString()}</span>
        <span className="text-gray-400">${max.toLocaleString()}</span>
      </div>
      <div className="flex gap-3">
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={min}
          onChange={(e) => onChange(Math.min(Number(e.target.value), max), max)}
          className="w-full accent-primary-500"
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={max}
          onChange={(e) => onChange(min, Math.max(Number(e.target.value), min))}
          className="w-full accent-primary-500"
        />
      </div>
    </div>
  );
}
