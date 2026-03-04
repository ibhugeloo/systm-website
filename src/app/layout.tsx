import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { ConditionalAnalytics } from "@/components/ui/conditional-analytics";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://systm.re";
const title = "SYSTM.RE | Agence Web Premium - La Réunion";
const description =
  "Branding, landing pages et applications : nous accompagnons entrepreneurs et entreprises du concept au lancement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "agence web la réunion",
    "création site internet réunion",
    "landing page réunion",
    "développeur web réunion",
    "MVP application web",
    "branding réunion",
    "SaaS",
    "SYSTM.RE",
  ],
  robots: { index: true, follow: true },
  other: { "theme-color": "#0f0f0f" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "SYSTM.RE",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        {children}
        <CookieBanner />
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
