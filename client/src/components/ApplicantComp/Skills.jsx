import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userEducations,
  addEducation,
  userSkills,
  addASkill,
  updateASkill,
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
import { EditIcon, TrashIcon } from "lucide-react";

export default function Skills() {
  const dispatch = useDispatch();
  const [skillType, setSkillType] = useState("");
  const [skillStatus, setSkillStatus] = useState("");
  const [itemSelect, setItemSelect] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [eleId, setEleId] = useState(null);
  const [addItem, setEAddItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("currentUser"))._id;

    if (id) {
      dispatch(userSkills(id));
    }
  }, [dispatch]);

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

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      skillType,
      skillStatus: itemSelect,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    let updateData = {
      skillType,
      skillStatus: itemSelect,
      id: eleId,
      uId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };

    //
    if (addItem) {
      dispatch(addASkill(data, interpretResponse));
    } else {
      dispatch(updateASkill(updateData));
    }
  };

  const handleEditFunction = (element, status) => {
    setEditItem(element);

    setEAddItem(null);
    setSkillName(element.skillType);
    setItemSelect(element.skillStatus);
    setEleId(element._id);
  };

  const AddSkillHandler = () => {
    setEditItem(null);
    setEAddItem(true);
  };

  const deleteSkillHandler = (element) => {
    let updateData = {
      id: element._id,
      uId: JSON.parse(localStorage.getItem("currentUser"))._id,
    };
    console.log(updateData);
    dispatch(deleteASkill(updateData));
    setDeleteItem(true);
  };

  return (
    <Flex
      className="flex flex-col w-full p-6 rounded-lg gap-2"
      bg={useColorModeValue("white", "#183242")}
    >
      <div className="flex flex-col gap-3">
        {skills &&
          skills.map((item, index) => {
            return (
              <div key={item._id}>
                {index % 2 == 0 ? (
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <p style={{ fontSize: "20px", fontWeight: "800" }}>
                          {item.skillType}
                        </p>

                        <p style={{ fontWeight: "300" }}>
                          {item.skillStatus && item.skillStatus}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p onClick={() => handleEditFunction(item, true)}>
                          <EditIcon size={20} />
                        </p>

                        <p onClick={() => deleteSkillHandler(item)}>
                          <TrashIcon size={20} />
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="col-md-6"
                    style={{ marginLeft: "500px", marginTop: "-84px" }}
                  >
                    <div className="row">
                      <div className="col-md-8">
                        <p style={{ fontSize: "20px", fontWeight: "800" }}>
                          {item.skillType}
                        </p>

                        <p style={{ fontWeight: "300" }}>
                          {item.skillStatus && item.skillStatus}{" "}
                        </p>
                      </div>
                      <div className="col-md-4 mt-2">
                        <EditIcon
                          onClick={() => handleEditFunction(item, true)}
                        >
                          Edit
                        </EditIcon>{" "}
                        {"    "}
                        <TrashIcon onClick={() => deleteSkillHandler(item)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div>
        <Button className="mt-3 bg-orange-400 p-2 text-white" onClick={onOpen}>
          + Add Skill
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent width={"auto"} height={"auto"}>
          <ModalHeader>
            {editItem === null ? "Add a Skill" : "Update Skill"}
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={submitHandler}>
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
                onClick={() => AddSkillHandler()}
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
