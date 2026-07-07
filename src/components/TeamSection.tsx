"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Elena Voss",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
    bio: "30 years in luxury watch industry. Former curator at Sotheby's Geneva.",
  },
  {
    name: "Marcus Sterling",
    role: "Master Horologist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    bio: "Certified watchmaker with 20+ years of restoration experience.",
  },
  {
    name: "Sophie Laurent",
    role: "Head of Curation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
    bio: "Former editor at Hodinkee. Expert in vintage and modern timepieces.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
            Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our team of horology experts brings decades of combined experience
            to curate the finest timepieces for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.07] transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-serif font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-primary-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
