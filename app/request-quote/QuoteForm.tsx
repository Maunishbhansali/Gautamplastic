"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuoteFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  quantity: string;
  details: string;
}

export function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    quantity: "",
    details: "",
  });
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const response = await fetch("/api/request-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    setSubmitting(false);

    if (response.ok && result.success) {
      setStatus({ type: "success", message: result.message });
      setForm({ name: "", email: "", phone: "", company: "", productInterest: "", quantity: "", details: "" });
    } else {
      setStatus({ type: "error", message: result.error ?? "Unable to submit quote request." });
    }
  }

  return (
    <Card className="border-slate-200 bg-slate-50 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-[#003366]">Request a quote</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-slate-700">
        {status ? (
          <div className={`rounded-2xl border p-4 ${status.type === "success" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-rose-300 bg-rose-50 text-rose-700"}`}>
            {status.message}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name*</span>
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
                type="text"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email*</span>
              <input
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
                type="email"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Phone</span>
              <input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
                type="tel"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Company</span>
              <input
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
                type="text"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Product interest</span>
            <input
              value={form.productInterest}
              onChange={(event) => setForm({ ...form, productInterest: event.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Estimated quantity</span>
            <input
              value={form.quantity}
              onChange={(event) => setForm({ ...form, quantity: event.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Details*</span>
            <textarea
              value={form.details}
              onChange={(event) => setForm({ ...form, details: event.target.value })}
              className="mt-2 h-36 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#003366] focus:outline-none"
              required
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-[#003366] text-white hover:bg-[#00254f]" type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
