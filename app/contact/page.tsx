import { Mail, MapPin, PhoneCall, MessageCircleMore } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentSnapshot } from "@/lib/cms";
import { ContactForm } from "@/app/contact/ContactForm";

export const metadata = {
  title: "Contact Gautam Plastic | PET and HDPE Packaging Supplier Ahmedabad",
  description: "Contact Gautam Plastic for PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures in Ahmedabad, Gujarat.",
};

export default async function ContactPage() {
  const snapshot = await getContentSnapshot();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{snapshot.siteContent.contact.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{snapshot.siteContent.contact.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{snapshot.siteContent.contact.description}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#FF7A00]" /> {snapshot.business.location}</p>
            <p className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-[#FF7A00]" /> {snapshot.business.phones.join(" / ")}</p>
            <p className="flex items-center gap-3"><MessageCircleMore className="h-5 w-5 text-[#FF7A00]" /> WhatsApp: {snapshot.business.whatsapp}</p>
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#FF7A00]" /> {snapshot.business.email}</p>
          </CardContent>
        </Card>

        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="space-y-4 text-slate-700">
            <h2 className="text-2xl font-semibold text-[#003366]">{snapshot.siteContent.contact.ctaLabel}</h2>
            <p>{snapshot.siteContent.contact.body}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
