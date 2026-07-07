"use client";

import { motion } from "framer-motion";
import { Link2, Facebook, Twitter } from "lucide-react";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">Share:</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")}
        className="p-2 glass rounded-lg hover:bg-white/20 transition-all"
      >
        <Facebook className="w-4 h-4 text-blue-400" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "_blank")}
        className="p-2 glass rounded-lg hover:bg-white/20 transition-all"
      >
        <Twitter className="w-4 h-4 text-sky-400" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={copyLink}
        className="p-2 glass rounded-lg hover:bg-white/20 transition-all"
      >
        <Link2 className="w-4 h-4 text-gray-400" />
      </motion.button>
    </div>
  );
}
