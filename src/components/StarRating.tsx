"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function StarRating({
  rating,
  size = "sm",
  interactive = false,
  onChange,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (rating: number) => void;
}) {
  const s = size === "sm" ? "w-3.5 h-3.5" : size === "md" ? "w-5 h-5" : "w-7 h-7";

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          whileHover={interactive ? { scale: 1.2 } : undefined}
          whileTap={interactive ? { scale: 0.9 } : undefined}
          onClick={() => interactive && onChange?.(star)}
          type="button"
          className={interactive ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            className={`${s} ${
              star <= rating
                ? "text-amber-400 fill-amber-400"
                : "text-gray-600"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
}
