import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEducations, addEducation } from "../../redux/actions/userAction";
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
  Input,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import toast from "react-hot-toast";

export default function Education() {
  const dispatch = useDispatch();
  const [instName, setInstName] = useState("");
  const [depName, setDepName] = useState("");
  const [eduLevel, setEduLevel] = useState("");
  const [studyFrom, setStudyFrom] = useState("");
  const [studyTo, setStudyTo] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;

    dispatch(userEducations(id));
  }, [dispatch]);

  const { userEduc } = useSelector((state) => state.userEduReducer);

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

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      instName,
      depName,
      eduLevel,
      studyFrom,
      studyTo,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    dispatch(addEducation(data, interpretResponse));
  };

  return (
    <Flex
      className="flex flex-col w-full p-6 rounded-lg gap-2"
      bg={useColorModeValue("white", "#183242")}
    >
      <div className="flex flex-col gap-3">
        {userEduc &&
          userEduc.map((item) => {
            return (
              <div
                key={item._id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>
                  <span className="font-semibold">Institution Name:</span>{" "}
                  {item.instName}
                </p>
                <h4>
                  <span className="font-semibold">Course Name:</span>{" "}
                  {item.depName && item.depName}
                </h4>
                <p>
                  <span className="font-semibold">Level:</span> {item.eduLevel}
                </p>

                <p className="flex flex-col">
                  <p className="font-semibold">
                    Study From:{" "}
                    <span className="font-normal">
                      {item.studyFrom && item.studyFrom}
                    </span>
                  </p>{" "}
                  <p className="font-semibold">
                    Study To:{" "}
                    <span className="font-normal">
                      {item.studyTo && item.studyTo}
                    </span>
                  </p>{" "}
                </p>
              </div>
            );
          })}
      </div>

      <div>
        <Button className="mt-3 bg-orange-400 p-2 text-white" onClick={onOpen}>
          + Add Education
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent width={"auto"} height={"auto"}>
          <ModalHeader>Add Education</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={submitHandler}>
            <ModalBody className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Ex. Unity University"
                value={instName}
                onChange={(e) => setInstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Ex. Computer Science"
                value={depName}
                onChange={(e) => setDepName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Ex. BSC"
                value={eduLevel}
                onChange={(e) => setEduLevel(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Study From"
                value={studyFrom}
                onChange={(e) => setStudyFrom(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Study To"
                value={studyTo}
                onChange={(e) => setStudyTo(e.target.value)}
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
