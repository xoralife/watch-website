"use client";

import { motion } from "framer-motion";
import { Zap, Eye, TrendingUp, Award } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    value: "0.3s",
    label: "Daily Accuracy",
    desc: "COSC-certified precision",
  },
  {
    icon: Eye,
    value: "200m+",
    label: "Depth Rating",
    desc: "Professional dive certified",
  },
  {
    icon: TrendingUp,
    value: "70hr",
    label: "Power Reserve",
    desc: "Long-lasting automatic",
  },
  {
    icon: Award,
    value: "5yr",
    label: "Service Interval",
    desc: "Extended maintenance",
  },
];

export default function ProductHighlights() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {highlights.map((h, i) => (
        <motion.div
          key={h.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="glass rounded-xl p-4 text-center"
        >
          <h.icon className="w-5 h-5 text-primary-400 mx-auto mb-2" />
          <span className="block text-lg font-bold text-gradient">{h.value}</span>
          <span className="block text-xs text-gray-400 mt-0.5">{h.label}</span>
          <span className="block text-[10px] text-gray-600">{h.desc}</span>
        </motion.div>
      ))}
    </div>
  );
}
