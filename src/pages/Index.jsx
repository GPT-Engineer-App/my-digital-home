import { Box, Flex, Text, VStack, Image, Link, Container } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Flex>
            <Link href="#welcome" p={2}>Welcome</Link>
            <Link href="#skills" p={2}>Skills</Link>
            <Link href="#projects" p={2}>Projects</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} p={8} align="stretch">
        <Box id="welcome" p={8} bg="gray.100">
          <Flex align="center" justify="space-between">
            <VStack align="start">
              <Text fontSize="2xl" fontWeight="bold">Hello, I'm Kristian Kyvik</Text>
              <Text fontSize="lg">A passionate Software Developer based in NYC</Text>
            </VStack>
            <Image borderRadius="full" boxSize="150px" src="/images/profile.jpg" alt="John Doe" />
          </Flex>
        </Box>
        <Box id="skills" p={16} bg="brand.700" border="1px" borderColor="gray.200" borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Skills</Text>
          <Flex justify="space-evenly" align="center">
            <Text>JavaScript</Text>
            <Text>React</Text>
            <Text>Node.js</Text>
          </Flex>
        </Box>
        <Box id="projects" p={8} bg="gray.100">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Projects</Text>
          <VStack>
            <Text>Project 1</Text>
            <Text>Project 2</Text>
            <Text>Project 3</Text>
          </VStack>
        </Box>
        <Box id="contact" p={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Contact</Text>
          <Flex justify="space-around">
            <Link href="https://linkedin.com/in/johndoe" isExternal><FaLinkedin /></Link>
            <Link href="https://github.com/johndoe" isExternal><FaGithub /></Link>
            <Link href="mailto:johndoe@example.com"><FaEnvelope /></Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;