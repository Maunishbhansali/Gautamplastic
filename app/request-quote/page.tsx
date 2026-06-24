import { MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { business } from "@/lib/business";
import { QuoteForm } from "@/app/request-quote/QuoteForm";

export const metadata = {
  title: "Request Quote | Gautam Plastic",
  description: "Request a custom quote for PET bottles, HDPE bottles, jars, drums, containers, closures and industrial packaging.",
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Request quote</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Request a custom packaging quote.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">
            Share your product, capacity and quantity details so Gautam Plastic can prepare a practical supply recommendation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="space-y-4">
          {[
            { label: "Phone", value: business.phones.join(" / "), icon: PhoneCall },
            { label: "WhatsApp", value: business.whatsapp, icon: MessageCircleMore },
            { label: "Location", value: business.location, icon: MapPin },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <Icon className="h-5 w-5 text-amber-600" />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">{item.value}</p>
              </div>
            );
          })}
        </div>

        <QuoteForm />
      </section>
    </main>
  );
}
