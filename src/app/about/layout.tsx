import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the LUXE story. We curate premium timepieces from world-renowned manufacturers, combining Swiss precision with contemporary design.",
  openGraph: {
    title: "About LUXE | Premium Timepieces",
    description:
      "Discover the LUXE story. We curate premium timepieces from world-renowned manufacturers.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
