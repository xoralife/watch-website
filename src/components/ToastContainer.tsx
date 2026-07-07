"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, CheckCircle, X } from "lucide-react";
import { useState } from "react";

type ToastType = "success" | "info" | "warning";

const config = {
  success: { icon: CheckCircle, bg: "from-green-500/20 to-emerald-500/10", border: "border-green-500/30", text: "text-green-300" },
  info: { icon: Info, bg: "from-primary-500/20 to-blue-500/10", border: "border-primary-500/30", text: "text-primary-300" },
  warning: { icon: AlertTriangle, bg: "from-amber-500/20 to-orange-500/10", border: "border-amber-500/30", text: "text-amber-300" },
};

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

let toastId = 0;
let addToastFn: ((t: Toast) => void) | null = null;

export function showToast(type: ToastType, message: string) {
  addToastFn?.({ id: toastId++, type, message });
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  addToastFn = (toast: Toast) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 4000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const c = config[toast.type];
          const Icon = c.icon;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${c.bg} border ${c.border} backdrop-blur-xl shadow-2xl min-w-[300px]`}
            >
              <Icon className={`w-5 h-5 ${c.text}`} />
              <span className="text-sm text-gray-200 flex-1">{toast.message}</span>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
