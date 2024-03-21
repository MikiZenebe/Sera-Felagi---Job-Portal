/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userSkills,
  addASkill,
  deleteASkill,
} from "../../redux/actions/userAction";
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
  Select,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import { TrashIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [skillType, setSkillType] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [deleteItem, setDeleteItem] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const id = JSON.parse(localStorage.getItem("currentUser"))._id;
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;

    if (id) {
      dispatch(userSkills(id));
    }
  }, [dispatch, skillType, deleteItem]);

  const { skills } = useSelector((state) => state.userSkillReducer);
  console.log(skills);

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

  const addHandler = (e) => {
    e.preventDefault();
    let data = {
      skillType,
      skillStatus: itemSelect,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    //

    dispatch(addASkill(data, interpretResponse));
    window.location.replace(`/resume/${id}`);
  };

  const deleteSkillHandler = (element) => {
    let updateData = {
      id: element._id,
      uId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    console.log(updateData);
    dispatch(deleteASkill(updateData, interpretResponse));
    window.location.replace(`/resume/${id}`);
    setDeleteItem(true);
  };

  return (
    <Flex
      className="flex flex-col w-full p-3 rounded-lg gap-2 "
      bg={useColorModeValue("white", "#183242")}
    >
      <div className="grid gap-2 items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full">
        {skills &&
          skills.map((item, index) => {
            return (
              <div className="w-auto" key={item._id}>
                <div>
                  <Flex
                    bg={useColorModeValue("#6A38C2", "#7253aa")}
                    className="flex justify-between items-center gap-2  p-2 rounded-md w-auto mx-auto text-white "
                  >
                    <div className="w-full">
                      <p className="md:text-xl font-bold">{item.skillType}</p>

                      <p className="md:text-xl text-sm">
                        {item.skillStatus && item.skillStatus}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 w-auto">
                      <p onClick={() => deleteSkillHandler(item)}>
                        <TrashIcon size={15} />
                      </p>
                    </div>
                  </Flex>
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex items-center gap-2">
        <Button className="mt-3 bg-orange-400 p-2 text-white" onClick={onOpen}>
          + Add Skill
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent width={"auto"} height={"auto"}>
          <ModalHeader>Add a Skill</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={addHandler}>
            <ModalBody className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Ex. JavaScript"
                value={skillType}
                onChange={(e) => setSkillType(e.target.value)}
              />

              <Select
                value={itemSelect}
                onChange={(e) => setItemSelect(e.target.value)}
                className="cursor-pointer"
              >
                <option>Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button
                color={useColorModeValue("#ffffff", "#ffffff")}
                bg={useColorModeValue("#6A38C2", "#6A38C2")}
                type="submit"
              >
                Add Skill
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
