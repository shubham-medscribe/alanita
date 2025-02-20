import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { EB_Garamond, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose required weights
  variable: "--font-poppins", // Custom CSS variable
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-garamond",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${garamond.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
