import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { File, SearchIcon, UserCircle } from "lucide-react";
import React from "react";

export default function StepCards() {
  return (
    <Container className="flex flex-col gap-8" maxW={"full"}>
      <Flex className="flex flex-col gap-2">
        <Text className="text-3xl mx-auto font-bold text-center flex gap-2">
          Get Hired In
          <span className="text-[#935af7]">4 Quick Easy Steps</span>
        </Text>

        <Text className="text-center font-medium text-gray-400 leading-[30px] py-1 max-w-[600px] mx-auto">
          The quickest and most effective way to get hired by the top firm
          working in your carrer interest area
        </Text>
      </Flex>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6">
        <Box
          bg={useColorModeValue("white", "#9f6afa")}
          color={useColorModeValue("gray.500", "white")}
          className="p-7 flex flex-col gap-2 max-w-[300px] card shadow-xl rounded-lg cursor-pointer"
        >
          <Text className="bg-[#ffeae1] w-fit p-2 rounded-full">
            <UserCircle size={20} className="text-orange-500" />
          </Text>
          <Text
            color={useColorModeValue("black", "white")}
            className="text-lg font-bold"
          >
            Create an Account
          </Text>
          <Text className="text-sm font-normal">
            Signup fot the jop applicant profile, mention your qualification,
            past experiences, and expertise, and scope your interests
          </Text>
        </Box>

        <Box
          bg={useColorModeValue("white", "#9f6afa")}
          color={useColorModeValue("gray.500", "white")}
          className="p-7 flex flex-col gap-2 max-w-[300px] card shadow-xl rounded-lg cursor-pointer"
        >
          <Text className="bg-[#e4e1ff] w-fit p-2 rounded-full">
            <SearchIcon size={20} className="text-indigo-600" />
          </Text>
          <Text
            color={useColorModeValue("black", "white")}
            className="text-lg font-bold"
          >
            Search Job
          </Text>
          <Text className="text-sm font-normal">
            Once you set your job hunting parameters, you'll find many openings
            related to your career interest on the home page and even filter out
            some of the best job openings
          </Text>
        </Box>

        <Box
          bg={useColorModeValue("white", "#9f6afa")}
          color={useColorModeValue("gray.500", "white")}
          className="p-7 flex flex-col gap-2 max-w-[300px] card shadow-xl rounded-lg cursor-pointer"
        >
          <Text className="bg-[#e1fffa] w-fit p-2 rounded-full">
            <File size={20} className="text-[#3AC2BA]" />
          </Text>
          <Text
            color={useColorModeValue("black", "white")}
            className="text-lg font-bold"
          >
            Upload CV/ Resume
          </Text>
          <Text className="text-sm font-normal">
            From numerous job openings, shortlist the right-match vacancy to
            your profile and apply right after by uploading your CV/ Resume and
            answering a couple of questions, if any.
          </Text>
        </Box>

        <Box
          bg={useColorModeValue("white", "#9f6afa")}
          color={useColorModeValue("gray.500", "white")}
          className="p-7 flex flex-col gap-2 max-w-[300px] card shadow-xl rounded-lg cursor-pointer"
        >
          <Text className="bg-[#fffae1] w-fit p-2 rounded-full">
            <UserCircle size={20} className="text-yellow-500" />
          </Text>
          <Text
            color={useColorModeValue("black", "white")}
            className="text-lg font-bold"
          >
            Get Job
          </Text>
          <Text className="text-sm font-normal">
            After applying, wait for some time schedule an interview, and if
            everything goes right, then get hired more quickly than traditional
            hiring methods.
          </Text>
        </Box>
      </div>
    </Container>
  );
}
