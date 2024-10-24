import type { Metadata } from "next";
import { afacad, inter } from "@/helpers/fonts";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
