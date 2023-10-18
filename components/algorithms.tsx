"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { algorithmsData } from "@/lib/data";
import Project from "./algorithm";
import { useSectionInView } from "@/lib/hooks";
import { Button, Center, SimpleGrid, Heading } from "@chakra-ui/react";
import { IoArrowForwardCircle } from "react-icons/io5";
export default function Projects() {
 
  return (
    <section id="projects" className="scroll-mt-56 mb-28 ">
      <Center><Heading mt={20} mb={10}>Algorithms and techniques you must know ...</Heading></Center>
      <SimpleGrid columns={[5, 5, 2]} gap={5} padding={10}>
        {algorithmsData.map((algo, index) => (
          <React.Fragment key={index}>
            <Project {...algo} />
          </React.Fragment>
        ))}
      </SimpleGrid>
     <Center mt={50} fontSize={60}
     _hover={{ color: 'gray.300', cursor: 'pointer' }}
     ><IoArrowForwardCircle/></Center>
    </section>
  );
}
