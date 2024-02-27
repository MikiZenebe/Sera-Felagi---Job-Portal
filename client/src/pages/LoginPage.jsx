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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate(`/jobList`);
    }
  }, [navigate]);

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });

      navigate(`/jobList`);
    } else {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(loginUser(user, interpretResponse));
  };

  return (
    <Flex className="items-center justify-center">
      <Stack spacing={8} className="max-w-lg mx-auto py-12 px-6">
        <Stack className="items-center">
          <Heading className="text-4xl text-center flex gap-2">
            <Text color={useColorModeValue("", "gray.400")}>Login to</Text>
            <Text
              color={useColorModeValue("", "white")}
              className="text-[#6A38C2]"
            >
              ስራ
            </Text>
            <Text className="text-[#FA4F09]">ፈላጊ</Text>
          </Heading>
        </Stack>

        <Box
          bg={useColorModeValue("white", "#183242")}
          className="rounded-lg p-8 backdrop-blur-lg"
        >
          <Stack spacing={4}>
            <Box className="flex flex-col gap-5">
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

              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleLogin}
                  loadingText="Submitting"
                  size={"lg"}
                  _hover={"none"}
                  bg={useColorModeValue("#6A38C2", "#6A38C2")}
                  color={useColorModeValue("white", "white")}
                >
                  Login
                </Button>
              </Stack>

              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link className="font-bold text-[#6A38C2]" to={"/signup"}>
                    Sign up
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
