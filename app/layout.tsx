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

export const metadata: Metadata = {
  title: "Xiao Liang",
  description: "Xiao Liang — artist and academic website.",
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
