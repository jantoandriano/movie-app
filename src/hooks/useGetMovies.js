import { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "./useInfiniteScroll";

function useGetMovies(searchValue) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=caa22349&page=${page}`;

    const res = await axios.get(url);

    if (res.data.Search) {
      setMovies(res.data.Search);
    }
  };

  function moreData() {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=caa22349&page=${page}`;
    axios.get(url).then((res) => {
      setMovies([...movies, ...res.data.Search]);

      setPage(page + 1);
      setIsFetching(false);
    });
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return { movies, isFetching };
}

export default useGetMovies;
