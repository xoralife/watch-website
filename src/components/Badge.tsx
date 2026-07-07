"use client";

export default function Badge({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "amber" | "green";
}) {
  const colors = {
    primary: "bg-primary-500/20 text-primary-300 border-primary-500/30",
    accent: "bg-accent-500/20 text-accent-300 border-accent-500/30",
    amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    green: "bg-green-500/20 text-green-300 border-green-500/30",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full border ${colors[variant]}`}
    >
      {children}
    </span>
  );
}
