"use client";

import { motion } from "framer-motion";

export default function VideoCard({
  thumbnail,
  title,
  duration,
}: {
  thumbnail: string;
  title: string;
  duration: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 text-xs rounded">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-medium">{title}</h4>
      </div>
    </motion.div>
  );
}
