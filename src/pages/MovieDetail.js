import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import useGetMovieDetail from "../hooks/useGetMovieDetail";
import LoaderDetailMovie from "../components/LoaderDetailMovie";

const MovieDetailWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  display: block;
`;

const MovieDetailInfo = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 300px;
  height: 300px;
`;

const Back = styled.div`
  width: 90px;
  height: 30px;
  padding: 10px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function MovieDetail() {
  const { movieid } = useParams();
  const navigate = useNavigate();
  const { detailMovie, isLoading } = useGetMovieDetail(movieid);

  if (isLoading) {
    return (
      <MovieDetailWrapper>
        <LoaderDetailMovie />
      </MovieDetailWrapper>
    );
  }

  return (
    <MovieDetailWrapper>
      <Image
        isLoading={isLoading}
        src={detailMovie.Poster}
        alt={detailMovie.Title}
      />

      <MovieDetailInfo isLoading={isLoading}>
        <div>
          {detailMovie.Title} - {detailMovie.Year}
        </div>
        <div>{detailMovie.Genre}</div>

        <p>{detailMovie.Actors}</p>
        <p>{detailMovie.Plot}</p>
        <Back onClick={() => navigate("/", { replace: true })}>Back</Back>
      </MovieDetailInfo>
    </MovieDetailWrapper>
  );
}

export default MovieDetail;
