export const site = {
  name: "Workforce Engineering Limited",
  shortName: "Workforce Engineering",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://workforceengineeringlimited.com",
  description:
    "Ghanaian engineering and construction firm in Accra, established in 2013. Road and building construction, civil engineering, real estate development, transportation and consultancy.",
  tagline: "Engineering progress. Building the future.",
  email: "workforceengineeringlimited@gmail.com",
  phone: "+233547016610",
  city: "Accra",
  country: "GH",
  foundingYear: "2013",
  locale: "en_GH",
  themeColor: "#f05a24",
} as const;

/** Shared Open Graph fields. Next replaces (not merges) a parent's openGraph, so pages spread this. */
export const openGraphBase = { type: "website", locale: site.locale, siteName: site.name } as const;
