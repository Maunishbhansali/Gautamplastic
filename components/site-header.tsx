"use client";

import Link from "next/link";
import { Menu, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { business, productCategories } from "@/lib/business";

interface SiteHeaderProps {
  categories?: typeof productCategories;
}

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Brand() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-950 text-sm font-semibold text-white">
        GP
      </span>
      <span className="min-w-0">
        <span className="block truncate text-base font-semibold text-zinc-950">Gautam Plastic</span>
        <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:block">
          Packaging Supplier
        </span>
      </span>
    </Link>
  );
}

export default function SiteHeader({ categories = productCategories }: SiteHeaderProps) {
  const featuredCategories = categories.slice(0, 4);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f7f3eb]/95 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Brand />

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-zinc-700 transition hover:text-zinc-950">
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-zinc-300" />
          {featuredCategories.slice(0, 3).map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Button
            asChild
            variant="outline"
            className="h-9 border-zinc-300 bg-transparent px-4 text-zinc-800 hover:bg-white"
          >
            <Link href="/request-quote">Request Quote</Link>
          </Button>
          <Button asChild className="h-9 bg-[#163c35] px-4 text-white hover:bg-[#0f2f29]">
            <a href={`https://wa.me/91${business.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircleMore className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon-lg" className="border-zinc-300 bg-white/70 text-zinc-950 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88vw] border-zinc-200 bg-[#f7f3eb] p-0 sm:max-w-sm">
            <SheetHeader className="border-b border-zinc-200 p-5 text-left">
              <SheetTitle className="text-zinc-950">Menu</SheetTitle>
            </SheetHeader>
            <div className="p-5">
              <div className="grid gap-2">
                {[...navItems, { label: "Request Quote", href: "/request-quote" }].map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base font-semibold text-zinc-900 shadow-sm">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Popular products</p>
              <div className="mt-3 grid gap-2">
                {featuredCategories.map((category) => (
                  <SheetClose asChild key={category.slug}>
                    <Link href={`/products/${category.slug}`} className="rounded-lg px-1 py-2 text-sm font-medium text-zinc-700">
                      {category.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <a
                href={`https://wa.me/91${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex h-11 items-center justify-center rounded-xl bg-[#163c35] text-sm font-semibold text-white"
              >
                <MessageCircleMore className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
