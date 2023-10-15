import React from "react";
import Movies from "../components/Movies";
import useGetMovies from "../hooks/useGetMovies";
import Layout from "../layout";
import useQueryParams from "../hooks/useQueryParams";

function MoviePopular() {
  const { query, handleSearch } = useQueryParams();
  const { movies, isFetching } = useGetMovies(query && query, 'popular');

  return (
    <Layout title="Popular" query={query} handleSearch={handleSearch}>
      <Movies isLoading={isFetching} movies={movies} />
    </Layout>
  );
}

export default MoviePopular