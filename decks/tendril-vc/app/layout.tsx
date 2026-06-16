import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { THEME } from "@/lib/theme";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tendrilrobotics.xyz"),
  title: { default: THEME.title, template: `%s · ${THEME.shortTitle}` },
  description: THEME.description,
  authors: THEME.authors,
  applicationName: THEME.shortTitle,
  keywords: [
    "Tendril",
    "agriculture",
    "farm operating system",
    "agentic AI",
    "agricultural robotics",
    "chemical-free farming",
    "precision agriculture",
  ],
  robots: { index: false, follow: false },
  openGraph: {
    title: THEME.title,
    description: THEME.description,
    siteName: THEME.shortTitle,
    type: "website",
    images: [{ url: "/images/field-hero.jpg", alt: "Tendril — the operating system for the open field" }],
  },
  twitter: {
    card: "summary_large_image",
    title: THEME.title,
    description: THEME.description,
    images: ["/images/field-hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b07",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${spaceMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
