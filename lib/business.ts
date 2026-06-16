export interface BusinessProfile {
  name: string;
  fullName: string;
  tagline: string;
  established: string;
  businessType: string;
  industry: string;
  location: string;
  city: string;
  state: string;
  pincode: string;
  phones: string[];
  whatsapp: string;
  email: string;
  googleBusinessUrl: string;
  indiamartUrl: string;
  tradeindiaUrl: string;
  justdialUrl: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  summary: string;
  keywords: string[];
}

export interface CategoryHero {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
}

export interface SiteSectionContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SiteContentModel {
  home: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    stats: { label: string; value: string }[];
    whyChooseUs: SiteSectionContent;
    industries: SiteSectionContent;
    cta: { heading: string; description: string };
  };
  about: SiteSectionContent & {
    body: string[];
    summaryTitle: string;
    summaryText: string;
  };
  contact: SiteSectionContent & {
    body: string;
    ctaLabel: string;
  };
  products: SiteSectionContent;
}

export const business: BusinessProfile = {
  name: "Gautam Plastic",
  fullName: "Gautam Plastic - HDPE & PET Bottle, Jar, Jerry Can, Drum, Container, Cap & Closure Packaging Supplier",
  tagline: "Premium plastic packaging supplier for industrial and commercial buyers.",
  established: "25+ Years",
  businessType: "Supplier and trader (not manufacturer)",
  industry: "Plastic packaging supplier",
  location: "Opp. Torrent Power 33 KV Substation, Amdupura, Saraspur, Ahmedabad, Gujarat - 382345",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "382345",
  phones: ["9898592959", "9898073169"],
  whatsapp: "9427576831",
  email: "sales@gautamplastic.com",
  googleBusinessUrl:
    "https://www.google.com/search?sca_esv=2aa300c80f7be1f4&cs=1&output=search&kgmid=/g/11h_tvtnhn&q=Gautam+Plastic+-+HDPE+%26+PET+Bottle,+Jar,+Jerry+Can,+Drum,+Container,+Cap+%26+Closure+packaging+Supplier",
  indiamartUrl: "https://www.indiamart.com/gautam-plastic-ahmedabad/",
  tradeindiaUrl: "https://www.tradeindia.com/gautam-plastic-29912212/",
  justdialUrl:
    "https://www.justdial.com/Ahmedabad/Gautam-Plastic-Opposite-Torrent-Power-33-Kv-Substation-Saraspur-Ahmedabad-Gujarat-Amdupura/079PXX79-XX79-191105173728-N8Q1_BZDET",
};

export const siteContent: SiteContentModel = {
  home: {
    eyebrow: "Industrial Packaging • Ahmedabad, Gujarat",
    headline: "25+ Years of Trusted Plastic Packaging Solutions",
    subheadline:
      "Leading supplier of PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps & closures in Ahmedabad, Gujarat.",
    stats: [
      { label: "Established", value: "25+ years" },
      { label: "Location", value: "Ahmedabad" },
      { label: "Core Focus", value: "Packaging" },
    ],
    whyChooseUs: {
      eyebrow: "Why choose us",
      title: "Built on reliability, quality, and practical support",
      description:
        "Gautam Plastic combines industrial knowledge with direct sourcing support to meet B2B packaging demands without complexity.",
    },
    industries: {
      eyebrow: "Industries served",
      title: "Packaging trusted across high-demand sectors",
      description:
        "Our packaging portfolio supports businesses that need dependable containment, safe handling, and consistent availability.",
    },
    cta: {
      heading: "Let’s discuss your plastic packaging requirements.",
      description:
        "Whether you need standard packaging or a tailored supply plan, Gautam Plastic is ready to support your business with premium, professional service.",
    },
  },
  about: {
    eyebrow: "About Gautam Plastic",
    title: "A premium industrial packaging partner for Ahmedabad and Gujarat",
    description:
      "Gautam Plastic is a supplier and trader focused on PET, HDPE, drums, containers, pumps, measuring units, and caps & closures.",
    body: [
      "We support procurement teams, distributors, retailers, and industrial users who value consistent quality, clear communication, and dependable supply planning.",
      "Our role is to simplify packaging sourcing across bottle, jar, drum and closure categories for businesses in Ahmedabad and across Gujarat.",
    ],
    summaryTitle: "Business summary",
    summaryText: "Supplier and trader model focused on industrial packaging convenience and practical sourcing support.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to a packaging specialist",
    description:
      "Request quotes, check stock availability, or discuss packaging requirements for PET, HDPE and closures in Ahmedabad.",
    body: "Share your product category, estimated volume, and preferred packaging format. We will respond with the right solution and sourcing guidance.",
    ctaLabel: "Start your enquiry",
  },
  products: {
    eyebrow: "Product categories",
    title: "Industrial packaging categories for B2B buyers in Gujarat",
    description:
      "Gautam Plastic offers a structured portfolio of PET, HDPE, closures and container solutions for industrial, commercial and laboratory applications.",
  },
};

