import { defineField, defineType } from "sanity";

export const productItem = defineType({
  name: "productItem",
  title: "Product Item",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "productCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text" }),
    defineField({ name: "applications", title: "Applications", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "material", title: "Material", type: "string" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
    defineField({ name: "variants", title: "Variants", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "capacities", title: "Capacities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Image Alt Text", type: "string" }),
  ],
});
