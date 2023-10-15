import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Favcontext } from "../contexts/Favourites";

const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
`;

const MoviesImage = styled.img`
  height: 300px;
  width: 300px;
  background-repeat: no-repeat;
  background-size: cover;
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
  background-color: ${(props) => {
    if (props.type === "primary") {
      return "#F99417";
    }
    if (props.type === "secondary") {
      return "#5272F2";
    }
  }};
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  padding: 10px;
`;


export const MovieCard = (props) => {
  const { addFavouriteMovie, removeFavouriteMovie } = useContext(Favcontext);

  const { movie, page } = props
  const urlImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

  return (
    <MoviesWrapper>
      <Link to={`/movie/${movie.id}`}>
        <MoviesImage src={urlImage} alt="movie" width={200} />
      </Link>

      <MoviesInfo>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
      </MoviesInfo>
      {
        page === 'fav' ? <Button type="secondary" onClick={() => removeFavouriteMovie(movie)}>
          Remove
        </Button> : <Button type="primary" onClick={() => addFavouriteMovie(movie)}>
          Add to Favorite
        </Button>
      }
    </MoviesWrapper>
  )
}