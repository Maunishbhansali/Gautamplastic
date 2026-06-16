import type { ProductItem } from "@/types/product";
import { productCatalog } from "@/lib/data/products";

export { productCatalog };
export type { ProductItem };

export function getProductsByCategory(categorySlug: string) {
  return productCatalog.filter((product) => product.category === categorySlug);
}

export function getProductBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}

export function getProductCategorySlugs() {
  return Array.from(new Set(productCatalog.map((product) => product.category)));
}
