import type { Metadata } from "next";
import { afacad, inter } from "@/helpers/fonts";
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
        className={`${inter.className} ${afacad.className} antialiased`}  
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
