"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Browse Collection",
    desc: "Explore our curated selection of premium timepieces.",
  },
  {
    num: "02",
    title: "Place Order",
    desc: "Secure checkout with multiple payment options.",
  },
  {
    num: "03",
    title: "Express Shipping",
    desc: "Free worldwide shipping with full insurance.",
  },
  {
    num: "04",
    title: "Enjoy Your Watch",
    desc: "2-year warranty and lifetime support included.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
              )}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-xl font-bold text-gradient">
                {step.num}
              </div>
              <h3 className="font-serif font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
