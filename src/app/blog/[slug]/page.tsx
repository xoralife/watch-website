"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock } from "lucide-react";

const posts: Record<string, { title: string; date: string; readTime: string; content: string }> = {
  "art-of-swiss-watchmaking": {
    title: "The Art of Swiss Watchmaking: A Beginner's Guide",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: `
      Swiss watchmaking is synonymous with precision, luxury, and craftsmanship. For centuries, Switzerland has been the heart of the horology world, producing timepieces that are as much works of art as they are functional instruments.

      The tradition began in the 16th century when Protestant reformers fled to Geneva, bringing with them skills in jewelry and clockmaking. Over time, these craftsmen developed techniques that would become the standard for the entire industry.

      Today, Swiss watches represent the pinnacle of mechanical engineering. Each movement can contain hundreds of tiny components, all assembled by hand by master watchmakers who have spent years perfecting their craft.

      What sets Swiss watches apart is not just the precision — it's the attention to detail, the quality of materials, and the heritage behind each brand. From the delicate balance spring to the intricate gear train, every component is designed to work in perfect harmony.

      Whether you're a seasoned collector or new to the world of luxury watches, understanding the artistry behind Swiss watchmaking deepens your appreciation for these remarkable instruments.
    `.trim(),
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-primary-400 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
