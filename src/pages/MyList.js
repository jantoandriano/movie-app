import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Favcontext } from "../contexts/Favourites";
import MovieListHeading from "../components/MovieListHeading";
import { MovieCard } from "../components/MovieCard";

const FavWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function MovieDetail() {
  const { favourites } = useContext(Favcontext);
  return (
    <>
      <FavWrapper>
        <MovieListHeading heading="Favorites" />
        {
          favourites.map(val => (
            <MovieCard movie={val} page="fav" />
          ))
        }
      </FavWrapper>

    </>
  );
}

export default MovieDetail;


