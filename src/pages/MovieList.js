import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import Movies from "../components/Movies";
import useGetMovies from "../hooks/useGetMovies";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    justify-content: center;
  }
`;

const Container = styled.div`
  margin: 2rem;
`;

function HomePage() {
  const [searchValue, setSearchValue] = useState("iron man");
  const { movies, isFetching } = useGetMovies(searchValue);

  return (
    <Container>
      <Flex>
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Flex>
      <Flex>
        <Link to="/movie/fav">Favourites</Link>
      </Flex>

      <Movies isLoading={isFetching} movies={movies} />
    </Container>
  );
}

export default HomePage;
