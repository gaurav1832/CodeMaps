"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { sortingAlgo } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/button";
import {IoArrowForwardCircle} from "react-icons/io5";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SortinAlgorithmComp() {

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Sort out your life !</SectionHeading>
      <h2 className="mb-10 text-xl text-bold">with must do sorting algorithms</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {sortingAlgo.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-gray-300 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
          <Button p={5} color={"black"} fontSize={18} background={"transparent"}
          _hover={{background: "transparent", shadow: "2xl"}}
          >
          {skill} {"  "} <IoArrowForwardCircle/>
          </Button>  
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
