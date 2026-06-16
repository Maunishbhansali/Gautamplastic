export interface ProductVariant {
  label: string;
  capacity?: string;
}

export interface ProductItem {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  applications: string[];
  material: string;
  seoTitle: string;
  metaDescription: string;
  variants: string[];
  capacities: string[];
  image: string;
  imageAlt?: string;
}
