import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Campus Stack - Salesforce Solutions for Religious Organizations",
    template: "%s | Campus Stack"
  },
  description: "Campus Stack provides specialized Salesforce solutions for religious organizations including Pastoral Care, B'Nai Mitzvah Management, and Membership Management systems.",
  keywords: ["Salesforce", "Religious Organizations", "Pastoral Care", "B'Nai Mitzvah", "Membership Management", "CRM", "Community Management"],
  authors: [{ name: "Campus Stack" }],
  creator: "Campus Stack",
  publisher: "Campus Stack",
  metadataBase: new URL("https://campus-stack.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://campus-stack.com",
    title: "Campus Stack - Salesforce Solutions for Religious Organizations",
    description: "Specialized Salesforce solutions for religious organizations including Pastoral Care, B'Nai Mitzvah Management, and Membership Management systems.",
    siteName: "Campus Stack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Stack - Salesforce Solutions for Religious Organizations",
    description: "Specialized Salesforce solutions for religious organizations including Pastoral Care, B'Nai Mitzvah Management, and Membership Management systems.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
} 