export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LUXE",
    url: "https://luxe-watches.com",
    logo: "https://luxe-watches.com/logo.png",
    description:
      "Premium timepieces crafted for those who value precision, artistry, and timeless design.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Geneva",
      addressCountry: "Switzerland",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41 22 555 0199",
      contactType: "customer service",
    },
    sameAs: ["https://facebook.com/luxe", "https://instagram.com/luxe"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
