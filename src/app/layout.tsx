import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { EB_Garamond, Inter, Poppins } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${garamond.variable} ${inter.variable}  antialiased`}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-[1347px]">
            <Navbar />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
