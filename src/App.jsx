import "./App.css";
import {
  Text,
  Heading,
  Card,
  Avatar,
  Flex,
  Divider

} from "@chakra-ui/react";

function App() {
  return (
    // Container for Avatar and writeup. Remains on the page even in an error
        <Flex gap="10" justify={"center"} wrap={"wrap"}>
          {/* Avatar for dp */}
          <Avatar
            name="Laura Ogbechie"
            src="../src/assets/vlcsnap-2022-10-26-22h16m20s453.png"
            w={"300px"}
            h={"300px"}
            border={"2px solid lightgrey"}
          ></Avatar>
          {/* Card for profile details */}
          <Card display={'flex'} flexDirection={'column'} variant={'outline'} p={5} textAlign={"left"}>
            <Heading as={'h1'} fontSize='50' textAlign={"left"} m={"unset"} mt={"20px"} fontWeight={600} fontFamily={"Sedan"}>
            Ogbechie's Repository
            </Heading>
            <Divider my={2.5}></Divider>
            <Text fontSize={"md"}>
            Hi there! My name's Ogbechie Laura. Frontend Dev on her way to Fullstack and this is the list of my repositories.
            </Text>
            <Text as={"b"} fontSize={"md"} py={3}>
            Here's a quick summary about me:
            </Text>
            <Text fontSize={"md"}>
            <Text as={'b'}>Pronouns:</Text> She/Her
            </Text>
            <Text fontSize={"md"}>
            <Text as={'b'}>Goals:</Text> To one of the top recognized-worldwide Fullstack Dev.
            </Text>
            <Text fontSize={"md"}>
            I'm currently learning and building projects with JavaScript, React, Chakra-UI, Tailwind CSS.
            </Text>
          </Card>
        </Flex>
  );
}

export default App