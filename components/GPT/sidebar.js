import React from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";

import { IoSend } from "react-icons/io5";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "Hello how are you?",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button mb={50} ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Help?
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"gray.300"}>
          <DrawerCloseButton />
          <DrawerHeader color={"gray.800"}>Write your prompt...</DrawerHeader>

          <DrawerBody>
            <Center>
              <Input
                width={"80%"}
                textColor={"gray.800"}
                placeholder="Type here..."
                borderColor={"gray.800"}
              />
            </Center>
          </DrawerBody>

          <DrawerFooter>
            <Button
              onClick={getMessages}
              colorScheme="teal"
              fontWeight={900}
              fontSize={24}
            >
              <IoSend />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
