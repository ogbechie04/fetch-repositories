import React from "react";
import { Text, Button, Heading, Container } from "@chakra-ui/react";


function Fallback({error, resetErrorBoundary}) {
    return (
        <Container>
            <Heading>Whoops, something went wrong</Heading>
            <Text>{error.message}</Text>
            <Button onClick={resetErrorBoundary}>Wanna try again?</Button>
        </Container>
    )
}

export default Fallback