import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlobalNav from "./global-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://xiaoliangpiano.com";
const SITE_TITLE = "Xiao Liang | Pianist · Educator · Researcher";
const SITE_DESCRIPTION =
  "Official website of Xiao Liang, pianist, educator, and researcher. Explore performances, projects, research, conference presentations, and upcoming events.";
const OG_DESCRIPTION =
  "Official website of Xiao Liang, pianist, educator, and researcher.";
const OG_IMAGE_URL = "/images/app/og-image.png";
const OG_IMAGE_ALT = "Xiao Liang — Pianist, Educator, Researcher";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "Xiao Liang",
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/app/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
