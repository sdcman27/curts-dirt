import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Curt's Dirt | Premium Soil Delivery in the Butler County",
  description:
    "Curt's Dirt delivers screened topsoil, compost, and fill dirt to Boise and the Butler County with quick scheduling and honest pricing.",
  metadataBase: new URL("https://curtsdirt.com"),
  openGraph: {
    title: "Curt's Dirt",
    description:
      "Local family business delivering premium topsoil, compost, and fill dirt across the Butler County.",
    url: "https://curtsdirt.com",
    siteName: "Curt's Dirt",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curt's Dirt",
    description:
      "Premium screened soil delivered to Evan's City, Meridian, Callery, Cranberry and Seven Fieldsand the surrounding Butler County communities.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
