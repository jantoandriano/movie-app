import React from "react";
import styled from "@emotion/styled";
import { MovieCard } from "./MovieCard";
import { Toaster } from 'react-hot-toast';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

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
      <Toaster />
    </Wrapper>
  );
};

export default Movies;
