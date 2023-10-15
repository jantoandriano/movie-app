import axios from "axios";
import { useEffect, useState, useCallback } from "react";

function useGetMovieDetail(movieid) {
  const [detailMovie, setDetailMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getMovieDetail = useCallback(async () => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2RhMWRhZTI3OThlYWE5NmZjMWQ3MWRhODJkZmE3YSIsInN1YiI6IjVjYjE1NTczOTI1MTQxMmZiMzI1MDc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OfyfL7aME8Wwi-u53mNGUiZPJtH1DhWtzJ-_D7aLGtw`
      }
    });
    if (response.data) {
      setDetailMovie(response.data);
      setIsLoading(false);
    }
  }, [movieid]);

  useEffect(() => {
    getMovieDetail();
  }, [movieid, getMovieDetail]);


  return {
    detailMovie,
    isLoading,
  };
}

export default useGetMovieDetail;
