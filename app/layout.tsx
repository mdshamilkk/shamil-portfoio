
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shamil Ahmad | Digital Marketing Specialist",
  description:
    "Explore Shamil Ahmad's digital marketing portfolio featuring Meta Ads, SEO, Shopify marketing, performance campaigns and lead generation.",
  applicationName: "Shamil Portfolio",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
