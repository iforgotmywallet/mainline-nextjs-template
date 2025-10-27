import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "StockNotes - AI Stock Analysis Reports",
    template: "%s | StockNotes",
  },
  description:
    "Generate comprehensive AI-powered stock analysis reports with real-time data and multi-agent debate-style analysis for any stock ticker.",
  keywords: [
    "stock analysis",
    "AI reports",
    "stock research",
    "financial analysis",
    "stock ticker",
    "investment research",
    "market analysis",
    "stock reports",
    "financial data",
    "investment tools",
    "stock insights",
    "market research",
    "equity analysis",
  ],
  authors: [{ name: "StockNotes" }],
  creator: "StockNotes",
  publisher: "StockNotes",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "StockNotes - AI Stock Analysis Reports",
    description:
      "Generate comprehensive AI-powered stock analysis reports with real-time data and multi-agent debate-style analysis for any stock ticker.",
    siteName: "StockNotes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StockNotes - AI Stock Analysis Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StockNotes - AI Stock Analysis Reports",
    description:
      "Generate comprehensive AI-powered stock analysis reports with real-time data and multi-agent debate-style analysis for any stock ticker.",
    images: ["/og-image.jpg"],
    creator: "@stocknotes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
