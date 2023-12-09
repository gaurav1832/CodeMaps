import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import twopointer from "@/public/twoPtr.png";
import binarysearch from "@/public/binary-search.png";
import floydcycle from "@/public/slowfast1.png";
import backtrack from "@/public/backtracking.png"
import rec from "@/public/recursion.png"
import dnf from "@/public/dnf.png"
import logo from "@/public/logo.png"
import dfs from "@/public/dfs.png"
import bfs from "@/public/bfs.png"
import dj from "@/public/dj-3 copy.png"
import topo from "@/public/topo.png"
import test from "@/public/testing.png"
import sieve from "@/public/sieve.png"
import fw from "@/public/fwalgo.png"
export const links = [
  // {
  //   name: "<CodeMaps/>",
  //   route: "/",
  // },
  {
    name: "Algorithms",
    route: "algorithms",
  },
  {
    name: "Interviews",
    route: "interviews"
  },
  {
    name: "Login/Signup",
    route: "sign-in"
  }
 
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

export const algorithmsData = [
  {
    title: "Two Pointers",
    description:
      "The two pointers algorithm is a technique using two pointers, often with different speeds or directions, to optimize solving various problems like searching, sorting, etc.",
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
   
  {
    title: "Dutch National Flag (DNF) problem",
    description:"The Dutch National Flag problem sorts an array with three distinct values, like Red, White, Blue, efficiently using a single pass algorithm.",
    tags: ["Arrays", "Pointers"],
    imageUrl: dnf,
  },
  {
    title: "Recursion",
    description:"Recursion is a programming technique where a function calls itself to solve a problem, breaking it down into smaller, solvable instances.",
    tags: ["Arrays","Strings", "Matrix", "Tree", "Graph", "Stack"],
    imageUrl: rec,
  },
  {
    title: "Backtracking",
    description:"Backtracking is a problem-solving algorithm that explores potential solutions, undoing incorrect choices to find the correct one efficiently.",
    tags: ["Arrays","Strings", "Matrix", "Tree", "Graph", "Stack"],
    imageUrl: backtrack,
  },
  {
    title: "Breadth-First Search (BFS)",
    description:"Breadth-First Search (BFS) is a graph traversal algorithm that explores all the neighbor nodes at the current depth before moving to the next depth.    ",
    tags: [ "Matrix", "Tree", "Graph"],
    imageUrl: test,
  },
  {
    title: "Depth-First Search (DFS)",
    description:"Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.    ",
    tags: ["Matrix", "Tree", "Graph"],
    imageUrl: test,
  },
 
  {
    title: "Topological Sort",
    description:"Topological Sort is an algorithm that arranges nodes in a directed acyclic graph in linear order respecting their dependencies.",
    tags: ["Tree", "Graph"],
    imageUrl: topo,
  },
  {
    title: "Dijkstra's Algorithm",
    description:"Dijkstra's Algorithm is a shortest path algorithm used to find the shortest distance between a source node and all other nodes in a weighted graph.",
    tags: ["Matrix", "Tree", "Graph"],
    imageUrl: dj,
  },
  {
    title: "Prim's and Kruskal Algorithms",
    description:"Prim's Algorithm is a minimum spanning tree algorithm used to find the minimum-weight tree that connects all nodes in a weighted graph, minimizing the total edge weight.",
    tags: [ "Tree", "Graph"],
    imageUrl: dj,
  },
  {
    title: "Floyd-Warshall",
    description:"Floyd-Warshall finds shortest paths between all nodes in a weighted graph, considering positive, negative edge weights, and transitive closure.",
    tags: ["Tree", "Graph"],
    imageUrl: fw,
  },
  {
    title: "Sieve of Eratosthene",
    description:"The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a specified limit by iteratively marking non-prime numbers.",
    tags: ["Arrays", "Mathematics"],
    imageUrl: sieve,
  },
 
] as const;



export const algorithmsDataHome = [
  {
    title: "Two Pointers",
    description:
      "The two pointers algorithm is a technique using two pointers, often with different speeds or directions, to optimize solving various problems like searching, sorting, etc.",
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
   
  {
    title: "Dutch National Flag (DNF) problem",
    description:"The Dutch National Flag problem sorts an array with three distinct values, like Red, White, Blue, efficiently using a single pass algorithm.",
    tags: ["Arrays", "Pointers"],
    imageUrl: dnf,
  },
  {
    title: "Recursion",
    description:"Recursion is a programming technique where a function calls itself to solve a problem, breaking it down into smaller, solvable instances.",
    tags: ["Arrays","Strings", "Matrix", "Tree", "Graph", "Stack"],
    imageUrl: rec,
  },
  {
    title: "Backtracking",
    description:"Backtracking is a problem-solving algorithm that explores potential solutions, undoing incorrect choices to find the correct one efficiently.",
    tags: ["Arrays","Strings", "Matrix", "Tree", "Graph", "Stack"],
    imageUrl: backtrack,
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