export const productCategories: ProductCategory[] = [
  { slug: "pet-bottles", name: "PET Bottles", summary: "Lightweight PET bottles for beverages, pharmaceuticals, chemicals and consumer packing.", keywords: ["PET Bottle Supplier Ahmedabad", "PET Bottle Supplier Gujarat", "plastic bottle supplier"] },
  { slug: "hdpe-bottles", name: "HDPE Bottles", summary: "Durable HDPE bottles for industrial liquids, cleaners, oils and chemical applications.", keywords: ["HDPE Bottle Supplier Ahmedabad", "HDPE Bottle Supplier Gujarat"] },
  { slug: "pet-jars", name: "PET Jars", summary: "PET jars designed for food, personal care and specialty packaging requirements.", keywords: ["Plastic Jar Supplier Gujarat", "PET Jar Supplier Ahmedabad"] },
  { slug: "hdpe-jerry-cans", name: "HDPE Jerry Cans", summary: "Robust jerry cans for safe storage and transport of liquids and industrial fluids.", keywords: ["Jerry Can Supplier Ahmedabad", "HDPE Jerry Can Supplier Gujarat"] },
  { slug: "hdpe-drums", name: "HDPE Drums", summary: "Industrial drums for bulk storage, handling and transportation of liquids and materials.", keywords: ["Plastic Drum Supplier Gujarat", "HDPE Drum Supplier Ahmedabad"] },
  { slug: "plastic-containers", name: "Plastic Containers", summary: "Versatile containers for packaging, storage, retail and logistics operations.", keywords: ["Plastic Container Supplier Ahmedabad", "Plastic Container Supplier Gujarat"] },
  { slug: "reagent-bottles", name: "Reagent Bottles", summary: "Laboratory and reagent bottles with dependable sealing and chemical handling performance.", keywords: ["Reagent Bottle Supplier Ahmedabad", "Chemical Bottle Supplier Gujarat"] },
  { slug: "plastic-pumps", name: "Plastic Pumps", summary: "Dispensing pumps for liquids, household goods and commercial packaging lines.", keywords: ["Plastic Pump Supplier Ahmedabad", "Packaging Pump Supplier Gujarat"] },
  { slug: "measuring-units", name: "Measuring Units", summary: "Measurement and dosing components for industrial, laboratory and household use.", keywords: ["Measuring Unit Supplier Ahmedabad", "Plastic Measuring Unit Supplier Gujarat"] },
  { slug: "caps-and-closures", name: "Caps & Closures", summary: "Reliable closure systems for bottles, jars and containers across packaging lines.", keywords: ["Caps Supplier Ahmedabad", "Closure Supplier Gujarat"] },
];

