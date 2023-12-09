"use client";
import '@/public/styles/algorithm.css'
import React, { useState } from "react";
import { algorithmsData } from "@/lib/data";
import Project from "./algorithm";
import { Button, Center, SimpleGrid, Heading, ChakraProvider, Input } from "@chakra-ui/react";
 


export default function Projects() {
 
  const [query, setquery] = useState("")

  return (
     <section id="projects" className="scroll-mt-56 mb-28 ">
       
      <Center><Heading >Famous Algorithms and techniques you must know ...</Heading></Center>

      {/* <Center className="container">   
        <Image   src={algohero} alt="algotithms_header_image"></Image>
        <Image   src={algohero} alt="algotithms_header_image"></Image>
        <Image   src={algohero} alt="algotithms_header_image"></Image>
        <Image   src={algohero} alt="algotithms_header_image"></Image>
       </Center> */}

      <Center>

      <Input 
      className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      h={12}
      fontWeight={500}
      fontSize={16}
      onChange={(e) => setquery(e.target.value)}
      mt={100}
      mb={50}
      placeholder='Search...'
    ></Input>  
      </Center>
 
 
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={5} padding={20}>
        {algorithmsData.filter((it) => 
  it.title.toLowerCase().includes(query.toLowerCase())).map((algo, index) => (
          <React.Fragment key={index}>
            <Project {...algo} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    
    </section>
  );
}
