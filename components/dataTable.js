import React from "react";
import JsonData from "../public/json/problemslist.json";
import difficulty_to_string from "./helperFunctions/difficulty_to_string";
import difficulty_color from "./helperFunctions/difficulty_color";
import truncateString from "./helperFunctions/shortenTitle";
import createLink from "./helperFunctions/createLink";
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
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

function JsonDataDisplay() {
  const [data, setdata] = useState(JsonData);
  const [order, setorder] = useState("asc");

  const sortHeader = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setdata(sorted);
      setorder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setdata(sorted);
      setorder("asc");
    }
  };

  const DisplayData = JsonData.map((info) => {
    const base = "https://leetcode.com/problems/";
    const url = base.concat(info.stat.question__title_slug);
    return (
      <Tr>
        <Td>{info.stat.question_id}</Td>
        <Td>
          <Link href={url}>{info.stat.question__title}</Link>
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

        {/* <Td>{info.stat.}</Td> */}

        {/* <Td>Apple,Google, Meta</Td> */}
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
    <ChakraProvider>
      <Center>
        <TableContainer p={"30"} borderRadius={"10"} shadow={"2xl"}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th onClick={() => sortHeader("stat.question_id")}>ID</Th>
                <Th>Title</Th>
                <Th>
                  {" "}
                  <Th onClick={() => sortHeader("difficulty.level")}>
                    Difficulty
                  </Th>{" "}
                </Th>
                {/* <Th>Companies</Th> */}
                <Th>Resources</Th>
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
