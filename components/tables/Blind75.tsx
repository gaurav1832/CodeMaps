import React from "react";
import JsonData from "@/public/json/blind75.json";
import difficulty_to_string from "@/components/helperFunctions/difficulty_to_string";
import difficulty_color from "@/components/helperFunctions/difficulty_color";

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
  Code,
  Link,
  Input
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

function JsonDataDisplay() {
//   const [data, setdata] = useState(JsonData);

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   function handleHeaderClick(header) {
//     const newdata = data.difficulty.level.sort((a, b) =>
//       a[header] > b[header] ? 1 : -1
//     );
//     setdata(newdata);
//   }

const [query, setquery] = useState("")


const DisplayData = JsonData.filter((it) => 
  it.stat.question__title.toLowerCase().includes(query.toLowerCase()) || it.stat.topic.toLowerCase().includes(query.toLowerCase()) 
  || difficulty_to_string(it.difficulty.level).toLowerCase().includes(query.toLowerCase())
  ).map((info) => {
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.stat.question__title_slug);
    return (
      <>
 
      <Tr>
        <Td>{info.stat.question_id}</Td>
        <Td>
          {" "}
          <Link href={url}>
            {info.stat.question__title}
          </Link>
        </Td>
        <Td>
          <Tag
            variant={"subtle"}
            borderRadius={50}
            colorScheme={difficulty_color(info.difficulty.level)}
          >
            {difficulty_to_string(info.difficulty.level)}
          </Tag>{" "}
        </Td>

        {/* <Td>{info.link}</Td> */}

         <Td>
          <Code>{info.stat.topic}</Code>
          
        </Td>
      </Tr>
      </>
    );
  });

  return (
    <> 
  <Center>
    <Input 
    className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    h={12}
    fontWeight={500}
    fontSize={16}
    onChange={(e) => setquery(e.target.value)}
    mt={50}
    my={50}
    placeholder='Search by title or topic or difficulty...'
    ></Input>
    </Center>
    <Center>
      
      <TableContainer
        p={"30"}
      >
        <Table >
          <Thead>
            <Tr>
              <Th color={"blue.300"}>ID</Th>
              <Th color={"blue.300"}>Title</Th>
              <Th color={"blue.300"}>Difficulty</Th>
              <Th color={"blue.300"}>Topic</Th>
            </Tr>
          </Thead>

          <Tbody>{DisplayData}</Tbody>
        </Table>
      </TableContainer>
    </Center>
    </>
  );
}

export default JsonDataDisplay;
