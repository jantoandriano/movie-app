import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import useGetMovieDetail from "../hooks/useGetMovieDetail";
import Comments from "../components/comments";

const MovieDetailWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
`;

const Image = styled.img`
  display: block;
  border: 2px solid black;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  backround-size: cover;
`;

const MovieDetailInfo = styled.div`
  margin: 2rem;
  width: 100;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Back = styled.div`
  padding: 10px;
  background-color: grey;
  cursor: pointer;
  text-align: center;
  color: white;
  font-size: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  padding: 10px;
  text-align: center;
`

const GenreItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

function MovieDetail() {
  const { movieid } = useParams();
  const navigate = useNavigate();
  const { detailMovie, isLoading } = useGetMovieDetail(movieid);

  if (isLoading) {
    return (
      <MovieDetailWrapper>
        Loading...
      </MovieDetailWrapper>
    );
  }

  return (
    <MovieDetailWrapper>
      <Image
        isLoading={isLoading}
        src={`https://image.tmdb.org/t/p/w300/${detailMovie.poster_path}`}
        alt={detailMovie.title}
      />

      <MovieDetailInfo isLoading={isLoading}>
        <Title>
          {detailMovie.title}
        </Title>
        <Genres data={detailMovie?.genres || []} />
        <Description>{detailMovie.overview}</Description>
        <Back onClick={() => navigate("/", { replace: true })}>
          Back
        </Back>
      </MovieDetailInfo>
      <Comments />
    </MovieDetailWrapper>
  );
}

export default MovieDetail;


const Genres = (props) => {
  const items = props.data
  if (items?.length === 0) {
    return (
      <div></div>
    )
  }

  return (
    <GenreItem>
      {items.map(val => (
        <div>
          {val.name}
        </div>
      ))}
    </GenreItem>
  )
}
