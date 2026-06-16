import type { PolicyPage } from "@/types/policy";

export const policyPages: PolicyPage[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy | Gautam Plastic",
    description: "How Gautam Plastic collects, uses and protects data for its B2B plastic packaging website.",
    content: [
      "Gautam Plastic respects your privacy and only collects information necessary to respond to enquiries and provide customer support.",
      "We do not share personal information with third parties except where required to process an enquiry or comply with law.",
      "Data collected via our contact and quote forms is used to respond to requests and maintain business communications.",
    ],
  },
  {
    slug: "terms",
    title: "Terms and Conditions | Gautam Plastic",
    description: "Terms of use for Gautam Plastic’s website and enquiry services for industrial packaging buyers.",
    content: [
      "By using this website, you agree to share accurate enquiry details and accept that Gautam Plastic acts as a supplier and trader for packaging products.",
      "All product descriptions and availability details are provided for guidance. Final supply terms are confirmed through direct enquiry and quotation.",
      "Gautam Plastic is not responsible for third-party decisions made based on website information and recommends direct discussion for order finalization.",
    ],
  },
  {
    slug: "shipping-policy",
    title: "Shipping Policy | Gautam Plastic",
    description: "Overview of shipping, delivery and logistics support for Gautam Plastic packaging orders.",
    content: [
      "Delivery timelines are determined by order size, product availability and destination. We work with logistics partners across Ahmedabad, Gujarat and India.",
      "Shipping charges are calculated separately based on the chosen service and volume of packaging materials.",
      "For urgent enquiries or bulk supply, contact us directly so we can recommend the best delivery option for your order.",
    ],
  },
  {
    slug: "return-policy",
    title: "Return Policy | Gautam Plastic",
    description: "Return and replacement guidance for packaging products supplied by Gautam Plastic.",
    content: [
      "Gautam Plastic evaluates return requests on a case-by-case basis. Please contact us promptly if there is an issue with supplied packaging products.",
      "Returns may be accepted for damaged or incorrect products after inspection and agreement with our team.",
      "We aim to resolve product concerns through replacement, correction or support rather than lengthy returns processes.",
    ],
  },
];
