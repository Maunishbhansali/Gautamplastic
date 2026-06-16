import { defineField, defineType } from "sanity";

export const businessProfile = defineType({
  name: "businessProfile",
  title: "Business Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "fullName", title: "Full Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "text" }),
    defineField({ name: "established", title: "Established", type: "string" }),
    defineField({ name: "businessType", title: "Business Type", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "location", title: "Location", type: "text" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "state", title: "State", type: "string" }),
    defineField({ name: "pincode", title: "Pincode", type: "string" }),
    defineField({ name: "phones", title: "Phone Numbers", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "whatsapp", title: "WhatsApp Number", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "urls",
      title: "Business URLs",
      type: "object",
      fields: [
        defineField({ name: "googleBusiness", title: "Google Business URL", type: "url" }),
        defineField({ name: "indiamart", title: "IndiaMART URL", type: "url" }),
        defineField({ name: "tradeindia", title: "TradeIndia URL", type: "url" }),
        defineField({ name: "justdial", title: "Justdial URL", type: "url" }),
      ],
    }),
  ],
});
