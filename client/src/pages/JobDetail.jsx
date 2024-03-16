/* eslint-disable react-hooks/rules-of-hooks */
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Blocks, Calendar, Clock, TrashIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkillForJob,
  getAllUserByJobIdAction,
  getJobByIdAction,
  getJobSkillByIdAction,
} from "../redux/actions/jobActions";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [skill_name, setSkillName] = useState("");

  useEffect(() => {
    dispatch(getJobByIdAction(id));
    dispatch(getJobSkillByIdAction(id));
    dispatch(getAllUserByJobIdAction(id));
  }, [dispatch, id, skill_name]);

  const userId = JSON.parse(localStorage.getItem("currentUser"))._id;

  const { job } = useSelector((state) => state.getJobByIdReducer);
  const { jobskill } = useSelector((state) => state.getJobSkillByIdReducer);
  const { appliList } = useSelector((state) => state.getUserbyjobIdReducer);

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });
    } else {
      toast.error("Error While Deleted", {
        duration: 1500,
        position: "top-center",
      });
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    let data = {
      jobId: id,
      reqSkill: skill_name,
    };

    dispatch(addSkillForJob(data, interpretResponse));
    setSkillName("");
  };

  const deletePost = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/job/delete/${id}`
      );

      toast.success("Deleted", {
        duration: 1500,
        position: "top-center",
      });
      navigate(`/jobList`);
    } catch (error) {
      console.log(error);
    }
  };

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

                <Text className="rounded-lg font-medium text-gray-400">
                  {job.compName}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex className="flex items-center gap-2">
            <Button
              size={"sm"}
              bg={useColorModeValue("#6A38C2", "#6A38C2")}
              color={useColorModeValue("white", "white")}
              _hover={useColorModeValue("", "#183242")}
            >
              Apply Now
            </Button>

            {userId === job?.userId && (
              <Box
                className="hover:cursor-pointer"
                color={useColorModeValue("red", "red")}
                _hover={useColorModeValue("#e57b7b", "#e57b7b")}
                onClick={() => deletePost(job?._id)}
              >
                <TrashIcon size={20} />
              </Box>
            )}
          </Flex>
        </Flex>

        <Flex className="my-3 flex flex-col gap-4">
          <Flex className="flex flex-col gap-2">
            <Text className="font-bold">Job Description</Text>
            <Text className="text-gray-400">{job.jobDesc}</Text>
          </Flex>

          <Flex className="flex flex-col gap-3">
            <Flex className="flex items-center gap-2">
              <Text className="font-bold">Essential Skills</Text>
              {job?.userId === userId && (
                <Button
                  bg={useColorModeValue("#6A38C2", "#6A38C2")}
                  color={useColorModeValue("white", "white")}
                  _hover={useColorModeValue("", "#183242")}
                  className="px-2 "
                  size={"sm"}
                  onClick={onOpen}
                >
                  Add Skill
                </Button>
              )}
            </Flex>

            <Flex className="flex gap-1">
              {jobskill?.map((item, i) => (
                <>
                  {" "}
                  <Text
                    key={i}
                    color={useColorModeValue("#57AB57", "#6add6a")}
                    className="font-semibold"
                  >
                    {item.reqSkill}
                  </Text>
                  <Box className="bg-gray-400 w-[1px] rounded-full h-auto"></Box>
                </>
              ))}
            </Flex>
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
                  <Text className="text-xs font-medium ">
                    {" "}
                    {moment(job.updatedAt).fromNow()}
                  </Text>
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
                  <Text className="text-xs font-medium ">{job.jobLevel}</Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent width={"auto"} height={"200px"}>
          <ModalHeader>Add Skill</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={addSkill}>
            <ModalBody>
              <Input
                type="text"
                placeholder="Ex. javascript"
                value={skill_name}
                onChange={(e) => setSkillName(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                color={useColorModeValue("#ffffff", "#ffffff")}
                bg={useColorModeValue("#6A38C2", "#6A38C2")}
                type="submit"
              >
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
