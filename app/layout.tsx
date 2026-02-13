import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flavusbusiness.com"),
  title: {
    default: "Flavus Business Services — Corporate Advisory & Document Clearing in UAE",
    template: "%s | Flavus Business Services",
  },
  description:
    "Flavus Business Services provides premium corporate advisory and document clearing solutions in the UAE — from company formation and Golden Visa support to residency management, legalization and certified translation.",
  keywords: [
    "Flavus Business Services",
    "corporate advisory UAE",
    "document clearing Dubai",
    "company formation UAE",
    "Golden Visa services",
    "residency management UAE",
    "PRO services Dubai",
  ],
  authors: [{ name: "Flavus Business Services" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Flavus Business Services — Corporate Advisory & Document Clearing in UAE",
    description:
      "End‑to‑end corporate advisory and document clearing services in the UAE: company setup, Golden Visa, residency, legalization, translation and ongoing corporate support.",
    siteName: "Flavus Business Services",
    images: [
      {
        url: "/about-image.png",
        width: 1200,
        height: 630,
        alt: "Flavus Business Services — corporate advisory and document clearing in the UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavus Business Services — Corporate Advisory & Document Clearing in UAE",
    description:
      "Premium corporate advisory and document clearing solutions in the UAE for entrepreneurs, investors and businesses.",
    images: ["/about-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
