import React from "react";
import JsonData from "../public/json/blind75.json";
import difficulty_to_string from "./helperFunctions/difficulty_to_string";
import difficulty_color from "./helperFunctions/difficulty_color";
import truncateString from "./helperFunctions/shortenTitle";

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

  const DisplayData = JsonData.map((info) => {
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.stat.question__title_slug);
    return (
      <Tr>
        <Td>{info.stat.question_id}</Td>
        <Td>
          {" "}
          <Link href={url}>
            {truncateString(info.stat.question__title, 30)}
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

        <Td>Apple,Google, Meta</Td>
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
    );
  });

  return (
    <Center>
      <TableContainer
        bg={"blackAlpha.300"}
        p={"30"}
        borderRadius={"20"}
        shadow={"dark-lg"}
      >
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Difficulty</Th>
              <Th>Companies</Th>
              <Th>Resources</Th>
            </Tr>
          </Thead>

          <Tbody>{DisplayData}</Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}

export default JsonDataDisplay;
