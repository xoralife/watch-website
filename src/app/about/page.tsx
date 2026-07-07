"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Users, Gem, Globe } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Craftsmanship",
    description:
      "Every timepiece in our collection is selected for its exceptional build quality and precision engineering. We partner only with manufacturers who share our commitment to excellence.",
  },
  {
    icon: Award,
    title: "Authenticity",
    description:
      "We guarantee 100% authentic watches with full documentation. Each piece is verified by our expert horologists before it reaches your wrist.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a community of watch enthusiasts who share a passion for fine timekeeping. We host exclusive events and provide a platform for collectors to connect.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "We're committed to sustainable luxury. From eco-friendly packaging to carbon-neutral shipping, we strive to minimize our environmental footprint.",
  },
];

const timeline = [
  { year: "2018", event: "LUXE founded in Geneva" },
  { year: "2019", event: "First collection launched with 12 timepieces" },
  { year: "2020", event: "Expanded to 3 luxury boutiques worldwide" },
  { year: "2022", event: "Reached 10,000 happy customers globally" },
  { year: "2024", event: "Launched sustainable luxury initiative" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Crafting Moments That
              <span className="text-gradient"> Last a Lifetime</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              At LUXE, we believe a watch is more than a timekeeping instrument
              &mdash; it&apos;s a statement of character, a companion through
              life&apos;s defining moments, and a legacy to pass down through
              generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-900/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 pb-8 relative last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-500 mt-2 shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary-500/50 to-transparent" />
                  )}
                </div>
                <div>
                  <span className="text-sm text-primary-400 font-mono font-bold">
                    {item.year}
                  </span>
                  <p className="text-gray-300 mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Ready to Find Your{" "}
              <span className="text-gradient">Perfect Timepiece</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Explore our curated collection and discover the watch that
              speaks to you.
            </p>
            <Link
              href="/?category=All"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
