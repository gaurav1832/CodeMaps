"use client"
import React from "react";
import { useEffect, useState } from "react";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Input
} from "@chakra-ui/react";
import Blind75 from "./tables/Blind75";
import JsonDataDisplay from "./tables/dataTable";
import JsonDataDisplayEasy from "./tables/dataTableEasy"
import JsonDataDisplayMedium from "./tables/dataTableMedium"
import JsonDataDisplayHard from "./tables/dataTableHard"
import JsonDataDisplayArray from "./tables/dataTableArrays";
import JsonDataDisplaySW from "./tables/dataTableSW";
import JsonDataDisplayTP from "./tables/datTableTwoPtr";
import JsonDataDisplayBacktracking from "./tables/dataTableBacktracking";
import JsonDataDisplayDP from "./tables/dataTableDP";
import JsonDataDisplayDesign from "./tables/dataTableDesign";
import JsonDataDisplayGraph from "./tables/dataTableGraph";
import JsonDataDisplayBFS from "./tables/dataTableBFS";
import JsonDataDisplayDFS from "./tables/dataTableDFS";
import JsonDataDisplayBS from "./tables/dataTableBS";
import JsonDataDisplayHeap from "./tables/dataTableHeap";
import JsonDataDisplayTrie from "./tables/dataTableTrie";
import JsonDataDisplayLL from "./tables/dataTableLL";
import JsonDataDisplayTopo from "./tables/dataTableTopo";
import JsonDataDisplaySF from "./tables/dataTableSF";
import JsonDataDisplayBit from "./tables/dataTableBit";
import SectionHeading from "./section-heading";
import {PiCodeBlockLight} from "react-icons/pi"
const TabFunction = () => {
 
  const [showTab, setShowTab] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowTab(false);
        
      } else {
        setShowTab(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   
   return (
    <> 
      <SectionHeading>Problems <Center> <Heading mt={5} fontSize={48}> <PiCodeBlockLight/></Heading> </Center> </SectionHeading>
     <Center>
      { showTab &&
      
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab color={"green.100"}>L 1</Tab> 
          <Tab color={"green.200"}>L 2</Tab>
          <Tab color={"green.200"}>L 2.1</Tab>
          <Tab color={"green.300"}>L 3</Tab>
          <Tab color={"green.300"}>L 3.1</Tab>
          <Tab color={"green.300"}>L 3.3</Tab>
          <Tab color={"yellow.400"}>L 4</Tab>
          <Tab color={"yellow.500"}>L 5</Tab>
          <Tab color={"yellow.600"}>L 6</Tab>
          <Tab color={"yellow.700"}>L 7</Tab>
          <Tab color={"yellow.700"}>L 7.1</Tab>
          <Tab color={"yellow.700"}>L 7.2</Tab>
          <Tab color={"red.300"}>L 7.3</Tab>
          <Tab color={"red.400"}>L 8</Tab>
          <Tab color={"red.500"}>L 9</Tab>
          <Tab color={"red.600"}>L 10</Tab>
          <Tab color={"pink.600"}>Must do</Tab>
          <Tab>All</Tab>
        </TabList>
        <TabPanels>
 

        {/* Array */}
          <TabPanel>
            <JsonDataDisplayArray />
          </TabPanel>

          {/* LL */}
          <TabPanel>
            <JsonDataDisplayLL />
          </TabPanel>

        {/* fast and slow ptr */}
          <TabPanel>
            <JsonDataDisplaySF />
          </TabPanel>

        {/* Sliding Window */}
          <TabPanel>
            <JsonDataDisplaySW />
          </TabPanel>

          {/* Binary Search */}
          <TabPanel>
            <JsonDataDisplayBS />
          </TabPanel>

          {/* Two pointers */}
          <TabPanel>
            <JsonDataDisplayTP />
          </TabPanel>

          {/* Backtracking */}
          <TabPanel>
            <JsonDataDisplayBacktracking />
          </TabPanel>

        {/* DP */}
          <TabPanel>
            <JsonDataDisplayDP />
          </TabPanel>

        {/* Design */}
          <TabPanel>
            <JsonDataDisplayDesign />
          </TabPanel>

          {/* Graph */}
          <TabPanel>
            <JsonDataDisplayGraph />
          </TabPanel>

          {/* BFS */}
          <TabPanel>
            <JsonDataDisplayBFS />
          </TabPanel>

          {/* DFS */}
          <TabPanel>
            <JsonDataDisplayDFS />
          </TabPanel>

            {/* Trie */}
          <TabPanel>
            <JsonDataDisplayTopo />
          </TabPanel>
 
          {/* Heap */}
          <TabPanel>
            <JsonDataDisplayHeap />
          </TabPanel>

          {/* Trie */}
          <TabPanel>
            <JsonDataDisplayTrie />
          </TabPanel>

          {/* Bit Manip */}
          <TabPanel>
            <JsonDataDisplayBit />
          </TabPanel>

          {/* Must do */}
                    <TabPanel>
            <Blind75 />
          </TabPanel>

          {/* All */}
          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

        </TabPanels>
      </Tabs>
      }
    </Center>
    </>
  );
};

export default TabFunction;
