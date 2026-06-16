import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";

import { business, seoKeywords } from "@/lib/business";
import { getContentSnapshot } from "@/lib/cms";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gautamplastic.com"),
  title: {
    default: "Gautam Plastic | Premium PET & HDPE Packaging Supplier Ahmedabad",
    template: "%s | Gautam Plastic",
  },
  description:
    "Gautam Plastic is a trusted supplier and trader of PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures in Ahmedabad, Gujarat.",
  keywords: seoKeywords,
  alternates: {
    canonical: "https://www.gautamplastic.com/",
  },
  openGraph: {
    title: "Gautam Plastic | Premium PET & HDPE Packaging Supplier Ahmedabad",
    description:
      "25+ years of trusted plastic packaging supply in Ahmedabad, Gujarat for bottles, jars, jerry cans, drums, containers and closures.",
    url: "https://www.gautamplastic.com/",
    siteName: "Gautam Plastic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Plastic | Premium PET & HDPE Packaging Supplier Ahmedabad",
    description:
      "Industrial plastic packaging supplier for PET, HDPE, jars, drums, containers and closures in Ahmedabad, Gujarat.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const snapshot = await getContentSnapshot();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: "https://www.gautamplastic.com/",
    description: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.location,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.pincode,
      addressCountry: "IN",
    },
    telephone: business.phones.join(", "),
    sameAs: [business.googleBusinessUrl, business.indiamartUrl, business.tradeindiaUrl, business.justdialUrl],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.fullName,
    image: "https://www.gautamplastic.com/",
    url: "https://www.gautamplastic.com/",
    telephone: business.phones.join(", "),
    description: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.location,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.pincode,
      addressCountry: "IN",
    },
    areaServed: "Ahmedabad, Gujarat",
    priceRange: "₹₹",
    sameAs: [business.googleBusinessUrl, business.indiamartUrl, business.tradeindiaUrl, business.justdialUrl],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader categories={snapshot.productCategories} />
        {children}
      </body>
    </html>
  );
}
