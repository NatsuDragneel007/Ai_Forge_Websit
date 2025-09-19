import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiForge - Automation, Simplified",
  description: "AiForge builds AI-powered systems that save time and scale businesses. Discover intelligent automation solutions for modern workflows.",
  keywords: ["AiForge", "automation", "AI", "business automation", "Forge Quote", "productivity", "workflow automation", "MSME", "agency tools"],
  authors: [{ name: "AiForge Team" }],
  creator: "AiForge",
  publisher: "AiForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aiforge.com'),
  openGraph: {
    title: "AiForge - Automation, Simplified",
    description: "Building AI-powered systems that save time and scale businesses",
    url: "https://aiforge.com",
    siteName: "AiForge",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AiForge - Automation, Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiForge - Automation, Simplified",
    description: "Building AI-powered systems that save time and scale businesses",
    images: ["/twitter-image.jpg"],
    creator: "@aiforge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
