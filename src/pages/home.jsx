// import "../css/index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Text, Card, Heading } from "@chakra-ui/react";
import ReactPaginate from 'react-paginate';

function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const reposPerPage = 6

  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/ogbechie04/repos?per_page=${reposPerPage}&page=${currentPage}`
    )
      .then((getRepos) => getRepos.json())
      .then((repoList) => {
        setUser(repoList);
        setTotalPages(Math.ceil(repoList.length / reposPerPage));
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1);
  };


  const repoDisplay = user.map((repo) => {
    return (
      <Card className="repo-card" key={repo.name}>
        <Link to={`/repoDetails/${repo.name}`}><Heading className="repo-name">{repo.name}</Heading></Link>
        <Text className="created_by">Created: {repo.created_at}</Text>
        <Text className="language">Langauge: {repo.language}</Text>
        <Text className="stars_count">Stars: {repo.stargazers_count}</Text>
      </Card>
    );
  });

  return (
    <>
    <section className="repo-container">{repoDisplay}</section>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="Previous"
        nextLabel="Next"
      />
    </>
  );
}

export default Home;
