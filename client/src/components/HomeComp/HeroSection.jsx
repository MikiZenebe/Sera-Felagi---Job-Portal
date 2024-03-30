import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PlayCircleIcon, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Container maxW={"600px"} className="pt-[80px] pb-[120px] ">
      <Flex className="flex flex-col gap-4">
        <Box className="text-center w-fit mx-auto px-4 py-3 sm:px-5 sm:py-2 bg-[#ffeae1] flex items-center gap-2 rounded-full">
          <Briefcase size={20} className="font-semibold text-amber-700" />
          <Text className="font-semibold text-orange-500 text-[14px] sm:text-sm">
            No.1 Job Hunt Website
          </Text>
        </Box>

        <Box className="flex flex-col gap-3">
          <Text className="text-4xl  mx-auto sm:w-auto sm:text-6xl font-bold text-center sm:leading-[80px]">
            Search, Apply & Get Your{" "}
            <span className="text-[#935af7]">Dream Job</span>
          </Text>
          <Text className="text-center sm:w-full mx-auto font-medium text-gray-400 leading-[30px] py-1">
            Start your hunt for the best, life changing carrer opportunities
            from here in your selected areas conveniently and get hired quickly.
          </Text>
        </Box>

        <Box className="flex items-center mx-auto">
          <Button
            bg={useColorModeValue("#6A38C2", "#6A38C2")}
            color={useColorModeValue("white", "white")}
            _hover={"none"}
          >
            <Link to={"/jobList"}>Browse Jobs</Link>
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
