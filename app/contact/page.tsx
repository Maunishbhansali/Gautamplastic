import { Mail, MapPin, MessageCircleMore, PhoneCall, Route } from "lucide-react";

import { getContentSnapshot } from "@/lib/cms";
import { ContactForm } from "@/app/contact/ContactForm";

export const metadata = {
  title: "Contact Gautam Plastic | PET and HDPE Packaging Supplier Ahmedabad",
  description: "Contact Gautam Plastic for PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures in Ahmedabad, Gujarat.",
};

export default async function ContactPage() {
  const snapshot = await getContentSnapshot();
  const mapQuery = encodeURIComponent(snapshot.business.location);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  const contactCards = [
    {
      label: "Call",
      value: snapshot.business.phones.join(" / "),
      href: `tel:${snapshot.business.phones[0]}`,
      icon: PhoneCall,
    },
    {
      label: "WhatsApp",
      value: snapshot.business.whatsapp,
      href: `https://wa.me/91${snapshot.business.whatsapp}`,
      icon: MessageCircleMore,
    },
    {
      label: "Email",
      value: snapshot.business.email,
      href: `mailto:${snapshot.business.email}`,
      icon: Mail,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="relative isolate overflow-hidden bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.24),transparent_30%),linear-gradient(135deg,#101f1c,#163c35)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="animate-rise-in">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{snapshot.siteContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Talk to a packaging specialist in Ahmedabad.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">{snapshot.siteContent.contact.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#163c35]"
                >
                  <Icon className="h-5 w-5 text-amber-300 transition group-hover:text-[#163c35]" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] opacity-70">{item.label}</p>
                  <p className="mt-2 break-words text-sm font-semibold">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#efe7d8] text-zinc-950">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Location</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Gautam Plastic, Ahmedabad</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{snapshot.business.location}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Live map</p>
                <p className="mt-1 text-sm text-zinc-600">Open the map, zoom, or get directions.</p>
              </div>
              <a
                href={snapshot.business.googleBusinessUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Directions
                <Route className="ml-2 h-4 w-4" />
              </a>
            </div>
            <iframe
              title="Gautam Plastic location map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[430px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="space-y-6">
          <ContactForm />
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Before you send</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{snapshot.siteContent.contact.ctaLabel}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{snapshot.siteContent.contact.body}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Product", "Quantity", "Capacity"].map((item) => (
                <span key={item} className="rounded-xl bg-[#efe7d8] px-4 py-3 text-sm font-semibold text-zinc-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
