import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Nav from "./nav";
import TopControls from "./top-controls";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const siteName = "Portfolio";
const siteDescription =
  "Desarrollador Web Jr. (Argentina). HTML5, CSS3, JS, Vue, React, Tailwind, PHP/Laravel, WordPress. Inglés B2.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName, title: siteName, description: siteDescription, locale: "es_AR" },
  twitter: { card: "summary", title: siteName, description: siteDescription },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

// ...imports iguales
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh themed-bg`}>
      {/* Fondo único para todo el sitio */}
      <div className="bg-canvas" aria-hidden />
      <div className="bg-noise" aria-hidden />
      <Providers>
          <header className="sticky top-0 z-40 border-b/50 bg-transparent backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-5 py-3 grid grid-cols-[1fr_auto_1fr] items-center">
              <div />
              <nav className="justify-self-center"><Nav /></nav>
              <div className="justify-self-end"><TopControls /></div>
            </div>
          </header>
          {/* más aire vertical */}
          <main className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            {children}
          </main>

          <footer className="mt-20 border-t/50">
            <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Portfolio.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

