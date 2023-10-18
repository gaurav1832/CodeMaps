import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twopointer from "@/public/twoPtr.png";
import binarysearch from "@/public/binary-search.png";
import floydcycle from "@/public/slowfast1.png";
import logo from "@/public/logo.png"
export const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Interviews",
    route: "/Interviews",
  },
 
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Two Pointers",
    description:
      "The two pointers algorithm is a technique using two pointers, often with different speeds or directions, to optimize solving various problems like searching, sorting, or finding specific pairs in arrays or lists, reducing time complexity.",
    tags: ["Arrays", "LinkedList"],
    imageUrl: twopointer,
  },
  {
    title: "Binary Search",
    description:
      "Binary search is a fast and efficient search algorithm used to find a specific element in a sorted array or list by repeatedly dividing the search interval in half.",
    tags: ["Arrays", "Sorting"],
    imageUrl: binarysearch,
  },
  {
    title: "Floyd Cycle Detection",
    description:
      "Floyd's cycle detection, or the tortoise and hare algorithm, identifies loops in linked by using two pointers, one slow and one fast, to traverse the data. If they meet, it means there exists a loop.",
    tags: ["Linked List", "Two Pointers"],
    imageUrl: floydcycle,
  },
] as const;

export const sortingAlgo = [
  "Selection Sort",
  "Bubble Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
  "Heap Sort",
  "Radix Sort",
  "Counting Sort",
  "Shell Sort"
] as const;


export const Interviews = [
  {
    name: 'Microsoft.',
    role: 'SWE',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Amazon.',
    role: 'SDE',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Google',
    role: 'SDE',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Meta',
    role: 'ML Engineer',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
] as const;