"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CookieConsent() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-gray-300 flex-1">
            We use cookies to enhance your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <div className="flex gap-2 shrink-0">
            <button className="px-5 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm rounded-xl font-medium hover:opacity-90 transition-opacity">
              Accept
            </button>
            <button className="px-5 py-2 glass text-sm rounded-xl hover:bg-white/20 transition-all">
              Decline
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
