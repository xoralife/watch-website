"use client";

export default function NotificationDot({
  count,
  className = "",
}: {
  count: number;
  className?: string;
}) {
  if (count === 0) return null;

  return (
    <span
      className={`absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ${className}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}
