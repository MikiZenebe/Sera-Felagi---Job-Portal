import { Container, Flex, Text } from "@chakra-ui/react";
import { BriefcaseIcon, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <Container maxW={"600px"} className="pt-[80px]">
      <Flex className="flex flex-col gap-4">
        <Text className="text-center w-fit mx-auto p-2 bg-[#ffeae1]">
          <Briefcase />
          No.1 Job Hunt Website
        </Text>
        <Text className="text-6xl font-bold text-center leading-[80px]">
          Search, Apply & Get Your{" "}
          <span className="text-[#935af7]">Dream Job</span>
        </Text>

        <Text className="text-center font-medium text-gray-400 leading-[30px]">
          Start your hunt for the best, life changing carrer opportunities from
          here in your selected areas conveniently and get hired quickly.
        </Text>
      </Flex>
    </Container>
  );
}
