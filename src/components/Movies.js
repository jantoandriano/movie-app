import React from "react";
import styled from "@emotion/styled";
import { MovieCard } from "./MovieCard";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
`;

const Movies = (props) => {
  return (
    <Wrapper>
      {props.movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Wrapper>
  );
};

export default Movies;
