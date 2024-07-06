import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RNB Frontend Test Solution - Luis Leiva",
  description: "Frontend Test Solution for a entry frontend developer position at RNB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
