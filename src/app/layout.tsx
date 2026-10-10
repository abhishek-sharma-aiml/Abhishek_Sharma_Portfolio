import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheksharma.dev"),
  title: siteConfig.title,
  description: siteConfig.subline,
  keywords: [
    "Abhishek Sharma",
    "AI ML Engineer",
    "LangGraph",
    "LangSmith",
    "LangChain",
    "LoRA QLoRA Fine-tuning",
    "OpenClaw",
    "RAG Chatbots",
    "Computer Vision",
    "YOLO",
    "SAM",
    "Depth Anything",
    "AWS",
    "Docker",
    "Django",
    "Python",
  ],
  authors: [{ name: "Abhishek Sharma" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.subline,
    url: "https://abhisheksharma.dev",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.subline,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BackgroundNetwork } from "@/components/theme/BackgroundNetwork";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 dark:bg-[#050507] text-slate-900 dark:text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-950 dark:selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Fixed synapse neural network background adapting to theme */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <BackgroundNetwork />
          </div>

          {/* Foreground website content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
