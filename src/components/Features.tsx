"use client";

import { motion } from "framer-motion";
import { Shield, Truck, RotateCcw, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "2 Year Warranty",
    description: "Every watch comes with our comprehensive warranty",
  },
  {
    icon: Truck,
    title: "Free Worldwide Shipping",
    description: "Complimentary express shipping on all orders",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Hassle-free returns within 30 days of purchase",
  },
  {
    icon: Clock,
    title: "Expert Service",
    description: "Professional maintenance & repair services",
  },
];

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
