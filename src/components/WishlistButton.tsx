"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function WishlistButton({
  isWishlisted,
  onClick,
}: {
  isWishlisted: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="p-2 rounded-full glass hover:bg-white/20 transition-all"
    >
      <Heart
        className={`w-5 h-5 transition-colors ${
          isWishlisted
            ? "fill-red-500 text-red-500"
            : "text-gray-400"
        }`}
      />
    </motion.button>
  );
}
