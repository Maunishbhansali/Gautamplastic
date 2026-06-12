import { Mail, MapPin, PhoneCall, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contentSnapshot } from "@/lib/cms";

export const metadata = {
  title: "Contact Gautam Plastic | PET and HDPE Packaging Supplier Ahmedabad",
  description: "Contact Gautam Plastic for PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures in Ahmedabad, Gujarat.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{contentSnapshot.siteContent.contact.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{contentSnapshot.siteContent.contact.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{contentSnapshot.siteContent.contact.description}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Get in touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#FF7A00]" /> {contentSnapshot.business.location}</p>
            <p className="flex items-center gap-3"><PhoneCall className="h-5 w-5 text-[#FF7A00]" /> {contentSnapshot.business.phones.join(" / ")}</p>
            <p className="flex items-center gap-3"><MessageCircleMore className="h-5 w-5 text-[#FF7A00]" /> WhatsApp: {contentSnapshot.business.whatsapp}</p>
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#FF7A00]" /> {contentSnapshot.business.email}</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">{contentSnapshot.siteContent.contact.ctaLabel}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>{contentSnapshot.siteContent.contact.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#003366] text-white hover:bg-[#00254f]">Request Quote</Button>
              <Button variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">WhatsApp Us</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
