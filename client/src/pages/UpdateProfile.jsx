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

export default function UpdateProfile() {
  const [jobTitle, setJobTitle] = useState("");
  const [compName, setCompName] = useState("");
  const [jobDuration, setJobDuration] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [WorkFrom, setWorkFrom] = useState("office");
  const [location, setLocation] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobLevel, setJobLevel] = useState("");

  const userType = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser")).userType
    : null;
  console.log(userType);
  // const interpretResponse = (response) => {
  //   if (response.response === "success" && response.responseCode === 200) {
  //     toast.success(response.message, {
  //       duration: 1500,
  //       position: "top-center",
  //     });
  //     navigate(`/jobList`);
  //   } else {
  //     toast.error(response.message, {
  //       duration: 1500,
  //       position: "top-center",
  //     });
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = {
  //       jobTitle,
  //       compName,
  //       jobDuration,
  //       salary,
  //       jobType,
  //       WorkFrom,
  //       location,
  //       jobDesc,
  //       jobLevel,
  //       userId: JSON.parse(localStorage.getItem("currentUser")),
  //     };
  //     dispatch(createNewJobAction(data, interpretResponse));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <Text className="text-center text-2xl font-semibold">
        Update Your Profile
      </Text>

      <form className="flex flex-col gap-4 my-12 md:w-3/4 mx-auto">
        <HStack>
          {userType === "Recuiter" ? (
            <FormControl className="text-gray-400">
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </FormControl>
          ) : (
            <FormControl className="text-gray-400">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={compName}
                onChange={(e) => setCompName(e.target.value)}
              />
            </FormControl>
          )}

          <FormControl className="text-gray-400">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={compName}
              onChange={(e) => setCompName(e.target.value)}
            />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={jobDuration}
              onChange={(e) => setJobDuration(e.target.value)}
            />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </FormControl>
        </HStack>

        {userType === "Recuiter" ? (
          <>
            {" "}
            <FormControl className="text-gray-400">
              <FormLabel>About The Company</FormLabel>
              <Textarea
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </FormControl>
            <FormControl className="text-gray-400">
              <FormLabel>Benefits from the company</FormLabel>
              <Textarea
                type="text"
                value={compName}
                onChange={(e) => setCompName(e.target.value)}
              />
            </FormControl>
          </>
        ) : null}

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Profile Picture</FormLabel>
            <Input
              type="file"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            Update Profile
          </Button>
        </Stack>
      </form>
    </div>
  );
}
