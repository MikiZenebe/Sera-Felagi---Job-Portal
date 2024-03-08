/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { HeartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function JobLists({ jobs }) {
  //Make three dots or read more
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      {jobs &&
        jobs.map((item) => (
          <>
            <Flex
              key={item._id}
              className="flex flex-col w-full p-6 rounded-lg gap-2"
              bg={useColorModeValue("white", "#183242")}
            >
              <Flex className="flex items-center gap-2 justify-between">
                <Flex className="flex items-center gap-2">
                  <Avatar size={"sm"} />
                  <Flex className="flex flex-col">
                    <Flex className="flex flex-col">
                      <h3 className="font-bold">{item.jobTitle}</h3>
                      <h4 className="text-gray-400">{item.compName}</h4>
                    </Flex>
                  </Flex>
                </Flex>

                <Button size={"sm"}>
                  <HeartIcon size={20} />
                </Button>
              </Flex>

              <Flex>
                <p className="text-gray-400">
                  {truncateString(item.jobDesc, 150)}
                </p>
              </Flex>

              <Flex className="flex gap-3 flex-wrap my-4">
                <Box
                  bg={useColorModeValue("#F3F7FF", "#6397ff67")}
                  color={useColorModeValue("#055DFA", "#5e99ff")}
                  className=" p-2 rounded-lg font-medium"
                >
                  {item.location}
                </Box>
                <Box
                  bg={useColorModeValue("#FFF0EA", "#fa4d0957")}
                  color={useColorModeValue("#FA4F09", "#FA4F09")}
                  className=" p-2 rounded-lg font-semibold"
                >
                  {item.jobType}
                </Box>
                <Box
                  bg={useColorModeValue("#d2f0db", "#34a85371")}
                  color={useColorModeValue("#34A853", "#41c564")}
                  className=" p-2 rounded-lg font-semibold"
                >
                  {item.jobDuration}
                </Box>
                <Box
                  bg={useColorModeValue("#E1FFFD", "#3ac2b961")}
                  color={useColorModeValue("#3AC2BA", "#3AC2BA")}
                  className=" p-2 rounded-lg font-semibold"
                >
                  ${item.salary}
                </Box>
              </Flex>

              <Flex className="flex gap-3">
                <Button
                  size={"sm"}
                  bg={useColorModeValue("#6A38C2", "#6A38C2")}
                  color={useColorModeValue("white", "white")}
                  _hover={useColorModeValue("", "#183242")}
                >
                  Apply Now
                </Button>

                <Link to={`/job/${item._id}`}>
                  <Button
                    size={"sm"}
                    bg={useColorModeValue("white", "transparent")}
                    border={"solid 1px"}
                    borderColor={useColorModeValue("black", "white")}
                    color={useColorModeValue("black", "white")}
                    _hover={useColorModeValue("", "")}
                  >
                    View Details
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </>
        ))}
    </div>
  );
}
