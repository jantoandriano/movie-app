import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";

import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import Movies from "../components/Movies";
import useGetMovies from "../hooks/useGetMovies";
import { MenuNavbar } from "../components/MenuNavbar";

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

const FlexCol = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10rem 0 10rem;
`

const Container = styled.div`
  margin: 2rem;
`;

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { movies, isFetching } = useGetMovies(query ? query : 'batman');

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchParams({ q: event.target.value })
  }


  return (
    <Container>
      <Flex>
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchParams} setSearchValue={handleSearch} />
      </Flex>
      <FlexCol>
        <MenuNavbar />
      </FlexCol>
      <Movies isLoading={isFetching} movies={movies} />
    </Container>
  );
}

export default HomePage;
