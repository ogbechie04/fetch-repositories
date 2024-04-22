import { Text, Button, Heading, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <Container
      my={150}
      mx={"auto"}
      py={50}
      px={50}
      maxW={800}
    >
      <Heading mb={3.5}>Whoops, something went wrong!</Heading>
      <Text mb={5}>{error.message}</Text>
      <Button
        colorScheme="purple"
        _hover={{
          border: "2px solid purple",
          background: "white",
          color: "purple",
          transition: "500ms",
        }}
        onClick={resetErrorBoundary}
      >
        <Link to={`/`}>Wanna try again?</Link>
      </Button>
    </Container>
  );
}

export default Fallback;
