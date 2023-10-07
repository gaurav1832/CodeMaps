
import React from "react";

import JsonData from "../public/json/questions.json";
import difficulty_to_string from "./helperFunctions/difficulty_to_string";
import difficulty_color from "./helperFunctions/difficulty_color";
import truncateString from "./helperFunctions/shortenTitle";

// import createLink from "./helperFunctions/createLink";

import {
  Center,
  TableContainer,
  Table,
  Th,
  Tr,
  Thead,
  Tfoot,
  Td,
  Tbody,
  TableCaption,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Link,
  ChakraProvider,
  Input
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

function JsonDataDisplay() {

const [query, setquery] = useState("");

const DisplayData = JsonData.filter((it) => 
  it.title.toLowerCase().includes(query) ||
  it.companies.map(com => com.name).includes(query)
  ).map((info) => {
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.slug);
    return (
      <> 
      <Tr>
        {/* <Td>{info.id}</Td> */}
        <Td>
          <Link color={"gray.300"} target="_blank" href={url}>{info.title}</Link>
        </Td>
        <Td>
          <Tag
            variant={"subtle"}
            borderRadius={50}
            colorScheme={difficulty_color(info.difficulty)}
          >
           <Center> {info.difficulty} </Center>
          </Tag>{" "}
        </Td>

        {/* <Td>{info.stat.}</Td> */}

        <Td  maxWidth={150}>
        {info.companies.map( info =>   <p className="inline px-2" key={info.slug}><Tag fontSize={12} variant='subtle' maxWidth={"fit-content"}>{info.name}{"("}{info.frequency}{")"}</Tag></p>)}  
        </Td>
 
        <Td>
          {/* <Menu>
                    <MenuButton as={Button}>Referenes</MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu> */}
        </Td>
      </Tr>
      </>
    );
  });

  return (
    <ChakraProvider>
        <Center>
    <Input 
    className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    h={12}
    fontWeight={500}
    fontSize={16}
    onChange={(e) => setquery(e.target.value)}
    mt={50}
    my={50}
    placeholder='Search ...'
    ></Input>
    </Center>
      <Center>
        <TableContainer
          p={"30"}
          borderRadius={"20"}
          shadow={"dark-lg"}
          bg={"gray.700"}
        >
          <Table>
            <Thead>
              <Tr>

                {/* <Th>ID</Th> */}

                <Th color={"white"}>Title</Th>
                <Th color={"white"} textAlign={'center'}>Difficulty</Th>
                <Th color={"white"}>Companies</Th>
               </Tr>
            </Thead>

            <Tbody>{DisplayData}</Tbody>
          </Table>
        </TableContainer>
      </Center>
    </ChakraProvider>
  );
}

export default JsonDataDisplay;
