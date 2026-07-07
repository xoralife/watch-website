"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "The Art of Swiss Watchmaking: A Beginner's Guide",
    excerpt: "Discover the centuries-old tradition of Swiss horology and what makes these timepieces truly exceptional.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
    slug: "art-of-swiss-watchmaking",
    category: "Education",
  },
  {
    title: "How to Choose the Perfect Dive Watch",
    excerpt: "From depth ratings to bezel types, here's everything you need to know before buying a dive watch.",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
    slug: "choose-perfect-dive-watch",
    category: "Buying Guide",
  },
  {
    title: "Automatic vs Quartz: Which Movement Is Right for You?",
    excerpt: "We break down the differences between automatic and quartz movements to help you make an informed decision.",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600",
    slug: "automatic-vs-quartz",
    category: "Education",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
              Journal
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              The <span className="text-gradient">LUXE</span> Journal
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Insights, guides, and stories from the world of luxury
              horology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary-400 font-medium tracking-wider uppercase">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-serif font-semibold mt-2 mb-3 group-hover:text-primary-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
