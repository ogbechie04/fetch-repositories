import React from "react";
import { Link } from "react-router-dom";
import { Text, Button, Heading, Container } from "@chakra-ui/react";

function Error404() {
  return (
    <Container
      my={150}
      mx={"auto"}
      py={50}
      px={50}
      maxW={800}
    >
      <Heading as={"h1"} fontSize={"9xl"}>
        404
      </Heading>
      <Heading mb={2.5}>Looks like you are lost.</Heading>
      <Text mb={3.5}>The page you are looking for is not available!</Text>
      <Button
        colorScheme="purple"
        _hover={{
          border: "2px solid purple",
          background: "white",
          color: "purple",
          transition: "500ms",
        }}
      >
        <Link to={`/`}>Go home</Link>
      </Button>
    </Container>
  );
}

export default Error404;
