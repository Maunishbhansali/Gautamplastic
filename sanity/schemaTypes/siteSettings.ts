import { defineField, defineType } from "sanity";

const sectionFields = [
  defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
  defineField({ name: "title", title: "Title", type: "string" }),
  defineField({ name: "description", title: "Description", type: "text" }),
];

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteContent",
      title: "Site Content",
      type: "object",
      fields: [
        defineField({
          name: "home",
          title: "Home",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
            defineField({ name: "headline", title: "Headline", type: "string" }),
            defineField({ name: "subheadline", title: "Subheadline", type: "text" }),
            defineField({
              name: "stats",
              title: "Stats",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "value", title: "Value", type: "string" }),
                  ],
                },
              ],
            }),
            defineField({ name: "whyChooseUs", title: "Why Choose Us", type: "object", fields: sectionFields }),
            defineField({ name: "industries", title: "Industries", type: "object", fields: sectionFields }),
            defineField({
              name: "cta",
              title: "CTA",
              type: "object",
              fields: [
                defineField({ name: "heading", title: "Heading", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "about",
          title: "About",
          type: "object",
          fields: [
            ...sectionFields,
            defineField({ name: "body", title: "Body", type: "array", of: [{ type: "text" }] }),
            defineField({ name: "summaryTitle", title: "Summary Title", type: "string" }),
            defineField({ name: "summaryText", title: "Summary Text", type: "text" }),
          ],
        }),
        defineField({
          name: "contact",
          title: "Contact",
          type: "object",
          fields: [...sectionFields, defineField({ name: "body", title: "Body", type: "text" }), defineField({ name: "ctaLabel", title: "CTA Label", type: "string" })],
        }),
        defineField({ name: "products", title: "Products", type: "object", fields: sectionFields }),
      ],
    }),
    defineField({ name: "industriesServed", title: "Industries Served", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "seoKeywords", title: "SEO Keywords", type: "array", of: [{ type: "string" }] }),
  ],
});
