export interface IndustryPageDetail {
  slug: string;
  name: string;
  summary: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  products: string[];
  categorySlugs: string[];
  highlights: string[];
}

export function slugifyIndustry(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const industryPageDetails: IndustryPageDetail[] = [
  {
    slug: "food-and-beverage-packaging",
    name: "Food & beverage packaging",
    summary: "Food-safe bottles, jars and containers for beverages, ingredients, sauces and retail-ready packaging.",
    heroTitle: "Food and beverage packaging built for safe, reliable retail supply",
    heroDescription: "Gautam Plastic supports food and beverage buyers with PET bottles, PET jars and food-grade containers suited for product protection, display and everyday distribution.",
    image: "/images/industry-food-beverage.svg",
    imageAlt: "Food and beverage bottles and jars",
    products: ["PET bottles", "PET jars", "Food-grade plastic containers", "Caps and closures"],
    categorySlugs: ["pet-bottles", "pet-jars", "plastic-containers", "caps-and-closures"],
    highlights: ["Clear packaging for product visibility", "Food-safe container options", "Bottle and jar formats for retail shelves"],
  },
  {
    slug: "pharmaceutical-and-laboratory-packaging",
    name: "Pharmaceutical and laboratory packaging",
    summary: "Dependable bottles and reagent packaging for lab-grade handling, dosing and chemical storage.",
    heroTitle: "Pharmaceutical and laboratory packaging for controlled handling",
    heroDescription: "From reagent bottles to measured dosing components, our range helps labs and pharmaceutical buyers source practical packaging for sensitive liquids and materials.",
    image: "/images/industry-pharma-lab.svg",
    imageAlt: "Laboratory reagent bottles and measuring units",
    products: ["Reagent bottles", "HDPE bottles", "Measuring units", "Plastic pumps"],
    categorySlugs: ["reagent-bottles", "hdpe-bottles", "measuring-units", "plastic-pumps"],
    highlights: ["Secure sealing support", "Chemical handling compatibility", "Measuring and dosing options"],
  },
  {
    slug: "chemical-and-industrial-liquids",
    name: "Chemical and industrial liquids",
    summary: "Robust HDPE bottles, jerry cans and drums for cleaners, oils, additives and process liquids.",
    heroTitle: "Industrial liquid packaging for demanding storage and transport",
    heroDescription: "We supply HDPE packaging formats designed for chemical, lubricant, cleaning and process-liquid applications across industrial procurement needs.",
    image: "/images/industry-chemical-liquids.svg",
    imageAlt: "Industrial liquid drums and jerry cans",
    products: ["HDPE bottles", "HDPE jerry cans", "HDPE drums", "Caps and closures"],
    categorySlugs: ["hdpe-bottles", "hdpe-jerry-cans", "hdpe-drums", "caps-and-closures"],
    highlights: ["Bulk handling formats", "Durable HDPE material options", "Secure caps and closures"],
  },
  {
    slug: "household-and-consumer-goods",
    name: "Household and consumer goods",
    summary: "Practical packaging for cleaners, sanitizers, personal care liquids and everyday consumer products.",
    heroTitle: "Household and consumer packaging for daily-use products",
    heroDescription: "Our packaging selection supports household goods, cleaners and consumer brands with bottles, pumps and closures that are easy to handle and source.",
    image: "/images/industry-household-consumer.svg",
    imageAlt: "Household product bottles and pump dispensers",
    products: ["HDPE bottles", "Plastic pumps", "Plastic containers", "Caps and closures"],
    categorySlugs: ["hdpe-bottles", "plastic-pumps", "plastic-containers", "caps-and-closures"],
    highlights: ["Dispensing pump support", "Bottle formats for cleaners and refills", "Consumer-friendly closures"],
  },
  {
    slug: "agriculture-and-fertilizer-packaging",
    name: "Agriculture and fertilizer packaging",
    summary: "Strong packaging for fertilizers, agricultural liquids, additives and field-use supply chains.",
    heroTitle: "Agriculture packaging for fertilizers and field-use liquids",
    heroDescription: "Gautam Plastic helps agriculture and fertilizer buyers source rugged bottles, cans and drums for safe storage and dependable distribution.",
    image: "/images/industry-agriculture-fertilizer.svg",
    imageAlt: "Agriculture fertilizer packaging containers",
    products: ["HDPE jerry cans", "HDPE drums", "HDPE bottles", "Measuring units"],
    categorySlugs: ["hdpe-jerry-cans", "hdpe-drums", "hdpe-bottles", "measuring-units"],
    highlights: ["Field-ready liquid handling", "Bulk and semi-bulk storage", "Measurement support for dosing"],
  },
  {
    slug: "retail-and-distribution-supply",
    name: "Retail and distribution supply",
    summary: "Packaging formats that help distributors, retailers and stockists manage repeated supply requirements.",
    heroTitle: "Packaging supply for retail, distribution and repeat procurement",
    heroDescription: "We support retailers, distributors and procurement teams with a wide packaging portfolio designed for repeat ordering and practical stock planning.",
    image: "/images/industry-retail-distribution.svg",
    imageAlt: "Retail and distribution packaging cartons and containers",
    products: ["PET bottles", "Plastic containers", "Caps and closures", "PET jars"],
    categorySlugs: ["pet-bottles", "plastic-containers", "caps-and-closures", "pet-jars"],
    highlights: ["Wide category coverage", "Repeat procurement support", "Retail-ready packaging choices"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industryPageDetails.find((industry) => industry.slug === slug);
}

export function getIndustryByName(name: string) {
  const slug = slugifyIndustry(name);

  return getIndustryBySlug(slug) ?? {
    slug,
    name,
    summary: "Packaging support for industrial and commercial buyers.",
    heroTitle: `${name} packaging solutions`,
    heroDescription: "Gautam Plastic supports buyers with dependable packaging formats for storage, handling and distribution.",
    image: "/images/product-plastic-containers.svg",
    imageAlt: `${name} packaging`,
    products: ["Plastic bottles", "Plastic containers", "Caps and closures"],
    categorySlugs: ["pet-bottles", "plastic-containers", "caps-and-closures"],
    highlights: ["Practical sourcing support", "Multiple packaging formats", "Ahmedabad and Gujarat supply support"],
  };
}
