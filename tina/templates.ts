import type { TinaField } from "tinacms";
export function clientFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "client",
      label: "Client",
      required: true,
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "image",
      name: "logotype",
      label: "Logotype",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "partners",
      label: "Partners",
      list: true,
    },
    {
      type: "string",
      name: "year",
      label: "Year",
    },
    {
      type: "object",
      name: "links",
      label: "links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "string",
      name: "ref",
      label: "Translation ID",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
  ] as TinaField[];
}
export function crewFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "lang",
      label: "lang",
    },
    {
      type: "string",
      name: "job",
      label: "job",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "phone",
      label: "phone",
    },
    {
      type: "string",
      name: "mail",
      label: "mail",
    },
  ] as TinaField[];
}
export function newsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Smaller image",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "object",
      name: "links",
      label: "Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "string",
      name: "ref",
      label: "Translation ID",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
    {
      type: "string",
      name: "clients",
      label: "Client",
      list: true,
    },
  ] as TinaField[];
}
export function themeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "icon",
      label: "Icon",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      required: true,
    },
    {
      type: "object",
      name: "items",
      label: "Bullet points",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "faq",
      label: "faq",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "question",
        },
        {
          type: "string",
          name: "answer",
          label: "answer",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "ref",
      label: "Translation ID",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
      required: true,
    },
  ] as TinaField[];
}
