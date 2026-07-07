import { MetadataRoute } from "next";
import { products, categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "https://luxe-watches.com", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: "https://luxe-watches.com/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://luxe-watches.com/contact", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://luxe-watches.com/faq", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "https://luxe-watches.com/shipping", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const productPages = products.map((p) => ({
    url: `https://luxe-watches.com/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const categoryPages = categories.filter(c => c !== "All").map((c) => ({
    url: `https://luxe-watches.com/category/${encodeURIComponent(c)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...categoryPages];
}
