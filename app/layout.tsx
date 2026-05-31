import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Francis Dey | Web Developer Portfolio",
  description:
    "Hi, I'm Francis Dey (The_DeySpace) - a passionate web developer specializing in building beautiful, responsive websites and applications with modern technologies.",
  keywords: [
    "Francis Dey",
    "The_DeySpace",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Francis Dey" }],
  openGraph: {
    title: "Francis Dey | Web Developer Portfolio",
    description:
      "Passionate web developer creating beautiful, responsive websites and applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Dey | Web Developer Portfolio",
    description:
      "Passionate web developer creating beautiful, responsive websites and applications.",
    creator: "@The_DeySpace",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
