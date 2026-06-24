"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

interface QuoteFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  quantity: string;
  details: string;
}

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 shadow-sm transition focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/15";

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
    <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm md:p-7">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Quote form</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Request a quote</h2>

      {status ? (
        <div className={`mt-5 rounded-xl border p-4 text-sm ${status.type === "success" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-rose-300 bg-rose-50 text-rose-700"}`}>
          {status.message}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-zinc-700">Name*</span>
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className={inputClass} type="text" required />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-zinc-700">Email*</span>
            <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className={inputClass} type="email" required />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-zinc-700">Phone</span>
            <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className={inputClass} type="tel" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-zinc-700">Company</span>
            <input value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} className={inputClass} type="text" />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-zinc-700">Product interest</span>
          <input value={form.productInterest} onChange={(event) => setForm({ ...form, productInterest: event.target.value })} className={inputClass} type="text" />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-zinc-700">Estimated quantity</span>
          <input value={form.quantity} onChange={(event) => setForm({ ...form, quantity: event.target.value })} className={inputClass} type="text" />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-zinc-700">Details*</span>
          <textarea value={form.details} onChange={(event) => setForm({ ...form, details: event.target.value })} className={`${inputClass} h-36 resize-none`} required />
        </label>

        <Button className="h-11 bg-zinc-950 px-5 text-white hover:bg-zinc-800" type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit request"}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
