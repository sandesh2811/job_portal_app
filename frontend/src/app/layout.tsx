import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Jobs",
  description: "A better way to find and apply to the job.",
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
