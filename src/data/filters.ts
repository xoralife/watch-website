export const categories = [
  "All",
  "Chronograph",
  "Diver",
  "Dress",
  "Smart",
  "Mechanical",
  "Pilot",
  "Complication",
  "Sports",
];

export const brands = ["Horizon", "Vanguard", "Heritage"];

export const priceRanges = [
  { label: "Under $1,000", min: 0, max: 1000 },
  { label: "$1,000 - $2,500", min: 1000, max: 2500 },
  { label: "$2,500 - $5,000", min: 2500, max: 5000 },
  { label: "$5,000+", min: 5000, max: Infinity },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
];
