import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/HomePage/Navbar";
import Footer from "@/Components/HomePage/Footer";
import Providers from "@/Components/ReduxProvider/Provider";
import QueryProvider from "@/Components/ReactQueryProvider/QueryProvider";

import ReduxPersistProvider from "@/Components/ReduxPersist/ReduxPersistProvider";

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
          <QueryProvider>
            <Providers>
              <ReduxPersistProvider>
                <Navbar />
                {children}
                <Footer />
              </ReduxPersistProvider>
            </Providers>
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
