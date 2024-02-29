import { Avatar, Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { HeartIcon } from "lucide-react";
import React from "react";

export default function JobLists() {
  return (
    <Flex
      className="flex flex-col w-full p-6 rounded-lg gap-2"
      bg={useColorModeValue("white", "#183242")}
    >
      <Flex className="flex items-center gap-2 justify-between">
        <Flex className="flex items-center gap-2">
          <Avatar size={"sm"} />
          <Flex className="flex flex-col">
            <Flex className="flex flex-col">
              <h3 className="font-bold">Junior UI/UX Designer</h3>
              <h4 className="text-gray-400">Arif Studios</h4>
            </Flex>
          </Flex>
        </Flex>

        <Button size={"sm"}>
          <HeartIcon size={20} />
        </Button>
      </Flex>

      <Flex>
        <p className="text-gray-400">
          We are looking for talented UI/UX designer, to help us for creating
          web designes
        </p>
      </Flex>

      <Flex className="flex gap-3 flex-wrap my-4">
        <Box
          bg={useColorModeValue("#F3F7FF", "#055ffa7b")}
          color={useColorModeValue("#055DFA", "#cbd8ee")}
          className=" p-2 rounded-lg font-semibold"
        >
          2 Positions
        </Box>
        <Box
          bg={useColorModeValue("#FFF0EA", "#fa4d096e")}
          color={useColorModeValue("#FA4F09", "#e0eafc")}
          className=" p-2 rounded-lg font-semibold"
        >
          Full Time
        </Box>
        <Box
          bg={useColorModeValue("#d2f0db", "#34a85371")}
          color={useColorModeValue("#34A853", "#e0eafc")}
          className=" p-2 rounded-lg font-semibold"
        >
          2 Years
        </Box>
        <Box
          bg={useColorModeValue("#E1FFFD", "#3ac2b961")}
          color={useColorModeValue("#3AC2BA", "#e0eafc")}
          className=" p-2 rounded-lg font-semibold"
        >
          $ 95,000/Year
        </Box>
      </Flex>
    </Flex>
  );
}
