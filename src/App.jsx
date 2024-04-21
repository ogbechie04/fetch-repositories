import "./App.css";
import {
  Text,
  Card,
  Heading,
  Box,
  Container,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    // Container for Avatar and writeup. Remains on the page even in an error
      <Container>
        <Flex direction={"row"} gap="20" justify={"center"} wrap={"wrap"}>
          {/* Avatar for dp */}
          <Avatar
            name="Laura Ogbechie"
            src="../src/assets/vlcsnap-2022-10-26-22h16m20s453.png"
            borderRadius={"50%"}
            w={"300px"}
            h={"300px"}
            border={"4px solid lightgrey"}
          ></Avatar>
          {/* Box for profile details */}
          <Box display={'flex'} flexDirection={'column'}>
            <Heading as={'h1'} fontSize='50' p={"4"} textAlign={"center"} m={"unset"} mt={"20px"} fontWeight={600}>
            Ogbechie's Repository
            </Heading>
            <Text textAlign={"left"} m={"unset"} px={4} py={10} size={"lg"}>
            Hi there! My name's Ogbechie Laura. Frontend Dev on her way to Fullstack and this is the list of my repositories.
            </Text>
          </Box>
        </Flex>
      </Container>
  );
}

export default App