import React from "react";
import { Link } from "react-router-dom";
import { Text, Button, Heading, Container } from "@chakra-ui/react";

function Error404() {
  return (
    <Container>
      <Heading>404</Heading>
      <Heading>Looks like you are lost</Heading>
      <Text>the page you are looking for is not avaible!</Text>
      <Button>
        <Link to={`/`}>Go home</Link>
      </Button>
    </Container>
  );
}

export default Error404;
