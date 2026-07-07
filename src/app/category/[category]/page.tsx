import Link from "next/link";
import { products, categories } from "@/data/products";

export function generateStaticParams() {
  return categories
    .filter((c) => c !== "All")
    .map((category) => ({ category }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const decoded = decodeURIComponent(params.category);
  const filtered = products.filter((p) => p.category === decoded);

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
          >
            ← Back to Collection
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-4">
            {decoded}{" "}
            <span className="text-gradient">Watches</span>
          </h1>
          <p className="text-gray-400 mt-2">
            {filtered.length} timepieces available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-luxury-800">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.brand}
                </p>
                <h3 className="font-serif font-semibold text-lg mt-1">
                  {product.name}
                </h3>
                <p className="text-primary-400 font-bold mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No watches found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
