"use client"
import Algorithms from "@/components/algorithms";
import SectionDivider from "@/components/section-divider";
import SectionDividerSec from "@/components/section-divider2";
import SectionDividerTer from "@/components/section-divider3";
import Sortings from "@/components/SortingAlgoComp";
import Chart from '../../chart/App'
import Tab from '@/components/Tab' 
import Interviews from "@/components/Interviews";
import Resources from "@/components/Resources";
import GPT from '@/components/GPT/App'
// import RandomJoke from "@/components/RandomJoke";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
    <main className="flex flex-col items-center px-4">

      <Chart/>
      <SectionDividerSec/>
      <Tab/>

      <Algorithms/>

      <Sortings/>
      <Resources/>
      {/* <SectionDividerTer/> */}
      {/* <Interviews/> */}
      <GPT/>
      </main>
    </ChakraProvider>
  );
}
