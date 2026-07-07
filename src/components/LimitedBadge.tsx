"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LimitedBadge({ count }: { count?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-500/20 border border-accent-500/30 rounded-full text-xs text-accent-300 font-semibold"
    >
      <Sparkles className="w-3 h-3" />
      Limited Edition
      {count && <span className="text-accent-400">• Only {count} left</span>}
    </motion.div>
  );
}
