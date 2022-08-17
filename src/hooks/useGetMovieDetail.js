import axios from "axios";
import { useEffect, useState, useCallback } from "react";

function useGetMovieDetail(movieid) {
  const [detailMovie, setDetailMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getMovieDetail = useCallback(async () => {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?i=${movieid}&apikey=caa22349`;
    const response = await axios.get(url);
    if (response.data) {
      setDetailMovie(response.data);
      setIsLoading(false);
    }
  }, [movieid]);

  useEffect(() => {
    getMovieDetail();
  }, [movieid, getMovieDetail]);

  console.log(detailMovie);

  return {
    detailMovie,
    isLoading,
  };
}

export default useGetMovieDetail;
