export default function ProductCardSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-luxury-800" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-16 bg-luxury-800 rounded" />
        <div className="h-5 w-40 bg-luxury-800 rounded" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-3.5 h-3.5 bg-luxury-800 rounded" />
          ))}
        </div>
        <div className="h-6 w-24 bg-luxury-800 rounded" />
        <div className="h-11 w-full bg-luxury-800 rounded-xl" />
      </div>
    </div>
  );
}
