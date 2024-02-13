"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = false;

  return (
    <>
      <Box px={4}>
        <Flex className="flex justify-between items-center">
          <Flex className="flex gap-1 font-bold text-2xl">
            <Text
              color={useColorModeValue("", "white")}
              className="text-[#6A38C2]"
            >
              ስራ
            </Text>
            <Text className="text-[#FA4F09]">ፈላጊ</Text>
          </Flex>

          {user ? (
            <Flex>
              <Text>Link 1</Text>
              <Text>Link 1</Text>
              <Text>Link 1</Text>
              <Text>Link 1</Text>
            </Flex>
          ) : null}

          <Flex className="flex items-center gap-3">
            <Box className="flex gap-2">
              <Button
                className="border border-black/30"
                size={"sm"}
                _hover={"none"}
                bg={useColorModeValue("white", "")}
                borderColor={useColorModeValue("black", "white")}
              >
                Login
              </Button>
              <Button
                className="text-white dark:text-white"
                size={"sm"}
                _hover={"none"}
                bg={useColorModeValue("#6A38C2", "#6A38C2")}
                color={useColorModeValue("white", "white")}
              >
                Sign Up
              </Button>
            </Box>
            <Box className="cursor-pointer" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
            </Box>

            {/* <Menu>
                <MenuButton
                  as={Button}
                  variant={"link"}
                  className="rounded-full cursor-pointer min-w-0"
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    {" "}
                    <p>Username</p>
                  </Center>
                  <br /> <MenuDivider /> <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
