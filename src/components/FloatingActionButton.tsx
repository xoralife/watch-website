"use client";

import { motion } from "framer-motion";

export default function FloatingActionButton({
  onClick,
  icon,
  label,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-3 glass rounded-full hover:bg-white/20 transition-all shadow-2xl"
    >
      {icon}
      <span className="text-sm font-medium hidden sm:inline">{label}</span>
    </motion.button>
  );
}
