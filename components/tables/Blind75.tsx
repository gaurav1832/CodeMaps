import React from "react";
import JsonData from "@/public/json/blind75.json";
import difficulty_to_string from "@/components/helperFunctions/difficulty_to_string";
import difficulty_color from "@/components/helperFunctions/difficulty_color";
import BooleanToString from "@/components/helperFunctions/boolToString";
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
  it.stat.question__title.toLowerCase().includes(query)||
  difficulty_to_string(it).includes(query.toLowerCase()) ||
  it.stat.topic.toLowerCase().includes(query)
  ).map((info) => {
     
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.stat.question__title_slug);
    return (
      <>
 
      <Tr>
        <Td>{info.stat.question_id}</Td>
        <Td>
          {" "}
          <Link target="_blank" href={url}>
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

        <Td>{info.stat.topic}</Td>
        <Td>{ BooleanToString(info.paid_only)}</Td>
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
    placeholder='Search by title, difficulty or topic...'
    ></Input>
    </Center>
    <Center>
      
      <TableContainer
        p={"30"}
      >
        <Table size={"md"}>
          <Thead>
            <Tr>
              <Th color={"blue.300"}>ID</Th>
              <Th color={"blue.300"}>Title</Th>
              <Th color={"blue.300"}>Difficulty</Th>
              <Th color={"blue.300"}>Topic</Th>
              <Th color={"blue.300"}>Premium</Th>
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