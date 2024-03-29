import React from "react";
import Movies from "../components/Movies";
import useGetMovies from "../hooks/useGetMovies";
import useQueryParams from "../hooks/useQueryParams";
import Layout from "../layout";

function HomePage() {
  const { query, handleSearch } = useQueryParams();
  const { movies, isFetching } = useGetMovies(query && query);
  return (
    <Layout title="Movies" query={query} handleSearch={handleSearch}>
      <Movies isLoading={isFetching} movies={movies} />
    </Layout>
  );
}

export default HomePage;
