import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="pt-56 ">
      <Flex
        bg={useColorModeValue("#633da5ea", "#183242")}
        color={useColorModeValue("gray.500", "white")}
        className="w-full h-[120px] flex justify-between items-center py-3 "
      >
        <Box className="flex flex-col justify-center items-center mx-auto text-gray-300 gap-2">
          <Text>Developed By Mikiyas Zenebe</Text>
          <Text>© All Rights Reserved 2024</Text>
          <Box className="flex items-center gap-3">
            <Instagram className="bg-orange-300 text-black p-1 rounded-full" />
            <Github className="bg-orange-300 text-black p-1 rounded-full" />
            <Twitter className="bg-orange-300 text-black p-1 rounded-full" />
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
