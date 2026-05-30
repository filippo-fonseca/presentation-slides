import type { Metadata, Viewport } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";
import { THEME } from "@/lib/theme";

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
  title: { default: THEME.title, template: `%s · ${THEME.shortTitle}` },
  description: THEME.description,
  authors: THEME.authors,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: THEME.themeColor,
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
