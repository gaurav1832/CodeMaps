"use client"
import Projects from "@/components/algorithms";
import SectionDivider from "@/components/section-divider";
import Sortings from "@/components/SortingAlgoComp";
import Chart from '../chart/App'
import Tab from '@/components/Tab'
import GPT from '@/components/GPT/App'
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
    <main className="flex flex-col items-center px-4">

      <Chart/>
      <SectionDivider />
      <Projects />
      <Sortings />
      <GPT/>
      <Tab/>

    </main>
    </ChakraProvider>
  );
}
