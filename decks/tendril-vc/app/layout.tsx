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
  title: { default: THEME.title, template: `%s · ${THEME.shortTitle}` },
  description: THEME.description,
  authors: THEME.authors,
  robots: { index: false, follow: false },
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
