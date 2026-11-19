import type { Metadata, Viewport } from "next";
import { openGraphBase, site } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Engineering & Construction in Accra, Ghana`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "construction company Ghana",
    "engineering firm Accra",
    "road construction Ghana",
    "building construction Accra",
    "civil engineering Ghana",
    "real estate development Ghana",
    "construction consultancy Accra",
    "Workforce Engineering Limited",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "construction",
  openGraph: {
    ...openGraphBase,
    title: `${site.name} | Engineering & Construction in Accra, Ghana`,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Engineering & Construction in Accra, Ghana`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/workforce-logo.svg`,
  image: `${site.url}/opengraph-image.jpg`,
  description: site.description,
  slogan: site.tagline,
  foundingDate: site.foundingYear,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
  areaServed: { "@type": "Country", name: "Ghana" },
  knowsAbout: ["Road construction", "Building construction", "Civil engineering", "Real estate development", "Transportation services", "Construction consultancy"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
