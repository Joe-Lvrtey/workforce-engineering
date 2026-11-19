import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workforce Engineering Limited",
  description: "Construction built on trust, care and lasting quality in Accra, Ghana.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
