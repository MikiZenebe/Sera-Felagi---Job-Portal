import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Img from "../../assets/offer.png";

export default function Offer() {
  return (
    <Container className="flex flex-col gap-8" maxW={"full"}>
      <Flex className="flex flex-col gap-2">
        <Text className="text-3xl  font-bold flex gap-2 text-center mx-auto">
          What We Offer
        </Text>

        <Text className="text-center mx-auto font-medium text-gray-400 leading-[30px] py-1 max-w-[600px] ">
          Sera Felagi is the right platform for you to get various job
          recommendations, get career counselling, and find your ideal job
          platform.
        </Text>
      </Flex>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-6 ">
        <Box
          bg={useColorModeValue("white", "")}
          color={useColorModeValue("gray.500", "white")}
          className="p-2 flex flex-col gap-2 max-w-[300px] card  rounded-lg cursor-pointer"
        >
          <Image src={Img} />

          <Flex className="flex gap-1">
            <Text
              color={useColorModeValue("gray.500", "white")}
              className="text-4xl font-bold "
            >
              01
            </Text>
            <Box className="w-[2px] bg-[#935af7] justify-center items-center"></Box>
            <Text
              color={useColorModeValue("black", "white")}
              className="mt-2 font-bold"
            >
              Job Recommendation
            </Text>
          </Flex>
        </Box>

        <Box
          bg={useColorModeValue("white", "")}
          color={useColorModeValue("gray.500", "white")}
          className="p-2 flex flex-col gap-2 max-w-[300px] card  rounded-lg cursor-pointer"
        >
          <Image src={Img} />

          <Flex className="flex gap-1">
            <Text
              color={useColorModeValue("gray.500", "white")}
              className="text-4xl font-bold "
            >
              02
            </Text>
            <Box className="w-[2px] bg-[#935af7] justify-center items-center"></Box>
            <Text
              color={useColorModeValue("black", "white")}
              className="mt-2 font-bold"
            >
              Create & Build Profile
            </Text>
          </Flex>
        </Box>

        <Box
          bg={useColorModeValue("white", "")}
          color={useColorModeValue("gray.500", "white")}
          className="p-2 flex flex-col gap-2 max-w-[300px] card  rounded-lg cursor-pointer"
        >
          <Image src={Img} />

          <Flex className="flex gap-1">
            <Text
              color={useColorModeValue("gray.500", "white")}
              className="text-4xl font-bold "
            >
              03
            </Text>
            <Box className="w-[2px] bg-[#935af7] justify-center items-center"></Box>
            <Text
              color={useColorModeValue("black", "white")}
              className="mt-2 font-bold"
            >
              Career Consultation
            </Text>
          </Flex>
        </Box>
      </div>
    </Container>
  );
}
