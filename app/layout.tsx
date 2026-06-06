import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PTPAL - Level Up Your Recovery",
  description: "Gamified physical therapy platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
