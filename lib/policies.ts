import type { PolicyPage } from "@/types/policy";
import { policyPages } from "@/lib/data/policies";

export { policyPages };

export function getPolicyPage(slug: string): PolicyPage | undefined {
  return policyPages.find((page) => page.slug === slug);
}
