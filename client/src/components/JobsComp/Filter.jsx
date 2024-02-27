import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Filter() {
  const checkValue = [5000, 10000, 15000, 25000, 50000];
  const [searchKey, setSearchKey] = useState("");

  return (
    <Flex
      className="flex flex-col max-w-[300px] p-6 rounded-lg"
      bg={useColorModeValue("white", "#183242")}
    >
      <Flex className="flex justify-between items-center">
        <Text className="font-bold text-lg">Filter Jobs</Text>
        <Button
          bg={useColorModeValue("", "")}
          _hover={"none"}
          size={"sm"}
          className="border border-[#6A38C2] bg-transparent"
        >
          Clear All
        </Button>
      </Flex>

      <Flex className="flex flex-col my-4">
        <Accordion allowToggle>
          <AccordionItem>
            <Text>
              <AccordionButton bg={useColorModeValue("", "")} _hover={"none"}>
                <Box className="text-md font-semibold text-left">
                  Filter by Salary
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>

            <AccordionPanel>
              {checkValue.map((item, index) => (
                <>
                  <Box key={index} className="flex items-center gap-2">
                    <FormControl className="flex items-center gap-2">
                      <input value={item} id={item.value} type="checkbox" />
                      <FormLabel
                        htmlFor="flexCheckDefault"
                        style={{ marginTop: "7px" }}
                      >
                        {item} br
                      </FormLabel>
                    </FormControl>
                  </Box>
                </>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton bg={useColorModeValue("", "")} _hover={"none"}>
                <Box className="text-md font-semibold text-left">
                  Filter By Location
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>

            <AccordionPanel>
              <FormControl className="flex flex-col gap-2">
                <Input
                  size={"sm"}
                  type="text"
                  placeholder="location"
                  className="transition-all duration-[300ms] ease-out rounded-lg  appearance-none border border-orange-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent mr-2"
                />

                <Button
                  size={"sm"}
                  type="button"
                  className="bg-orange-400 p-2 rounded-md items-end justify-end text-white"
                >
                  Search
                </Button>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}
