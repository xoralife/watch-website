"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface FilterTag {
  type: string;
  label: string;
  onRemove: () => void;
}

export default function ActiveFilters({ filters }: { filters: FilterTag[] }) {
  if (filters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map((f, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-300"
        >
          {f.label}
          <button onClick={f.onRemove} className="hover:text-white transition-colors">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
    </div>
  );
}
