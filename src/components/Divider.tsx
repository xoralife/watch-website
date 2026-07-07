"use client";

export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/5" />
      </div>
      <div className="relative flex justify-center">
        <div className="w-1 h-1 rounded-full bg-primary-400/50 mx-1" />
        <div className="w-2 h-1 rounded-full bg-primary-400/30 mx-1" />
        <div className="w-1 h-1 rounded-full bg-primary-400/50 mx-1" />
      </div>
    </div>
  );
}
