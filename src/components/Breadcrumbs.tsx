"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-gray-400 mb-8">
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-1"
        >
          {i > 0 && <ChevronRight className="w-3 h-3 text-gray-600" />}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-primary-400 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </motion.span>
      ))}
    </nav>
  );
}
