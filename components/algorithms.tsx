"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./algorithm";
import { useSectionInView } from "@/lib/hooks";
import { Button, Center } from "@chakra-ui/react";
import { IoArrowForwardCircle } from "react-icons/io5";
export default function Projects() {
 
  return (
    <section id="projects" className="scroll-mt-28 mb-28 ">
      <SectionHeading>Algorithms you must know ...</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
     <Center mt={50} fontSize={60}
     _hover={{ color: 'gray.300', cursor: 'pointer' }}
     ><IoArrowForwardCircle/></Center>
    </section>
  );
}
