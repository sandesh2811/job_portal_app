import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Direct/Navbar/Navbar";
import Footer from "@/Components/Direct/Home/Footer";
import Providers from "@/Components/Provider/Provider";

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
      <body className="font-Epilogue text-primaryText">
        <div className="relative overflow-x-hidden">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
