"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const sizes = [
  { label: "Case Size", wrist: "Small (5.5-6.5\")", fit: "36-38mm" },
  { label: "Case Size", wrist: "Medium (6.5-7.5\")", fit: "39-42mm" },
  { label: "Case Size", wrist: "Large (7.5-8.5\")", fit: "43-46mm" },
  { label: "Strap", wrist: "Small", fit: "130-170mm" },
  { label: "Strap", wrist: "Medium", fit: "170-200mm" },
  { label: "Strap", wrist: "Large", fit: "200-230mm" },
];

export default function SizeGuideModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-lg w-full bg-luxury-900 border border-white/10 rounded-2xl z-50 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif font-semibold">
                  Size Guide
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-3 text-sm font-medium text-gray-400">Size</th>
                      <th className="pb-3 text-sm font-medium text-gray-400">Wrist</th>
                      <th className="pb-3 text-sm font-medium text-gray-400">Fit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {sizes.map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 text-sm">{row.label}</td>
                        <td className="py-3 text-sm text-gray-400">{row.wrist}</td>
                        <td className="py-3 text-sm font-medium">{row.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Measure your wrist circumference just below the wrist bone.
                Add 1-2cm for comfortable fit.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
