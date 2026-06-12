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
