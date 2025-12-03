import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

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
  metadataBase: new URL("https://softwarebuilder.in"),
  title: {
    default: "Software Builder — Custom Software & Web Development Services",
    template: "%s | Software Builder"
  },
  description:
    "Software Builder provides professional freelance software and web development services at affordable prices. Get high-quality, scalable, and modern solutions tailored to your business needs.",
  keywords: [
  // Core brand and intent
  "software builder",
  "software builder India",
  "software builder freelance",
  "custom software solutions",
  "software development services",
  "hire freelance developer",
  "affordable software development",

  // Web & app development
  "web development",
  "web design",
  "responsive website development",
  "Next.js development",
  "React developer",
  "frontend developer",
  "backend developer",
  "full stack development",
  "app development",
  "mobile app development",
  "Android app development",
  "iOS app development",
  "progressive web apps",

  // Programming languages & technologies
  "JavaScript development",
  "TypeScript development",
  "Python development",
  "Node.js developer",
  "Express.js development",
  "API development",
  "REST API developer",
  "GraphQL development",
  "database design",
  "MySQL development",
  "PostgreSQL",
  "MongoDB development",
  "Firebase development",

  // Freelance & business intent
  "freelance software developer",
  "freelance web developer",
  "hire developer online",
  "custom website builder",
  "personal portfolio website developer",
  "business website design",
  "website maintenance services",
  "software support and upgrades",
  "project outsourcing",
  "affordable web developer",

  // Tools & frameworks
  "React.js development",
  "Next.js apps",
  "Tailwind CSS developer",
  "UI UX developer",
  "modern web frameworks",
  "automation scripts",
  "API integrations",

  // SEO & performance focus
  "fast website development",
  "SEO optimized websites",
  "performance optimization",
  "secure web applications",

  // Niche & regional targeting (optional)
  "freelance developer India",
  "software builder India",
  "hire web developer India",
  "freelance web developer India",
  "software development company India",
  "low cost software development",
  "affordable web solutions India",
],

  authors: [{ name: "Software Builder", url: "https://softwarebuilder.in" }],
  creator: "Software Builder",
  publisher: "Software Builder",

  openGraph: {
    title: "Software Builder — Custom Software & Web Development Services",
    description:
      "Software Development Service for affordable, modern, and high-quality web and app development. Turn your ideas into powerful digital products.",
    url: "https://softwarebuilder.in",
    siteName: "Software Builder",
    images: [
      {
        url: "/sb-og.jpg",
        width: 1200,
        height: 630,
        alt: "Software Builder — Custom Software & Web Development"
      }
    ],
    type: "website",
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Builder — Custom Software & Web Development Services",
    description:
      "Professional freelance software development services. Build high-performance web and app solutions with Software Builder.",
    creator: "@yourTwitterHandle", // optional
    images: ["/sb-og.jpg"]
  },

  alternates: {
    canonical: "https://softwarebuilder.in",
  },

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  },

  category: "Software Development",
  themeColor: "#0D1117",
  
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
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Software Builder",
              url: "https://softwarebuilder.in",
              logo: "https://softwarebuilder.in/sb-og.jpg",
              description:
                "Software Builder offers professional freelance software and web development services at affordable prices. High-quality, scalable, and modern solutions for startups and businesses.",
              sameAs: [
                "https://github.com/softwarebuilder",
                "https://www.linkedin.com/company/softwarebuilder",
                "https://twitter.com/yourTwitterHandle"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@softwarebuilder.in",
                availableLanguage: ["English"]
              }
            }),
          }}
        />

        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Software Builder",
              url: "https://softwarebuilder.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://softwarebuilder.in/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✅ Organization Schema */}
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Software Builder",
              url: "https://softwarebuilder.in",
              logo: "https://softwarebuilder.in/sb-og.jpg",
              description:
                "Software Builder offers professional freelance software and web development services at affordable prices. High-quality, scalable, and modern solutions for startups and businesses.",
              sameAs: [
                "https://github.com/softwarebuilder",
                "https://www.linkedin.com/company/softwarebuilder",
                "https://twitter.com/yourTwitterHandle",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@softwarebuilder.in",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {/* ✅ Website Schema */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Software Builder",
              url: "https://softwarebuilder.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://softwarebuilder.in/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ✅ Service Schema (Web, App, API, Android, etc.) */}
        <Script
          id="ld-json-services"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Software and Web Development Services",
              provider: {
                "@type": "Organization",
                name: "Software Builder",
                url: "https://softwarebuilder.in",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Builder Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Professional responsive websites built with modern frameworks like Next.js and React.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "App Development",
                      description: "Custom mobile and desktop app development for Android and iOS platforms.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "API Development",
                      description: "Backend and RESTful API development using Node.js, Express, and Python.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automation & Integration",
                      description: "Automating workflows and integrating third-party APIs for better efficiency.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design",
                      description: "Design and implementation of user-friendly, visually appealing interfaces.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-black text-white relative`}
      >
        <Navbar />
        <FloatingWhatsapp />
        {children}
      </body>
    </html>
  );
}
