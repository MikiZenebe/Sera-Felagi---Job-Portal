import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function JobDetail() {
  return (
    <Flex
      className="flex flex-col w-full p-6 rounded-lg gap-2"
      bg={useColorModeValue("white", "#183242")}
    >
      <Flex className="flex items-center gap-2 justify-between">
        <Flex className="flex items-center gap-3">
          <Avatar size={"sm"} />
          <Flex className="flex flex-col">
            <Flex className="flex flex-col gap-1">
              <h3 className="font-bold">Junior UI/UX Designer</h3>
              <div className="flex gap-3 items-center">
                <Text
                  color={useColorModeValue("#055DFA", "#5e99ff")}
                  className="rounded-lg font-medium"
                >
                  2 Positions
                </Text>
                <Text
                  color={useColorModeValue("#FA4F09", "#FA4F09")}
                  className="rounded-lg font-medium"
                >
                  Full Time
                </Text>
                <Text
                  color={useColorModeValue("#34A853", "#41c564")}
                  className="rounded-lg font-medium"
                >
                  2 Years
                </Text>
                <Text
                  color={useColorModeValue("#3AC2BA", "#3AC2BA")}
                  className="rounded-lg font-medium"
                >
                  $ 95,000/Year
                </Text>
              </div>
            </Flex>
          </Flex>
        </Flex>

        <Button
          size={"sm"}
          bg={useColorModeValue("#6A38C2", "#6A38C2")}
          color={useColorModeValue("white", "white")}
          _hover={useColorModeValue("", "#183242")}
        >
          Apply Now
        </Button>
      </Flex>
    </Flex>
  );
}
