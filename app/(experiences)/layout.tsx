import Header from "@/components/Header"
import Footer from "@/components/Footer";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'CodeMaps Algorithms Page',
  description: 'CodeMaps Algorithms Page of all must do programming algorithms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
  
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
           </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
