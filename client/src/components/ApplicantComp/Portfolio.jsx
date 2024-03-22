/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPortfolio, userPortfolio } from "../../redux/actions/userAction";
import toast from "react-hot-toast";
import { LinkIcon, LucideGithub } from "lucide-react";

export default function Portfolio() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projTitle, setProjTitle] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projLink, setProjLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;
    if (id) {
      dispatch(userPortfolio(id));
    }
  }, [dispatch]);

  const { portfolios } = useSelector((state) => state.userPortfolioReducer);

  const interpretResponse = (response) => {
    if (response.response === "success" && response.responseCode === 200) {
      toast.success(response.message, {
        duration: 1500,
        position: "top-center",
      });
      window.location.replace(`/resume/${id}`);
    } else {
      toast.error(response.message, {
        duration: 1500,
        position: "top-center",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      projTitle,
      projDesc,
      projLink,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    dispatch(addPortfolio(data, interpretResponse));
    window.location.replace(`/resume/${id}`);
  };

  return (
    <Flex
      className="flex flex-col w-full p-3 rounded-lg gap-2 "
      bg={useColorModeValue("white", "#183242")}
    >
      <div className="flex flex-col gap-3">
        {portfolios &&
          portfolios.map((item) => {
            return (
              <Flex
                bg={useColorModeValue("#6A38C2", "#7253aa")}
                key={item._id}
                className="flex flex-col gap-1.5 p-2 rounded-md"
              >
                <p className="text-xl font-bold text-white">{item.projTitle}</p>
                <h4 className="text-gray-400">{item.projDesc}</h4>
                <div className="flex items-center gap-2 w-auto">
                  <Text color={useColorModeValue("white", "white")}>
                    <Link to={item.projLink}>
                      <LinkIcon size={18} />
                    </Link>
                  </Text>

                  <Text color={useColorModeValue("white", "white")}>
                    <Link to={item.projLink}>
                      <LucideGithub size={18} />
                    </Link>
                  </Text>
                </div>
              </Flex>
            );
          })}
      </div>

      <div className="flex items-center gap-2">
        <Button className="mt-3 bg-orange-400 p-2 text-white" onClick={onOpen}>
          Add Project
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent className="w-auto sm:w-[500px]" height={"auto"}>
          <ModalHeader>Add a Project</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Project Title"
                value={projTitle}
                onChange={(e) => setProjTitle(e.target.value)}
              />
              <Textarea
                type="text"
                placeholder="Project Description"
                value={projDesc}
                onChange={(e) => setProjDesc(e.target.value)}
              />{" "}
              <Input
                type="text"
                placeholder="Project Link"
                value={projLink}
                onChange={(e) => setProjLink(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Github Link"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                color={useColorModeValue("#ffffff", "#ffffff")}
                bg={useColorModeValue("#6A38C2", "#6A38C2")}
                type="submit"
              >
                Add Project
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
