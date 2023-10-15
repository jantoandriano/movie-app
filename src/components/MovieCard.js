import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import FavContext, { Favcontext } from "../contexts/Favourites";

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

const MoviesInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background-color: black;
  bottom: 35px;
  width: 100%;
  text-transform: uppercase;

  p {
    color: #ffffff;
  }
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
  color: #ffffff;
`;


export const MovieCard = (props) => {
    const { addFavouriteMovie } = useContext(Favcontext);

    const { movie } = props

    return (
        <MoviesWrapper>
            <Link to={`/movie/${movie.imdbID}`}>
                <MoviesImage src={movie.Poster} alt="movie" width={200} />
            </Link>

            <MoviesInfo>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </MoviesInfo>
            <Button type="secondary" onClick={() => addFavouriteMovie(movie)}>
                Save
            </Button>
        </MoviesWrapper>
    )
}