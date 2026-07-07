"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Gem } from "lucide-react";

const payments = [
  { name: "Visa", color: "from-blue-600 to-blue-800" },
  { name: "Mastercard", color: "from-orange-500 to-red-600" },
  { name: "AmEx", color: "from-blue-400 to-indigo-600" },
  { name: "PayPal", color: "from-blue-500 to-blue-700" },
  { name: "Apple Pay", color: "from-gray-800 to-black" },
  { name: "Google Pay", color: "from-green-500 to-blue-500" },
];

export default function PaymentMethods() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Secure & Flexible{" "}
                <span className="text-gradient">Payments</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Shop with confidence using your preferred payment method. All
                transactions are encrypted and secure.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary-400" />
                  256-bit SSL
                </span>
                <span className="flex items-center gap-1">
                  <Gem className="w-4 h-4 text-primary-400" />
                  PCI Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-4 h-4 text-primary-400" />
                  Mobile Pay
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {payments.map((p) => (
                <div
                  key={p.name}
                  className={`px-4 py-3 rounded-xl bg-gradient-to-br ${p.color} text-white text-xs font-bold text-center tracking-wider shadow-lg`}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
