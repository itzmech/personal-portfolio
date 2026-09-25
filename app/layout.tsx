import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/ui/MotionProvider";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "Ansh — CS Student & Developer",
  description:
    "Computer science student at VIT-AP building web applications and learning cybersecurity, web security, Linux, and penetration testing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ansh — CS Student & Developer",
    description:
      "Computer science student at VIT-AP building web applications and learning cybersecurity, web security, Linux, and penetration testing.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Ansh's Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ansh — CS Student & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh — CS Student & Developer",
    description:
      "Computer science student at VIT-AP building web applications and learning cybersecurity, web security, Linux, and penetration testing.",
    images: ["/images/og-image.png"],
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
