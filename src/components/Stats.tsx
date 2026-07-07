"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { value: 10000, label: "Happy Customers", suffix: "+" },
  { value: 500, label: "Premium Watches", suffix: "+" },
  { value: 50, label: "Countries Served", suffix: "+" },
  { value: 49, label: "Average Rating", suffix: "", decimal: true },
];

export default function Stats() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="text-4xl sm:text-5xl font-serif font-bold text-gradient block mb-2"
                >
                  {stat.decimal ? (
                    <>
                      {stat.value.toString().slice(0, 1)}.9
                    </>
                  ) : (
                    <CountUp end={stat.value} duration={2500} suffix={stat.suffix} />
                  )}
                </motion.span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
