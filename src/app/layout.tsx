import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Portfolio de Leandro";
const siteDescription =
  "Desarrollador Web Jr. (Argentina). HTML5, CSS3, JS, Vue, React, Tailwind, PHP/Laravel, WordPress. Inglés B2.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    locale: "es_AR",
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
  },
  // ¡Ojo!: SIN manifest, SIN icons, SIN imágenes OG para evitar 404 por ahora
};

export const viewport: Viewport = {
  // Lo que antes estaba mal en metadata va acá:
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-neutral-50 text-neutral-900`}
      >
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <a href="" className="font-semibold tracking-tight">
              {siteName}
            </a>
            <nav className="text-sm">
              <Nav />
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} {siteName}. Hecho con Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
