import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Filter() {
  return (
    <Flex
      className="flex flex-col max-w-[300px] p-6"
      bg={useColorModeValue("white", "#183242")}
    >
      <Flex className="flex justify-between items-center">
        <Text>Filter Jobs</Text>
        <Button>Clear</Button>
      </Flex>

      <Flex>
        <Text className="text-lg font-bold">Filter By Salary</Text>

        <Box className="flex items-center gap-2">
          <FormControl>
            <input type="checkbox" />
            <FormLabel htmlFor="flexCheckDefault" style={{ marginTop: "7px" }}>
              5000 br
            </FormLabel>
          </FormControl>
        </Box>
      </Flex>

      <Flex className="mt-3 p-1">
        <Text className="font-bold text-lg">Filter By Location</Text>
        <FormControl>
          <Input
            type="text"
            placeholder="location"
            className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mr-2"
          />

          <Button
            type="button"
            className="bg-orange-400 p-2 rounded-md items-end justify-end text-white"
          >
            Search
          </Button>
        </FormControl>
      </Flex>
    </Flex>
  );
}
