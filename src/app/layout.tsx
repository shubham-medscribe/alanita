import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { EB_Garamond, Inter, Poppins } from "next/font/google";
import Script from "next/script";
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
  /*  const handleScriptLoad = () => {
    const scriptTag = document.getElementById("OFrameworkJS");
    if (scriptTag) {
      scriptTag.setAttribute("themeUri", "/OdyResponsiveSearchForm-Blue-Air/");
      console.log("Script loaded and themeUri set!");
    }
  }; */
  return (
    <html style={{ color: "black" }} lang="en">
      <body
        className={`${poppins.variable} ${garamond.variable} ${inter.variable}  antialiased`}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-[1347px]">
            <Navbar />
          </div>
        </div>
        {children}
        {/*   <img src="./dubai.jpg" /> */}
        <div id="AirSearchForm"></div>
        {/*  <Script
          id="OFrameworkJS"
          type="text/javascript"
          src="https://air.alanitatravel.com/web/SearchForms/OFramework.js"
          strategy="lazyOnload"
          data-theme-uri="./OdyResponsiveSearchForm-Blue-Air/"
          onLoad={() => {
            const OFramework = (window as any).OFramework;
            if (OFramework) {
              OFramework.QSParams.Add("siid", "99316");
              OFramework.AirSearchForm(
                document.getElementById("AirSearchForm")
              );
            }
          }}
        /> */}

        {/*   <Script
          id="OFrameworkJS"
          src="https://air.alanitatravel.com/web/SearchForms/OFramework.js"
          strategy="afterInteractive"
          data-language="javascript"
          data-themeuri="/OdyResponsiveSearchForm-Blue-Air/"
          data-skin-id="Default"
        /> */}

        {/* <Script
          id="OFrameworkJS"
          src="https://air.alanitatravel.com/web/SearchForms/OFramework.js"
          strategy="afterInteractive"
          onLoad={handleScriptLoad} // Runs after the script loads
        /> */}
        <Footer />
      </body>
    </html>
  );
}
