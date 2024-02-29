import type { TinaField } from "tinacms";
export function clientFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
      description: "Publication date",
    },
    {
      type: "string",
      name: "client",
      label: "Client",
      required: true,
      description: "Client name",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
      description: "Displayed on front page",
    },
    {
      type: "image",
      name: "logotype",
      label: "Logotype",
      description: "Logotype. SVG-format 478x318 px.",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      description: "Main image. Recommended size 1200x629 px, 72 dpi."
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
      description: "Bild 560px bred, till nyhetsbrev.",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      description: "Short description shown in lists. Max 250 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 250) {
            return 'Text can not be more than 250 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      description: "Max 300 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 300) {
            return 'Text can not be more than 300 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "string",
      name: "partners",
      label: "Partners",
      list: true,
      description: "Project partners.",
    },
    {
      type: "string",
      name: "year",
      label: "Year",
      description: "Active years. For example 2020- or 2020-2022."
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
      description: "ID för texter med samma innehåll men olika språk. Använd små bokstäver och bindestreck."
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
      required: true,
    },
    {
      type: "reference",
      name: "categories",
      label: "Categories",
      collections: ['themes'],
      description: "Select a theme with the same language as this post."
    },
  ] as TinaField[];
}
export function crewFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
      description: "Publication date",
    },
    {
      type: "reference",
      name: "categories",
      label: "Categories",
      collections: ['themes'],
      description: "Select a theme with the same language as this post."
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
      type: "boolean",
      name: "featured",
      label: "Featured",
      description: "Displayed on front page",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      description: "Main image. Recommended size 1200x629 px, 72 dpi.",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Smaller image",
      description: "Bild 560px bred, till nyhetsbrev.",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      description: "Short description shown in lists. Max 250 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 250) {
            return 'Text can not be more than 250 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      description: "Max 300 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 300) {
            return 'Text can not be more than 300 character long.'
          }
        },
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
      description: "ID för texter med samma innehåll men olika språk. Använd små bokstäver och bindestreck.",
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
      description: "Publication date",
    },
    {
      type: "reference",
      name: "categories",
      label: "Categories",
      collections: ['themes'],
      description: "Select a theme with the same language as this post."
    },
    {
      type: "reference",
      name: "clients",
      label: "Client",
      collections: ['clients']
    },
  ] as TinaField[];
}
export function themeFields() {
  return [
    {
      type: "image",
      name: "icon",
      label: "Icon",
      description: "Icon. SVG or PNG in 512x512 px.",
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
      description: "Short description shown in lists. Max 250 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 250) {
            return 'Text can not be more than 250 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      description: "Max 300 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 300) {
            return 'Text can not be more than 300 character long.'
          }
        },
      },
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
      description: "ID för texter med samma innehåll men olika språk. Använd små bokstäver och bindestreck.",
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
