"use client";

import React from "react";
import { algorithmsDataHome } from "@/lib/data";
import Project from "./algorithm";
import { useSectionInView } from "@/lib/hooks";
import { Button, Center, SimpleGrid, Heading, ChakraProvider } from "@chakra-ui/react";
import { IoArrowForwardCircle } from "react-icons/io5";
export default function Projects() {
 
  return (
     <section id="projects" className="scroll-mt-56 mb-28 ">
      <Center><Heading mt={20} mb={10}>Famous Algorithms and techniques you must know ...</Heading></Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={5} padding={10}>
        {algorithmsDataHome.map((algo, index) => (
          <React.Fragment key={index}>
            <Project {...algo} />
          </React.Fragment>
        ))}
      </SimpleGrid>
     <Center mt={30} fontSize={30}
     _hover={{ color: 'gray.300', cursor: 'pointer' }}
     
     >
      <p style={{fontSize:"22px"}}>See all    </p>
      <a href="/algorithms"> <IoArrowForwardCircle/></a>
      
      </Center>
    </section>
  );
}
