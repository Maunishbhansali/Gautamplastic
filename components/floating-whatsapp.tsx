import { MessageCircleMore } from "lucide-react";

import { business } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/91${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Gautam Plastic on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.9)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1fbd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25d366]/35"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
