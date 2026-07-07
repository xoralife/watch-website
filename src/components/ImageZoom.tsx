"use client";

import { useState, useRef } from "react";

export default function ImageZoom({ src, alt }: { src: string; alt: string }) {
  const [magnify, setMagnify] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      className="relative aspect-square rounded-2xl overflow-hidden glass cursor-crosshair"
      onMouseEnter={() => setMagnify(true)}
      onMouseLeave={() => setMagnify(false)}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {magnify && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${pos.x}% ${pos.y}%`,
            backgroundSize: "200%",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
}
