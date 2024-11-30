import type { Metadata } from "next";
import { poppins } from "@/helpers/fonts";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Tech Katalyst",
  description: "Tech Katalyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased`}  
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
