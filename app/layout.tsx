import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import MotionProvider from "@/components/ui/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e0f0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.summary,
  // No production deployment URL is known yet — do not invent one.
  // When deploying, set metadataBase to the real URL.
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.summary,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    // Ansh has no X/Twitter account — these tags only control how a
    // link preview looks when *others* share the portfolio URL.
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-accent focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-accent"
        >
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
