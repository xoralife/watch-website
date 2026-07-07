"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Free express shipping worldwide",
  "30-day hassle-free returns",
  "2-year international warranty",
  "100% authentic guarantee",
  "Lifetime customer support",
  "Complimentary gift wrapping",
];

export default function BenefitsList({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {benefits.map((benefit, i) => (
        <motion.div
          key={benefit}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-2 text-sm text-gray-300"
        >
          <CheckCircle className="w-4 h-4 text-primary-400 shrink-0" />
          {benefit}
        </motion.div>
      ))}
    </div>
  );
}
