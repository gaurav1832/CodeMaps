
import React from "react";

import JsonData from "@/public/json/questions.json";
import difficulty_color from "@/components/helperFunctions/difficulty_color";
import questionStatus from "../questionStatus";
import {
  Center,
  TableContainer,
  Table,
  Th,
  Tr,
  Thead,
  Td,
  Tbody,
  Tag,
  Checkbox,
  Link,
  ChakraProvider,
  Input
} from "@chakra-ui/react";

import "@/public/styles/dataTable.css"

import { useState, useEffect } from "react";

function JsonDataDisplay() {

const [query, setquery] = useState("");
 

const DisplayData = JsonData.filter((it) => 
  it.title.toLowerCase().includes(query.toLowerCase()) ||
  it.difficulty.toLowerCase().includes(query.toLowerCase())
  ).map((info) => {

    
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.slug);
    return (
      <> 
      <Tr>
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
        <Td  maxWidth={150}>
        {info.companies.map( info =>   <p className="inline px-2" key={info.slug}><Tag fontSize={12} variant='subtle' maxWidth={"fit-content"}>{info.name}{"("}{info.frequency}{")"}</Tag></p>)}  
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
    placeholder='Search by title or difficulty ...'
    ></Input>
    </Center>
      <Center>
        <TableContainer
          p={"30"}
        >
          <Table>
            <Thead>
              <Tr>
                <Th color={"blue.300"}>Title</Th>
                <Th color={"blue.300"} textAlign={'center'}>Difficulty</Th>
                <Th color={"blue.300"}>Companies</Th>
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


