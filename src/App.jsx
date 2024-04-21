import "./App.css";
import {
  Text,
  Card,
  Heading,
  // Box,
  Container,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    // Flex for two cards. One for Profile details and other for repo list
    <Flex direction={"row"}gap="10">
      {/* Card for profile */}
      <Card>
        <Flex spacing="4" direction={"row"}>
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
          <Container display={'flex'} flexDirection={'column'}>
          <Heading p={"4"} textAlign={"Left"} m={"unset"} mt={"20px"}>
            Ogbechie Laura
          </Heading>
          <Text textAlign={"left"} m={"unset"} px={4} size={"lg"}>
            Ogbechie_04 ! She/her{" "}
          </Text>
          <Button
            mt={20}
            py={7}
            fontSize={13}
            border={"1px solid lightgrey"}
            borderRadius={5}
          >
            Edit Profile
          </Button>
          <Text textAlign={"left"} my={10} px={4} size={"sm"}>
            ogbechielaura04@gmail.com
          </Text>
          </Container>
        </Flex>
      </Card>
    </Flex>
  );
}

export default App