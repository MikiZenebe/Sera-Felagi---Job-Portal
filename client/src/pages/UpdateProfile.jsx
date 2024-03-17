import {
  Avatar,
  Button,
  Center,
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
import React, { useRef, useState } from "react";
import usePreviewImg from "../hooks/usePreviewImg";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const fileRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  const [inputs, setInputs] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    password: "",
    aboutComp: user.aboutComp,
    benefits: user.benefits,
  });

  const { handleImageChange, imgUrl } = usePreviewImg();
  const [updating, setUpdating] = useState(false);

  const userType = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser")).userType
    : null;
  const id = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))._id
    : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updating) return;
    setUpdating(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...inputs, profilePic: imgUrl }),
        }
      );
      const data = await res.json();
      toast.success("Profile Updated");
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      toast.success(error);
    }
  };

  return (
    <div>
      <Text className="text-center text-2xl font-semibold">
        Update Your Profile
      </Text>

      <form
        className="flex flex-col gap-4 my-12 md:w-3/4 mx-auto"
        onSubmit={handleSubmit}
      >
        <Stack>
          <FormControl>
            <Stack direction={["column"]} spacing={6}>
              <Center>
                <Avatar size="lg" src={imgUrl || user.profilePic} />
              </Center>

              <Center w="full">
                <Button w="full" onClick={() => fileRef.current.click()}>
                  Change Profile
                </Button>
                <Input
                  type="file"
                  hidden
                  ref={fileRef}
                  onChange={handleImageChange}
                />
              </Center>
            </Stack>
          </FormControl>
        </Stack>
        <HStack>
          {userType === "Recuiter" ? (
            <FormControl className="text-gray-400">
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </FormControl>
          ) : (
            <FormControl className="text-gray-400">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </FormControl>
          )}

          <FormControl className="text-gray-400">
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </FormControl>
        </HStack>

        <HStack>
          <FormControl className="text-gray-400">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="text-gray-400">
            <FormLabel>Password</FormLabel>
            <Input
              type="text"
              value={inputs.salary}
              onChange={(e) => setInputs({ ...inputs, salary: e.target.value })}
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
                value={inputs.aboutComp}
                onChange={(e) =>
                  setInputs({ ...inputs, aboutComp: e.target.value })
                }
              />
            </FormControl>
            <FormControl className="text-gray-400">
              <FormLabel>Benefits from the company</FormLabel>
              <Textarea
                type="text"
                value={inputs.benefits}
                onChange={(e) =>
                  setInputs({ ...inputs, benefits: e.target.value })
                }
              />
            </FormControl>
          </>
        ) : null}

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
