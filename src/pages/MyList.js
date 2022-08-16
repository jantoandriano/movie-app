import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import MovieListHeading from "../components/MovieListHeading";
import { Favcontext } from "../contexts/Favourites";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
`;

const MoviesImage = styled.img`
  height: 400px;
  width: 300px;
`;

const Button = styled.div`
  width: 100px;
  height: 30px;
  background-color: ${(props) => {
    if (props.type === "primary") {
      return "red";
    }
    if (props.type === "secondary") {
      return "blue";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
`;

const Flex = styled.div`
  display: flex;
  gap: 2rem;
`;

const Container = styled.div`
  margin: 2rem;
`;

const MyList = () => {
  const { favourites, removeFavouriteMovie } = useContext(Favcontext);

  return (
    <Container>
      <Wrapper>
        <MovieListHeading heading="Favourites" />
      </Wrapper>
      <Link to="/">Home</Link>
      <Flex>
        {favourites.map((movie, index) => (
          <MoviesWrapper key={index}>
            <MoviesImage src={movie.Poster} alt="movie"></MoviesImage>
            <Button type="primary" onClick={() => removeFavouriteMovie(movie)}>
              Remove
            </Button>
          </MoviesWrapper>
        ))}
      </Flex>
    </Container>
  );
};

export default MyList;
