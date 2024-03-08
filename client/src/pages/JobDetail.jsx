import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Blocks, Calendar, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getJobByIdAction } from "../redux/actions/jobActions";

export default function JobDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobByIdAction(id));
  }, [dispatch, id]);

  const { job } = useSelector((state) => state.getJobByIdReducer);
  console.log(job);

  return (
    <Flex className="w-full gap-4 flex flex-col md:flex-row">
      <Flex
        className="flex flex-col w-full md:w-3/4 lg:w-3/4 p-6 rounded-lg gap-2 mx-auto"
        bg={useColorModeValue("white", "#183242")}
      >
        <Flex className="flex items-center gap-2 justify-between">
          <Flex className="flex items-center gap-3">
            <Avatar size={"sm"} />
            <Flex className="flex flex-col">
              <Flex className="flex flex-col">
                <h3 className="font-bold">{job.jobTitle}</h3>
                {/* <div className="flex gap-3 items-center">
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
                </div> */}

                <Text className="rounded-lg font-medium text-gray-400">
                  {job.compName}
                </Text>
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

        <Flex className="my-3 flex flex-col gap-4">
          <Flex className="flex flex-col gap-2">
            <Text className="font-bold">Job Description</Text>
            <Text className="text-gray-400">{job.jobDesc}</Text>
          </Flex>

          <Flex className="flex flex-col gap-2">
            <Text className="font-bold">Essential Knowledge</Text>
            <Text className="text-gray-400">
              React.JS, Node.JS, Tailwind CSS
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        className="flex flex-col mx-auto w-full md:w-1/4 lg:w-1/4 p-6 rounded-lg gap-2"
        bg={useColorModeValue("white", "#183242")}
      >
        <Flex className="flex flex-col gap-6">
          <Flex className="flex justify-between">
            <Flex className="flex flex-col items-center font-medium">
              <Text>Salary (USD)</Text>
              <Text className="text-[#3AC2BA]">${job.salary}</Text>
            </Flex>
            <Flex className="flex flex-col items-center font-medium">
              {" "}
              <Text>Job Location</Text>
              <Text className="text-gray-400">{job.location}</Text>
            </Flex>
          </Flex>

          <Flex className="flex flex-col gap-3">
            <Text className="font-medium">Job Overview</Text>

            <Flex className="flex flex-wrap gap-6">
              <Flex className="flex flex-col gap-1">
                <Calendar color={useColorModeValue("#6A38C2", "#b48ff3")} />

                <Box>
                  <Text className="text-xs font-medium text-gray-400">
                    JOB POSTED:{" "}
                  </Text>
                  <Text className="text-xs font-medium ">{job.updatedAt}</Text>
                </Box>
              </Flex>

              <Flex className="flex flex-col gap-1">
                <Clock color={useColorModeValue("#6A38C2", "#b48ff3")} />

                <Box>
                  <Text className="text-xs font-medium text-gray-400">
                    JOB EXPIRE IN:
                  </Text>
                  <Text className="text-xs font-medium ">28 Jun, 2023</Text>
                </Box>
              </Flex>

              <Flex className="flex flex-col gap-1">
                <Blocks color={useColorModeValue("#6A38C2", "#b48ff3")} />

                <Box>
                  <Text className="text-xs font-medium text-gray-400">
                    JOB LEVEL:
                  </Text>
                  <Text className="text-xs font-medium ">28 Jun, 2023</Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
