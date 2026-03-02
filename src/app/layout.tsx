import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDA AI Hackathon",
  description: "Eksperimenter med agenter og generativ AI",
  openGraph: {
    title: "IDA AI Hackathon",
    description: "Eksperimenter med agenter og generativ AI",
    siteName: "IDA AI Hackathon",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDA AI Hackathon",
    description: "Eksperimenter med agenter og generativ AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
