import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  TableCaption,
} from "@chakra-ui/react";

function RepoDetails() {
  const { id } = useParams();
  const [repoInfo, setRepoInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/ogbechie04/${id}`)
      .then((getRepos) => getRepos.json())
      .then((repoList) => {
        setRepoInfo(repoList);
      })
      .catch((error) => {
        console.error("Error fetching repository information:", error);
      });
  }, [id]);

  return (
    <>
      <TableContainer
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={20}
      >
        <Table size={"lg"} maxW={12.5} variant={"striped"} colorScheme="purple">
          <TableCaption fontSize={'lg'}>Ogbechie's Repositories</TableCaption>
          <Thead>
            <Tr>
              <Th bgColor={"purple.500"} fontSize={"xl"} color={"white"}>
                Description
              </Th>
              <Th bgColor={"purple.500"} fontSize={"xl"} color={"white"}>
                Data
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name</Td>
              <Td>{repoInfo.name}</Td>
            </Tr>
            <Tr>
              <Td>Description</Td>
              <Td>
                {repoInfo.description
                  ? repoInfo.description
                  : "No description provided"}
              </Td>
            </Tr>
            <Tr>
              <Td>Language</Td>
              <Td>{repoInfo.language}</Td>
            </Tr>
            <Tr>
              <Td>Default Branch</Td>
              <Td>{repoInfo.default_branch}</Td>
            </Tr>
            <Tr>
              <Td>Owner</Td>
              <Td>{repoInfo.owner?.login}</Td>
            </Tr>
            <Tr>
              <Td>Created At</Td>
              <Td>{dateOnly(repoInfo.created_at)}</Td>
            </Tr>
            <Tr>
              <Td>Last Updated</Td>
              <Td>{dateOnly(repoInfo.updated_at)}</Td>
            </Tr>
            <Tr>
              <Td>Issues</Td>
              <Td>{repoInfo.open_issues}</Td>
            </Tr>
            <Tr>
              <Td>Watchers</Td>
              <Td>{repoInfo.watchers}</Td>
            </Tr>
            <Tr>
              <Td>Forks</Td>
              <Td>{repoInfo.forks}</Td>
            </Tr>
            <Tr>
              <Td>Stars</Td>
              <Td>{repoInfo.stargazers_count}</Td>
            </Tr>
            <Tr>
              <Td>Archived</Td>
              <Td>{repoInfo.archived ? "Yes" : "No"}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Button colorScheme='purple' _hover={{border: '2px solid purple', background: "white", color: 'purple', transition: '500ms'}}>
        <Link to={`/`}>Go home</Link>
      </Button>
    </>
  );

  // Function for returning only the date without time
  function dateOnly(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleDateString("en-NG");
  }
}

export default RepoDetails;
