import React, { useState } from "react";
import { Box, Container, Heading, Textarea, Button, VStack, useToast, Image, Center } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const generateCode = () => {
    // Simulate code generation
    if (input.trim() === "") {
      toast({
        title: "Error",
        description: "Input can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setOutput(`Generated code based on: ${input}`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Center>
          <Image src="https://images.unsplash.com/photo-1552896796-3f0a5a8f67e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbiUyMGNvbmNlcHR8ZW58MHx8fHwxNzEwMDY3MDU0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="150px" objectFit="cover" alt="Code Generation Concept" />
        </Center>
        <Heading as="h1" size="xl" textAlign="center">
          Code Generation Platform
        </Heading>
        <Textarea placeholder="Describe the code you want to generate..." value={input} onChange={handleInputChange} />
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={generateCode}>
          Generate Code
        </Button>
        <Box p={4} w="full" borderWidth="1px" borderRadius="md" bg="gray.50" minHeight="200px">
          <Heading as="h3" size="md" mb={4}>
            Output
          </Heading>
          <pre>{output}</pre>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
