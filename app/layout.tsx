import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
  twitter: {
    card: "summary_large_image",
    title: "Visite Poranga",
    description:
      "Descubra a história, cultura e os atrativos turísticos de Poranga.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "travel",
  openGraph: {
    title: "Visite Poranga | Portal Oficial de Turismo",
    description:
      "Descubra Poranga, no coração da Serra das Matas, no Ceará. Natureza, história e cultura sertaneja.",
    type: "website",
    locale: "pt_BR",
    siteName: "Visite Poranga",
    images: [
      {
        url: "/images/brasão.jpg",
        width: 1200,
        height: 630,
        alt: "Visite Poranga",
      },
    ],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
