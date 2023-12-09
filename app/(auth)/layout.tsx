
import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google"

import "../globals.css"

export const metadata ={
title: "Codemaps",
description : "Codemaps - solution for every teck geek"
}
const inter = Inter({subsets : ['latin']})

export default function RootLayout({children} : {children : React.ReactNode}){
    return (
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body> 
            </html>
    )
}   


// import Header from "../../components/header"
// import "../globals.css";
// import { Inter } from "next/font/google";
// import ActiveSectionContextProvider from "@/context/active-section-context";
// import ThemeContextProvider from "@/context/theme-context";
// import { Toaster } from "react-hot-toast";
 

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "CodeMaps",
//   description: "CodeMaps by Gaurav",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="!scroll-smooth">
//       <body
//         className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
//       >
//         {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
//         <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

//         <ThemeContextProvider>
//           <ActiveSectionContextProvider>
  
//             <Header />
//             {children}
//             <Footer />

//             <Toaster position="top-right" />
//            </ActiveSectionContextProvider>
//         </ThemeContextProvider>
//       </body>
//     </html>
//   );
// }