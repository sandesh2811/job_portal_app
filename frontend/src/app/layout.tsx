import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

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
      <body className="font-Epilogue">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
