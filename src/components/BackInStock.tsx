"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell } from "lucide-react";

export default function BackInStock({ productName }: { productName: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass rounded-xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Bell className="w-4 h-4 text-primary-400" />
        <h4 className="font-medium text-sm">Back in Stock</h4>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        {productName} is currently out of stock. Leave your email and we&apos;ll
        notify you when it&apos;s available again.
      </p>
      {submitted ? (
        <p className="text-sm text-primary-400 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          You&apos;ll be notified when back in stock!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg font-medium hover:bg-primary-500 transition-colors"
          >
            Notify
          </button>
        </form>
      )}
    </div>
  );
}
