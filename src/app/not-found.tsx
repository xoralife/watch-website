import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-8xl font-serif font-bold text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif font-semibold mb-4">
          Time Stood Still
        </h2>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been
          moved or the link might be incorrect.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
