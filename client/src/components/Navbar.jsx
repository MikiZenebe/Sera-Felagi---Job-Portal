"use client";
import { Link } from "react-router-dom";
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

  const user = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  return (
    <>
      <Box className="px-4 sm:px-14 my-4">
        <Flex className="flex justify-between items-center py-3 backdrop-blur-lg  ">
          <Flex className="flex gap-1 font-bold text-2xl">
            <Text
              color={useColorModeValue("", "white")}
              className="text-[#6A38C2]"
            >
              ስራ
            </Text>
            <Text className="text-[#FA4F09]">ፈላጊ</Text>
          </Flex>

          <Box className="hidden md:flex">
            {user.userType === "Candidate" ? (
              <Flex className="flex justify-between gap-8">
                <Link to={"/"}>Home</Link>
                <Link to={"/myApplication"}>My Application</Link>
                <Link to={"/myProfile"}>Profile</Link>
              </Flex>
            ) : (
              <Flex className="flex justify-between gap-8">
                <Link to={"/createJob"}>Create Job</Link>
                <Link to={"/myJob"}>Job View</Link>
                <Link to={"/profile"}>Profile</Link>
              </Flex>
            )}
          </Box>

          <Flex className="flex items-center gap-3">
            {!user && (
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
                  <Link to={`/signup`}>Sign Up</Link>
                </Button>
              </Box>
            )}
            <Box className="cursor-pointer" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
            </Box>

            <Box className="md:hidden">
              {" "}
              <Menu>
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
                  {user.userType === "Candidate" ? (
                    <Box>
                      <MenuItem>
                        <Link to={"/"}>Home</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/myApplication"}>My Application</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/myProfile"}>Profile</Link>
                      </MenuItem>
                    </Box>
                  ) : (
                    <Box>
                      <MenuItem>
                        <Link to={"/createJob"}>Create Job</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/myJob"}>Job View</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/profile"}>Profile</Link>
                      </MenuItem>
                    </Box>
                  )}
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
