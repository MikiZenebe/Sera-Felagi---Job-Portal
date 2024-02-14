import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PlayCircleIcon, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <Container maxW={"600px"} className="pt-[80px]">
      <Flex className="flex flex-col gap-4">
        <Box className="text-center w-fit mx-auto px-5 py-2 bg-[#ffeae1] flex items-center gap-2 rounded-full">
          <Briefcase size={20} className="font-semibold text-amber-700" />
          <Text className="font-semibold text-orange-500 text-sm">
            No.1 Job Hunt Website
          </Text>
        </Box>
        <Text className="text-6xl font-bold text-center leading-[80px]">
          Search, Apply & Get Your{" "}
          <span className="text-[#935af7]">Dream Job</span>
        </Text>

        <Text className="text-center font-medium text-gray-400 leading-[30px] py-1 ">
          Start your hunt for the best, life changing carrer opportunities from
          here in your selected areas conveniently and get hired quickly.
        </Text>

        <Box className="flex items-center mx-auto">
          <Button
            bg={useColorModeValue("#6A38C2", "#6A38C2")}
            color={useColorModeValue("white", "white")}
            _hover={"none"}
          >
            Browse Jobs
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
