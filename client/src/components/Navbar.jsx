/* eslint-disable react-hooks/rules-of-hooks */

import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/authAction";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
  const userType = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser")).userType
    : null;

  const logoutHandler = (e) => {
    e.preventDefault();

    dispatch(logoutUser());
    navigate(`/login`);
  };

  return (
    <>
      <Box className="px-4 sm:px-14 my-4">
        <Flex className="flex justify-between items-center py-3 backdrop-blur-lg  ">
          <Link to={"/"}>
            <Flex className="flex gap-1 font-bold text-2xl">
              {" "}
              <Text
                color={useColorModeValue("", "white")}
                className="text-[#6A38C2]"
              >
                ስራ
              </Text>
              <Text className="text-[#FA4F09]">ፈላጊ</Text>
            </Flex>
          </Link>

          {/*Links based on userType */}
          <Box className="hidden md:flex">
            {userType === "Candidate" ? (
              <Flex className="flex justify-between gap-8 font-semibold">
                <Link to={"/"} className="active:text-[#6A38C2]">
                  Home
                </Link>
                <Link to={"/jobList"}>Find Job</Link>
                <Link to={"/myApplication"}>My Application</Link>
                <Link to={`/resume/${user._id}`}>Resume</Link>
                <Link to={"/updateProfile"}>Update Profile</Link>
              </Flex>
            ) : null}
            {userType === "Recuiter" ? (
              <Flex className="flex justify-between gap-8">
                <Link to={"/"} className="active:text-[#6A38C2]">
                  Home
                </Link>
                <Link to={"/jobList"}>Find Job</Link>
                <Link to={"/createJob"}>Create Job</Link>
                <Link to={"/myJobList"}>Job View</Link>
                <Link to={"/updateProfile"}>Update Profile</Link>
              </Flex>
            ) : null}
          </Box>

          <Flex className="flex items-center gap-3">
            <Box className="cursor-pointer" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}{" "}
            </Box>

            {user && (
              <Box className="md:hidden">
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
                    {userType === "Candidate" ? (
                      <Box>
                        <MenuItem>
                          <Link to={"/"}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/jobList"}>Find Job</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/myApplication"}>My Application</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={`/resume/${user._id}`}>Resume</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/updateProfile"}>Update Profile</Link>
                        </MenuItem>
                      </Box>
                    ) : null}
                    {userType === "Recuiter" ? (
                      <Box>
                        <MenuItem>
                          <Link to={"/"}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/jobList"}>Find Job</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/createJob"}>Create Job</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/myJobList"}>Job View</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to={"/updateProfile"}>Update Profile</Link>
                        </MenuItem>
                      </Box>
                    ) : null}
                  </MenuList>
                </Menu>
              </Box>
            )}

            {!user ? (
              <Box className="flex gap-2">
                <Button
                  className="border border-black/30"
                  size={"sm"}
                  _hover={"none"}
                  bg={useColorModeValue("white", "")}
                  borderColor={useColorModeValue("black", "white")}
                >
                  <Link to={`/login`}>Login</Link>
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
            ) : (
              <Box className="flex gap-2">
                <Button
                  onClick={logoutHandler}
                  className="text-white dark:text-white"
                  size={"sm"}
                  _hover={"none"}
                  bg={useColorModeValue("#c23838", "#c23838")}
                  color={useColorModeValue("white", "white")}
                >
                  Logout
                </Button>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
