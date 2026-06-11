import type { Metadata, Viewport } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The DRD-3 — A Three-Chamber Dynamic Release Device",
    template: "%s · DRD-3",
  },
  description:
    "Clean-sheet three-chamber dynamic release device for simultaneous drug-release kinetics and in-situ infection challenge. CAD walkthrough by Filippo Fonseca for the Harris Orthopaedics Laboratory polyethylene meeting (MGB / HOL / HMS).",
  authors: [{ name: "Filippo Fonseca", url: "mailto:ffonseca1@mgh.harvard.edu" }],
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#16767B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable}`}>
      <body className="min-h-svh bg-background text-ink antialiased">{children}</body>
    </html>
  );
}
