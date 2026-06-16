import type { FaqItem } from "@/types/faq";
import { faqItems } from "@/lib/data/faq";

export { faqItems };

export function getFaqItems(): FaqItem[] {
  return faqItems;
}
