export const BUSINESS = {
  name: "Rob's Best Foot Forward",
  tagline: "Toronto's 4.9-star shoe repair craftsmen",
  phone: "(416) 360-7463",
  phoneHref: "tel:+14163607463",
  phoneVanity: "416-360-SHOES",
  email: "info@robsbestfootforward.ca",
  address: "20 Toronto St, Suite 100, Toronto, ON M5C 2B8",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rob%27s+Best+Foot+Forward+20+Toronto+St+Toronto",
  instagram: "https://www.instagram.com/robsbestfootforward",
  rating: "4.9",
  reviewCount: "172",
  hours: [
    { day: "Monday", time: "9:00 AM – 5:00 PM" },
    { day: "Tuesday – Thursday", time: "9:00 AM – 6:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  hoursNote:
    "Hours per Google listing — one directory lists Monday as closed. Call ahead to confirm.",
};

export const SERVICES = [
  {
    name: "Full Resoles",
    desc: "Leather or rubber resoles, stitched the traditional way — never just glued.",
    price: "from $85",
    tag: "Most loved",
  },
  {
    name: "Heel Repair & Topys",
    desc: "Worn heels rebuilt, protective topys fitted — extra miles on every step.",
    price: "from $50",
    tag: "Signature",
  },
  {
    name: "Cleaning & Conditioning",
    desc: "Deep clean, condition, and polish that brings tired leather back to life.",
    price: "from $35",
    tag: null,
  },
  {
    name: "Handbag & Leather Repair",
    desc: "Vintage bags, straps, and designer leather restored with care.",
    price: "from $45",
    tag: null,
  },
  {
    name: "Stitching & Patching",
    desc: "Splits, seams, and soles re-stitched by hand to outlast the original.",
    price: "from $30",
    tag: null,
  },
  {
    name: "Saphir Shoe Care",
    desc: "The world's finest shoe care products, stocked in-store at fair prices.",
    price: "in-store",
    tag: null,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Rob is a magician. He brought my favorite boots back from the dead — they look better than the day I bought them.",
    name: "Marcus T.",
    detail: "Full resole",
  },
  {
    quote:
      "I thought my designer heels were done for. One week later, flawless — I honestly couldn't tell they'd been repaired.",
    name: "Sofia L.",
    detail: "Heel repair",
  },
  {
    quote:
      "Thirty years of craft in every stitch. My vintage handbag looks brand new again.",
    name: "Diane K.",
    detail: "Handbag restoration",
  },
  {
    quote:
      "Fair prices, quick turnaround, and genuinely kind people. This is what a neighborhood shop should be.",
    name: "James W.",
    detail: "Topys",
  },
  {
    quote:
      "I've taken every pair I own here for years. There's nowhere else in Toronto I'd trust with my shoes.",
    name: "Andre B.",
    detail: "Customer for years",
  },
  {
    quote:
      "Saved my wedding shoes two days before the ceremony. Forever grateful to this shop.",
    name: "Priya N.",
    detail: "Emergency repair",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Craft", href: "#craft" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Visit Us", href: "#visit" },
];
