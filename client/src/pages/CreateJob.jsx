import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function CreateJob() {
  return (
    <div>
      <Text className="text-center text-2xl font-semibold">
        Create A New Job Post
      </Text>

      <Flex className="flex flex-col gap-4 my-12 md:w-3/4 mx-auto">
        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Job Title</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Company Name</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Duration of Job</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Salary</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>

        <FormControl className="text-gray-400">
          <FormLabel>Job Description</FormLabel>
          <Textarea type="text" />
        </FormControl>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Job Type</FormLabel>
            <Select className="cursor-pointer">
              <option>Select Type</option>
              <option value="Recuiter">Internship</option>
              <option value="Candidate">Full-Time</option>
              <option value="Candidate">Part-Time</option>
            </Select>
          </FormControl>

          <FormControl className="text-gray-400">
            <FormLabel>Work Place</FormLabel>
            <Select className="cursor-pointer">
              <option>Select Place</option>
              <option value="Recuiter">On-Site</option>
              <option value="Candidate">Remote</option>
              <option value="Candidate">Hybrid/Both</option>
            </Select>
          </FormControl>
        </HStack>

        <FormControl className="text-gray-400">
          <FormLabel>Location</FormLabel>
          <Input type="text" />
        </FormControl>
      </Flex>
    </div>
  );
}
