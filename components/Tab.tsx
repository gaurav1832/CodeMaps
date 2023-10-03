import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import JsonDataDisplay from "../components/dataTable";
import Blind75 from "../components/Blind75";

const TabFunction = () => {
  return (
    <Center>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Blind75</Tab>
          <Tab>Google</Tab>
          <Tab>Amazon</Tab>
          <Tab>Microsoft</Tab>
          <Tab>Meta</Tab>
          <Tab>GoldmanSachs</Tab>
          <Tab>Uber</Tab>
          <Tab>Zomato</Tab>
        </TabList>
        <TabPanels>
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

          <TabPanel>
            <JsonDataDisplay />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default TabFunction;
