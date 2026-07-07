"use client";

import { motion } from "framer-motion";

export default function ColorSwatch({
  colors,
  selected,
  onChange,
}: {
  colors: string[];
  selected: string;
  onChange: (color: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {colors.map((color) => (
        <motion.button
          key={color}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onChange(color)}
          className={`w-7 h-7 rounded-full border-2 transition-all ${
            selected === color
              ? "border-primary-400 scale-110"
              : "border-white/10"
          }`}
          style={{ backgroundColor: color }}
          title={color}
        />
      ))}
    </div>
  );
}
