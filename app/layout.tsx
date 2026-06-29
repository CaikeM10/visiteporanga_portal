import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";

import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visiteporanga.com.br"),

  title: {
    default: "Visite Poranga | Turismo, Cultura e História",
    template: "%s | Visite Poranga",
  },

  description:
    "Descubra os pontos turísticos, a história, a cultura, os eventos e as experiências únicas de Poranga, Ceará. Planeje sua visita e explore a Serra das Matas.",

  keywords: [
    "Poranga",
    "Poranga Ceará",
    "Turismo em Poranga",
    "O que fazer em Poranga",
    "Pontos turísticos de Poranga",
    "História de Poranga",
    "Cultura de Poranga",
    "Serra das Matas",
    "Turismo Ceará",
    "Interior do Ceará",
    "Cachoeiras em Poranga",
    "Igreja Matriz Poranga",
    "Guia turístico Poranga",
  ],

  robots: {
    index: true,
    follow: true,
  },

  category: "travel",

  alternates: {
    canonical: "https://visiteporanga.com.br",
  },

  openGraph: {
    title: "Visite Poranga | Portal Oficial de Turismo",
    description:
      "Descubra Poranga, no coração da Serra das Matas, no Ceará. Natureza, história e cultura sertaneja.",

    url: "https://visiteporanga.com.br",

    siteName: "Visite Poranga",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/images/imagemcompartilhamentolinkk.png",
        width: 1200,
        height: 630,
        alt: "Visite Poranga | Portal Oficial de Turismo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Visite Poranga | Portal Oficial de Turismo",
    description:
      "Descubra a natureza, cultura, história e os principais atrativos turísticos de Poranga.",

    images: ["/images/imagemcompartilhamentolinkk.png"],
  },

  generator: "v0.app",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LW11L5LDWF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-LW11L5LDWF', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <SiteHeader />

        {children}

        <SiteFooter />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
