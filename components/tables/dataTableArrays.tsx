
import React from "react";

import JsonData from "@/public/json/questions.json";
import difficulty_color from "@/components/helperFunctions/difficulty_color";
 
import {
  Heading,
  Center,
  TableContainer,
  Table,
  Th,
  Tr,
  Thead,
  Tfoot,
  Td,
  Tbody,
  Tag,
  Link,
  ChakraProvider,
} from "@chakra-ui/react";


function JsonDataDisplay() {

const topic = "Arrays"
const DisplayData = JsonData.filter((it) =>  it.pattern.includes(topic)
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
 
        <Td>
        </Td>
      </Tr>
      </>
    );
  });

  return (
    <ChakraProvider>
    <Center>
      <Heading mt={10} fontSize={24}>Problems on {topic}...</Heading>
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
