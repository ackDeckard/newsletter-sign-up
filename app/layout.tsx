import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor - Pablo",
  description: "Using Next.js 13, Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
