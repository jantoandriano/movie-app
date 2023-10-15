import { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "./useInfiniteScroll";

function useGetMovies(searchValue = 'spiderman', cat = "now_playing") {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

  const getMovieRequest = async () => {
    const urlWithoutSearch = `https://api.themoviedb.org/3/movie/${cat}?language=en-US&page=${page}`
    const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}`

    const url = searchValue ? urlSearch : urlWithoutSearch;

    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RhMWRhZTI3OThlYWE5NmZjMWQ3MWRhODJkZmE3YSIsInN1YiI6IjVjYjE1NTczOTI1MTQxMmZiMzI1MDc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfyfL7aME8Wwi-u53mNGUiZPJtH1DhWtzJ-_D7aLGtw`
      }
    });


    if (res.data.results) {
      setMovies(res.data.results);
    }
  };

  function moreData() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`
    axios.get(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RhMWRhZTI3OThlYWE5NmZjMWQ3MWRhODJkZmE3YSIsInN1YiI6IjVjYjE1NTczOTI1MTQxMmZiMzI1MDc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfyfL7aME8Wwi-u53mNGUiZPJtH1DhWtzJ-_D7aLGtw`
      }
    }).then((res) => {
      setMovies([...movies, ...res.data.results]);
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
