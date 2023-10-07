"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
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
      {/* <Intro /> */}
      {/* <About /> */}

      <Chart/>
      <SectionDivider />
      <Projects />
      <Sortings />
      <GPT/>
      <Tab/>

      {/* <Experience />
      <Contact /> */}
    </main>
    </ChakraProvider>
  );
}
