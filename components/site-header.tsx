import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/business";

interface SiteHeaderProps {
  categories?: typeof productCategories;
}

export default function SiteHeader({ categories = productCategories }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#003366] text-base font-semibold text-white shadow-sm">GP</span>
          <span>
            <span className="block text-lg font-semibold text-[#003366]">Gautam Plastic</span>
            <span className="block text-xs uppercase tracking-[0.25em] text-slate-500">Plastic Packaging Supplier</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/products" className="text-sm font-medium text-slate-700 hover:text-[#003366]">Products</Link>
          {categories.slice(0, 4).map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="text-sm font-medium text-slate-700 hover:text-[#003366]">
              {category.name}
            </Link>
          ))}
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-[#003366]">About</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-[#003366]">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white" asChild>
            <Link href="/contact">Request Quote</Link>
          </Button>
          <Button asChild className="bg-[#FF7A00] text-white hover:bg-[#e56e00]">
            <a href="https://wa.me/919428..." target="_blank" rel="noreferrer">WhatsApp Us</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
