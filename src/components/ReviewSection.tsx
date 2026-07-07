"use client";

import { motion } from "framer-motion";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

const sampleReviews = [
  {
    name: "Michael K.",
    rating: 5,
    text: "Exceptional quality and fast shipping. The watch exceeded my expectations.",
    date: "2 weeks ago",
    helpful: 24,
  },
  {
    name: "Emma L.",
    rating: 4,
    text: "Beautiful timepiece. The strap took a few days to break in but now it's perfect.",
    date: "1 month ago",
    helpful: 18,
  },
  {
    name: "Robert C.",
    rating: 5,
    text: "Third watch from LUXE and they never disappoint. Customer service is top-notch.",
    date: "1 month ago",
    helpful: 31,
  },
];

export default function ReviewSection({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="text-4xl font-bold text-gradient">{rating}</div>
        <div>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-400">{reviews} verified reviews</p>
        </div>
      </div>

      <div className="space-y-4">
        {sampleReviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{review.name}</span>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < review.rating
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-300">{review.text}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
              <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <ThumbsUp className="w-3 h-3" />
                {review.helpful}
              </button>
              <button className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                <ThumbsDown className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full py-3 glass rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
        Write a Review
      </button>
    </div>
  );
}
