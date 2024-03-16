import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewJobAction } from "../redux/actions/jobActions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [compName, setCompName] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [WorkFrom, setWorkFrom] = useState("office");
  const [location, setLocation] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobLevel, setJobLevel] = useState("");

  const dispatch = useDispatch();

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });
      navigate(`/jobList`);
    } else {
      toast.error(response.message, {
        duration: 1500,
        position: "top-center",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        jobTitle,
        compName,
        jobDuration,
        salary,
        jobType,
        WorkFrom,
        location,
        jobDesc,
        jobLevel,
        userId: JSON.parse(localStorage.getItem("currentUser")),
      };
      dispatch(createNewJobAction(data, interpretResponse));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Text className="text-center text-2xl font-semibold">
        Create A New Job Post
      </Text>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 my-12 md:w-3/4 mx-auto"
      >
        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              value={compName}
              onChange={(e) => setCompName(e.target.value)}
            />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Duration of Job</FormLabel>
            <Input
              type="text"
              value={jobDuration}
              onChange={(e) => setJobDuration(e.target.value)}
            />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Salary</FormLabel>
            <Input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </FormControl>
        </HStack>

        <FormControl className="text-gray-400">
          <FormLabel>Job Description</FormLabel>
          <Textarea
            type="text"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />
        </FormControl>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Job Type</FormLabel>
            <Select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="cursor-pointer"
            >
              <option>Select Type</option>
              <option value="internship">Internship</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </Select>
          </FormControl>

          <FormControl className="text-gray-400">
            <FormLabel>Work Place</FormLabel>
            <Select
              value={WorkFrom}
              onChange={(e) => setWorkFrom(e.target.value)}
              className="cursor-pointer"
            >
              <option>Select Place</option>
              <option value="onsite">On-Site</option>
              <option value="remote">Remote</option>
              <option value="both">Hybrid/Both</option>
            </Select>
          </FormControl>
        </HStack>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>

          <FormControl className="text-gray-400">
            <FormLabel>Job Level</FormLabel>
            <Input
              type="text"
              value={jobLevel}
              onChange={(e) => setJobLevel(e.target.value)}
            />
          </FormControl>
        </HStack>

        <Stack spacing={10} pt={2}>
          <Button
            type="submit"
            loadingText="Submitting"
            size={"lg"}
            _hover={"none"}
            bg={useColorModeValue("#6A38C2", "#6A38C2")}
            color={useColorModeValue("white", "white")}
          >
            Create a Job
          </Button>
        </Stack>
      </form>
    </div>
  );
}
