import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: {
    default: "Software Builder - Build Your Software with Ease",
    template: "%s | Software Builder"
  },
  description: "Build your software efficiently with Software Builder. Modern development tools and frameworks for seamless software creation.",
  keywords: ["software development", "builder", "development tools", "coding", "programming"],
  authors: [{ name: "Divyansh Pandey" }],
  openGraph: {
    title: "Software Builder",
    description: "Build your software efficiently with Software Builder",
    type: "website",
    siteName: "Software Builder",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Builder",
    description: "Build your software efficiently with Software Builder",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://softwarebuilder.in/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
