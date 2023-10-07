"use client"
import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Input
} from "@chakra-ui/react";
import JsonDataDisplay from "../components/dataTable";
import Blind75 from "../components/Blind75";
import SectionHeading from "./section-heading";
import { Code } from "@chakra-ui/react";

const TabFunction = () => {
 

   
   return (
    <> 
      <SectionHeading>Problems {"</>"}</SectionHeading>
 
    <Center>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Company Wise</Tab>
          <Tab>Blind-75</Tab>
          {/* <Tab>Amazon</Tab>
          <Tab>Microsoft</Tab>
          <Tab>Meta</Tab>
          <Tab>GoldmanSachs</Tab>
          <Tab>Uber</Tab>
          <Tab>Zomato</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
             
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
          <Blind75 />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
    </>
  );
};

export default TabFunction;
