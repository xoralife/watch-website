"use client";

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
}: {
  label?: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase glass rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
        {title}{" "}
        <span className="text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
