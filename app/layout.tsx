import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konstantin Neureither | Portfolio",
  description:
    "Portfolio of Konstantin Neureither — Computational Science, physics-informed AI, and molecular ML research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
