"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Warranty", luxe: "2 Years", others: "1 Year" },
  { feature: "Shipping", luxe: "Free Worldwide", others: "Paid" },
  { feature: "Returns", luxe: "30-Day Hassle-Free", others: "14-Day" },
  { feature: "Authentication", luxe: "100% Verified", others: "Not Guaranteed" },
  { feature: "Packaging", luxe: "Luxury Box", others: "Standard" },
  { feature: "Customer Support", luxe: "24/7 Concierge", others: "Email Only" },
];

export default function ComparisonTable() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Why Choose <span className="text-gradient">LUXE</span>?
          </h2>
          <p className="text-gray-400">
            We set the standard for luxury watch retail.
          </p>
        </motion.div>
        <div className="glass rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-sm font-medium text-gray-400">Feature</th>
                <th className="px-6 py-4 text-sm font-medium text-primary-400">LUXE</th>
                <th className="px-6 py-4 text-sm font-medium text-gray-500">Others</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisons.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="px-6 py-4 text-sm">{row.feature}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-sm text-primary-300">
                      <Check className="w-4 h-4" />
                      {row.luxe}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <X className="w-4 h-4" />
                      {row.others}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
