"use client";

import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Package, Globe, CreditCard } from "lucide-react";
import Link from "next/link";

const policies = [
  {
    icon: Truck,
    title: "Free Worldwide Shipping",
    description:
      "We offer complimentary express shipping on all orders worldwide. Delivery typically takes 2-4 business days for major cities and 5-7 business days for remote locations.",
    details: [
      "Free express shipping on all orders",
      "Fully insured delivery",
      "Real-time tracking via email & SMS",
      "Discreet packaging to ensure security",
    ],
  },
  {
    icon: RotateCcw,
    title: "30-Day Return Policy",
    description:
      "Not satisfied? Return any watch within 30 days of delivery for a full refund. We believe in risk-free luxury shopping.",
    details: [
      "30-day return window from delivery date",
      "Full refund to original payment method",
      "Prepaid return shipping label provided",
      "Watch must be unworn with all tags & packaging",
    ],
  },
  {
    icon: Shield,
    title: "2-Year International Warranty",
    description:
      "Every LUXE timepiece comes with a comprehensive 2-year warranty covering manufacturing defects and movement issues.",
    details: [
      "Covers manufacturing defects",
      "International warranty valid worldwide",
      "Extended warranty options available",
      "Fast-track repair service",
    ],
  },
  {
    icon: Package,
    title: "Luxury Packaging",
    description:
      "Every watch arrives in our signature presentation box, perfect for gifting or storing your timepiece.",
    details: [
      "Handcrafted wooden presentation box",
      "Microfiber cleaning cloth",
      "Certificate of authenticity",
      "Warranty card & user manual",
    ],
  },
  {
    icon: Globe,
    title: "Duties & Taxes",
    description:
      "For international orders, import duties and taxes may apply depending on your country's customs regulations.",
    details: [
      "Duties calculated at checkout for transparency",
      "DDP (Delivery Duty Paid) available",
      "Customs documentation handled by us",
      "Price matching on import fees",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Your payment security is our priority. We use bank-grade encryption and support multiple payment methods.",
    details: [
      "256-bit SSL encryption",
      "PCI DSS compliant checkout",
      "Multiple currencies supported",
      "Buy now, pay later options available",
    ],
  },
];

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
              Policies
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Shipping &{" "}
              <span className="text-gradient">Returns</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              We believe in complete transparency. Here&apos;s everything you
              need to know about shipping, returns, and our commitment to you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5">
                  <policy.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h2 className="text-xl font-serif font-semibold mb-3">
                  {policy.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {policy.description}
                </p>
                <ul className="space-y-2">
                  {policy.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-primary-400 mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center glass rounded-2xl p-8"
          >
            <h2 className="text-xl font-serif font-semibold mb-2">
              Have more questions?
            </h2>
            <p className="text-gray-400 mb-4">
              Check our FAQ or reach out to our support team.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/faq"
                className="px-6 py-3 glass rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                View FAQ
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
