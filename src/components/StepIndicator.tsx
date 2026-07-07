"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

export default function StepIndicator({
  steps,
  current,
}: {
  steps: Step[];
  current: number;
}) {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.div
            animate={{
              backgroundColor: i <= current ? "#0c8ee7" : "rgba(255,255,255,0.1)",
              scale: i === current ? 1.1 : 1,
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          >
            {i + 1}
          </motion.div>
          {i < steps.length - 1 && (
            <div
              className={`w-8 h-0.5 rounded ${
                i < current ? "bg-primary-500" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
