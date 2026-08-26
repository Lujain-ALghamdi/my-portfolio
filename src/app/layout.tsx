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
  title: "Lujain Anwar Alghamdi | Computer Science Graduate & Software Developer",
  description:
    "Portfolio of Lujain Anwar Alghamdi, a Computer Science graduate from the University of Jeddah based in Jeddah, Saudi Arabia, showcasing projects in full-stack development, artificial intelligence, computer vision, IoT, and software development.",
  openGraph: {
    title: "Lujain Anwar Alghamdi | Computer Science Graduate & Software Developer",
    description:
      "Portfolio of Lujain Anwar Alghamdi, a Computer Science graduate from the University of Jeddah based in Jeddah, Saudi Arabia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