export const productCategoryHeroContent: Record<string, CategoryHero> = {
  "pet-bottles": {
    eyebrow: "Clear PET bottle solutions",
    title: "PET bottles built for beverages, chemicals and personal care liquids",
    description: "Lightweight PET bottle variants in clear, amber and sport-cap styles for industrial and commercial packaging in Ahmedabad.",
    ctaLabel: "Request PET bottle quote",
    image: "/images/product-pet-bottles.svg",
    imageAlt: "PET bottles from Gautam Plastic",
  },
  "hdpe-bottles": {
    eyebrow: "Durable HDPE packaging",
    title: "HDPE bottles engineered for chemicals, oils and industrial liquids",
    description: "Robust, chemical-safe HDPE bottles suitable for packaging, storage and transportation across Gujarat.",
    ctaLabel: "Request HDPE bottle quote",
    image: "/images/product-hdpe-bottles.svg",
    imageAlt: "HDPE bottles for industrial liquids",
  },
  "pet-jars": {
    eyebrow: "Premium PET jars",
    title: "PET jars for food, cosmetics and specialty packaging",
    description: "Transparent and stackable PET jars ideal for creams, powders and consumer products in Ahmedabad.",
    ctaLabel: "Request PET jar quote",
    image: "/images/product-pet-jars.svg",
    imageAlt: "PET jars for packaging",
  },
  "hdpe-jerry-cans": {
    eyebrow: "High-capacity jerry cans",
    title: "HDPE jerry cans for safe transport and storage of liquids",
    description: "Reliable jerry cans in 5L, 10L and 20L sizes built for chemical, lubricant and agricultural packaging.",
    ctaLabel: "Request jerry can quote",
    image: "/images/product-hdpe-jerry-cans.svg",
    imageAlt: "HDPE jerry cans",
  },
  "hdpe-drums": {
    eyebrow: "Bulk HDPE drums",
    title: "HDPE drums for industrial storage and transportation",
    description: "Sturdy 50L and 100L drums for chemicals, water treatment and bulk packaging needs across Gujarat.",
    ctaLabel: "Request drum quote",
    image: "/images/product-hdpe-drums.svg",
    imageAlt: "HDPE storage drums",
  },
  "plastic-containers": {
    eyebrow: "Versatile plastic containers",
    title: "Plastic containers for storage, retail and logistics",
    description: "Durable containers for food-grade storage, packaging and inventory transport across industrial applications.",
    ctaLabel: "Request container quote",
    image: "/images/product-plastic-containers.svg",
    imageAlt: "Plastic containers",
  },
  "reagent-bottles": {
    eyebrow: "Laboratory reagent bottles",
    title: "Reagent bottles designed for chemical handling and laboratory use",
    description: "Quality reagent bottles for research, pharmaceutical and analytical applications in Ahmedabad.",
    ctaLabel: "Request reagent bottle quote",
    image: "/images/product-reagent-bottles.svg",
    imageAlt: "Reagent bottles for laboratories",
  },
  "plastic-pumps": {
    eyebrow: "Dispensing pump systems",
    title: "Plastic pumps for cosmetics, cleaners and industrial sprayers",
    description: "Trigger sprays, lotion pumps and mist sprayers for reliable dispensing in packaging applications.",
    ctaLabel: "Request pump quote",
    image: "/images/product-plastic-pumps.svg",
    imageAlt: "Plastic pump dispensers",
  },
  "measuring-units": {
    eyebrow: "Accurate measuring units",
    title: "Measuring cups and graduated cylinders for precision dosing",
    description: "Plastic measuring tools for labs, manufacturing and product formulation in Ahmedabad.",
    ctaLabel: "Request measuring unit quote",
    image: "/images/product-measuring-units.svg",
    imageAlt: "Plastic measuring units",
  },
  "caps-and-closures": {
    eyebrow: "Secure caps and closures",
    title: "Caps and closures for bottles, jars and containers",
    description: "Wide range of screw caps, flip tops and child-resistant closures that protect packaged liquids.",
    ctaLabel: "Request closure quote",
    image: "/images/product-caps-closures.svg",
    imageAlt: "Bottle caps and closures",
  },
};

export const industriesServed = [
  "Food & beverage packaging",
  "Pharmaceutical and laboratory packaging",
  "Chemical and industrial liquids",
  "Household and consumer goods",
  "Agriculture and fertilizer packaging",
  "Retail and distribution supply",
];

export const seoKeywords = [
  "PET Bottle Supplier Ahmedabad",
  "HDPE Bottle Supplier Ahmedabad",
  "Plastic Jar Supplier Gujarat",
  "Jerry Can Supplier Ahmedabad",
  "Plastic Drum Supplier Gujarat",
  "Plastic Packaging Supplier Ahmedabad",
  "HDPE PET Bottle Supplier Gujarat",
];

export const internalLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const schemaConfig = {
  organization: {
    name: business.name,
    url: "https://www.gautamplastic.com/",
    description: business.tagline,
    telephone: business.phones.join(", "),
    sameAs: [business.googleBusinessUrl, business.indiamartUrl, business.tradeindiaUrl, business.justdialUrl],
  },
  localBusiness: {
    name: business.fullName,
    description: business.tagline,
    url: "https://www.gautamplastic.com/",
    telephone: business.phones.join(", "),
    address: {
      streetAddress: business.location,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.pincode,
      addressCountry: "IN",
    },
  },
};

export function getProductCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getCategoryHeroBySlug(slug: string) {
  return productCategoryHeroContent[slug] ?? {
    eyebrow: "Product category",
    title: "Industrial packaging products for Ahmedabad and Gujarat",
    description: "Premium product solutions from Gautam Plastic, built for buyers seeking reliable packaging supply.",
    ctaLabel: "Request quote",
    image: "/images/product-placeholder.svg",
    imageAlt: "Packaging product category from Gautam Plastic",
  };
}

export function getPageMeta(page: "home" | "about" | "contact" | "products", slug?: string) {
  if (page === "products" && slug) {
    const category = getProductCategoryBySlug(slug);

    return {
      title: `${category?.name ?? "Packaging Category"} Supplier Ahmedabad | Gautam Plastic`,
      description: category?.summary ?? siteContent.products.description,
      keywords: category?.keywords ?? seoKeywords,
    };
  }

  return {
    title: page === "home" ? "Gautam Plastic | Premium PET & HDPE Packaging Supplier Ahmedabad" : `${page.charAt(0).toUpperCase() + page.slice(1)} | Gautam Plastic`,
    description: page === "home" ? siteContent.home.subheadline : siteContent[page].description,
    keywords: seoKeywords,
  };
}
