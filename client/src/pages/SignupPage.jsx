/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  Select,
  useToast,
} from "@chakra-ui/react";
import { EyeIcon, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [itemSelect, setItemSelect] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerState = useSelector((state) => state.authReducer);

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast({
        title: "Success",
        status: "success",
        description: response.message,
        isClosable: true,
        duration: 1500,
        position: "top",
      });
      navigate(`/login`);
    } else {
      toast({
        title: "Error",
        status: "error",
        description: response.message,
        isClosable: true,
        duration: 1500,
        position: "top",
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = {
        name,
        username,
        email,
        password,
        userType: itemSelect,
      };
      dispatch(registerUser(user, interpretResponse));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex className="items-center justify-center">
      <Stack spacing={8} className="max-w-lg mx-auto py-12 px-6">
        <Stack className="items-center">
          <Heading className="text-4xl text-center flex gap-2">
            <Text color={useColorModeValue("", "gray.400")}>Sign up for</Text>
            <Text
              color={useColorModeValue("", "white")}
              className="text-[#6A38C2]"
            >
              ስራ
            </Text>
            <Text className="text-[#FA4F09]">ፈላጊ</Text>
          </Heading>
          <Flex className="text-3xl">
            <Text>As a {itemSelect === "" ? "" : itemSelect}</Text>
          </Flex>
        </Stack>

        <Box
          bg={useColorModeValue("white", "#183242")}
          className=" rounded-lg p-8 backdrop-blur-lg"
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>

            <Box>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h="full">
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? (
                        <EyeIcon size={25} />
                      ) : (
                        <EyeOff className="text-lg" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl className="my-6">
                <Select
                  value={itemSelect}
                  onChange={(e) => setItemSelect(e.target.value)}
                  className="cursor-pointer"
                >
                  <option>Select Role</option>
                  <option value="Recuiter">Recuiter</option>
                  <option value="Candidate">Candidate</option>
                </Select>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleRegister}
                  loadingText="Submitting"
                  size={"lg"}
                  _hover={"none"}
                  bg={useColorModeValue("#6A38C2", "#6A38C2")}
                  color={useColorModeValue("white", "white")}
                >
                  Sign up
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link className="font-bold text-[#6A38C2]" to={"/login"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
