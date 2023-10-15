import React from "react";
import styled from "@emotion/styled";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
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

const Container = styled.div`
  margin: 2rem;
`;

function Layout(props) {
  const { title, query, handleSearch, children } = props

  return (
    <Container>
      <Flex>
        <MovieListHeading heading={title} />
        <SearchBox searchValue={query} setSearchValue={handleSearch} />
      </Flex>
      <MenuNavbar />
      {children}
    </Container>
  )
}

export default Layout