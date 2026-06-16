import type { BusinessProfile, CategoryHero, ProductCategory, SiteContentModel } from "@/lib/business";
import type { ProductItem } from "@/types/product";

export interface SanityBusinessDocument {
  _type: "businessProfile";
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
  urls: {
    googleBusiness: string;
    indiamart: string;
    tradeindia: string;
    justdial: string;
  };
}

export interface SanityCategoryDocument {
  _type: "productCategory";
  slug: { current: string };
  name: string;
  summary: string;
  keywords: string[];
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    ctaLabel: string;
    image: { asset: { _ref: string } } | string;
    imageAlt: string;
  };
}

export interface SanityProductDocument {
  _type: "productItem";
  slug: { current: string };
  name: string;
  category: { slug: { current: string } };
  shortDescription: string;
  applications: string[];
  material: string;
  seoTitle: string;
  metaDescription: string;
  variants: string[];
  capacities: string[];
  image: { asset: { _ref: string } } | string;
  imageAlt?: string;
}

export interface SanitySiteSettingsDocument {
  _type: "siteSettings";
  siteContent: SiteContentModel;
  business: SanityBusinessDocument;
}

export function normalizeSanityBusiness(source: Partial<SanityBusinessDocument>): BusinessProfile {
  return {
    name: source.name ?? "Gautam Plastic",
    fullName: source.fullName ?? "Gautam Plastic - HDPE & PET Bottle, Jar, Jerry Can, Drum, Container, Cap & Closure Packaging Supplier",
    tagline: source.tagline ?? "Premium plastic packaging supplier for industrial and commercial buyers.",
    established: source.established ?? "25+ Years",
    businessType: source.businessType ?? "Supplier and trader (not manufacturer)",
    industry: source.industry ?? "Plastic packaging supplier",
    location: source.location ?? "Opp. Torrent Power 33 KV Substation, Amdupura, Saraspur, Ahmedabad, Gujarat - 382345",
    city: source.city ?? "Ahmedabad",
    state: source.state ?? "Gujarat",
    pincode: source.pincode ?? "382345",
    phones: source.phones ?? ["9898592959", "9898073169"],
    whatsapp: source.whatsapp ?? "9427576831",
    email: source.email ?? "sales@gautamplastic.com",
    googleBusinessUrl: source.urls?.googleBusiness ?? "https://www.google.com/search?sca_esv=2aa300c80f7be1f4&cs=1&output=search&kgmid=/g/11h_tvtnhn&q=Gautam+Plastic+-+HDPE+%26+PET+Bottle,+Jar,+Jerry+Can,+Drum,+Container,+Cap+%26+Closure+packaging+Supplier",
    indiamartUrl: source.urls?.indiamart ?? "https://www.indiamart.com/gautam-plastic-ahmedabad/",
    tradeindiaUrl: source.urls?.tradeindia ?? "https://www.tradeindia.com/gautam-plastic-29912212/",
    justdialUrl: source.urls?.justdial ?? "https://www.justdial.com/Ahmedabad/Gautam-Plastic-Opposite-Torrent-Power-33-Kv-Substation-Saraspur-Ahmedabad-Gujarat-Amdupura/079PXX79-XX79-191105173728-N8Q1_BZDET",
  };
}

export function normalizeSanityCategory(source: Partial<SanityCategoryDocument>): ProductCategory {
  return {
    slug: source.slug?.current ?? "uncategorized",
    name: source.name ?? "Uncategorized",
    summary: source.summary ?? "Packaging products for industrial and commercial use.",
    keywords: source.keywords ?? [],
  };
}

export function normalizeSanityProduct(source: Partial<SanityProductDocument>): ProductItem {
  return {
    name: source.name ?? "Plastic Product",
    slug: source.slug?.current ?? "plastic-product",
    category: source.category?.slug.current ?? "plastic-containers",
    shortDescription: source.shortDescription ?? "Premium plastic packaging product.",
    applications: source.applications ?? [],
    material: source.material ?? "Plastic",
    seoTitle: source.seoTitle ?? source.name ?? "Plastic Product Supplier Ahmedabad | Gautam Plastic",
    metaDescription: source.metaDescription ?? "Reliable packaging solution from Gautam Plastic.",
    variants: source.variants ?? [],
    capacities: source.capacities ?? [],
    image: typeof source.image === "string" ? source.image : "/images/product-placeholder.svg",
    imageAlt: source.imageAlt,
  };
}

export function normalizeSanityCategoryHero(source: Partial<SanityCategoryDocument>): CategoryHero | undefined {
  const hero = source.hero;

  if (!hero) {
    return undefined;
  }

  return {
    eyebrow: hero.eyebrow ?? "Product category",
    title: hero.headline ?? source.name ?? "Industrial packaging products",
    description: hero.description ?? source.summary ?? "Premium packaging products from Gautam Plastic.",
    ctaLabel: hero.ctaLabel ?? "Request quote",
    image: typeof hero.image === "string" ? hero.image : "/images/product-placeholder.svg",
    imageAlt: hero.imageAlt ?? source.name ?? "Packaging product category from Gautam Plastic",
  };
}

export function normalizeSanityContent(data: Record<string, unknown> | undefined) {
  const source = data ?? {};
  const business = normalizeSanityBusiness((source.business as Partial<SanityBusinessDocument>) ?? {});
  const siteContent = source.siteContent as SiteContentModel | undefined;
  const productCategories: ProductCategory[] = Array.isArray(source.productCategories)
    ? (source.productCategories as Partial<SanityCategoryDocument>[]).map(normalizeSanityCategory)
    : [];
  const categoryHeroes = Array.isArray(source.productCategories)
    ? Object.fromEntries(
        (source.productCategories as Partial<SanityCategoryDocument>[])
          .map((category) => [category.slug?.current, normalizeSanityCategoryHero(category)])
          .filter((entry): entry is [string, CategoryHero] => Boolean(entry[0] && entry[1])),
      )
    : {};

  const productCatalog: ProductItem[] = Array.isArray(source.productCatalog)
    ? (source.productCatalog as Partial<SanityProductDocument>[]).map(normalizeSanityProduct)
    : [];

  return {
    business,
    siteContent: siteContent ?? {},
    productCategories,
    categoryHeroes,
    industriesServed: Array.isArray(source.industriesServed) ? (source.industriesServed as string[]) : [],
    seoKeywords: Array.isArray(source.seoKeywords) ? (source.seoKeywords as string[]) : [],
    productCatalog,
  };
}
