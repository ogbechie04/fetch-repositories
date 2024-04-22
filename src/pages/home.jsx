// import "../css/index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Card,
  Heading,
  SimpleGrid,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const reposPerPage = 6;

  //   Function for getting the repos using the github API
  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/ogbechie04/repos?per_page=${reposPerPage}&page=${currentPage}`
    )
      .then((getRepos) => {
        // Extract the total count of repos from the 'Link' header
        const linkHeader = getRepos.headers.get("Link");
        const totalPagesMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
        if (totalPagesMatch) {
          setTotalPages(parseInt(totalPagesMatch[1], 10));
        }
        return getRepos.json();
      })
      .then((repoList) => {
        setUser(repoList);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  //   Function for pagination
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // Function for returning only the date without time
  function dateOnly(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleDateString("en-NG");
  }

  // Rendering the repos on the DOM
  const repoDisplay = user.map((repo) => {
    return (
      <Link to={`/repoDetails/${repo.name}`} key={repo.id}>
        <Card variant={"outline"} p={4} textAlign={"left"} bgGradient={'linear(43deg, purple.500 0%, pink.300 46%, yellow.300 100%)'} color={'white'}>
          <CardHeader>
            <Heading as={"h2"} fontSize={"2xl"}>
              {repo.name}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>Created: {dateOnly(repo.created_at)}</Text>
            <Text>Langauge: {repo.language}</Text>
            <Text>Stars: {repo.stargazers_count}</Text>
          </CardBody>
        </Card>
      </Link>
    );
  });

  //   Pagination rendering
  return (
    <>
      <SimpleGrid
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        my={14}
      >
        {repoDisplay}
      </SimpleGrid>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="< previous"
        nextLabel="next >"
      />
    </>
  );
}

export default Home;
