import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-luxury-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold tracking-widest">
                <span className="text-white">LUX</span>
                <span className="text-gradient">E</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium timepieces crafted for those who value precision, artistry,
              and timeless design.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Shop All", href: "/?category=All" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
                { label: "Shipping & Returns", href: "/shipping" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5">
              {[
                "Chronograph",
                "Diver",
                "Dress",
                "Smart",
                "Mechanical",
                "Pilot",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/?category=${cat}`}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive drops, early access, and watch care tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
              <button className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold rounded-r-xl hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 LUXE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
