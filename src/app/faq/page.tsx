"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "Are all watches 100% authentic?",
    a: "Absolutely. Every timepiece we sell comes with a certificate of authenticity, original packaging, and manufacturer warranty. We source directly from authorized distributors.",
  },
  {
    q: "How long does shipping take?",
    a: "Free express shipping (2-4 business days) on all orders worldwide. For remote locations, please allow 5-7 business days.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy. Watches must be returned in unworn condition with all original packaging. We'll provide a prepaid return label.",
  },
  {
    q: "Do you offer warranty?",
    a: "Yes, every watch comes with a 2-year international warranty covering manufacturing defects. Extended warranty options are available at checkout.",
  },
  {
    q: "Can I track my order?",
    a: "Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
  },
  {
    q: "Do you offer watch servicing?",
    a: "Yes! Our certified horologists provide professional maintenance, battery replacement, strap adjustments, and full servicing. Contact us for a quote.",
  },
  {
    q: "Can I buy a gift for someone?",
    a: "Absolutely. We offer complimentary gift wrapping with a personalized message. Just add a note at checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for high-value purchases.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
              Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-gray-400">
              Everything you need to know about shopping at LUXE.
            </p>
          </motion.div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-primary-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-sm text-gray-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No questions found matching your search.</p>
            </div>
          )}

          {/* Still have questions */}
          <div className="mt-12 text-center glass rounded-2xl p-8">
            <h2 className="text-xl font-serif font-semibold mb-2">
              Still have questions?
            </h2>
            <p className="text-gray-400 mb-4">
              Our team is here to help you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
