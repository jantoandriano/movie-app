import axios from "axios";
import { useEffect, useState } from "react";

function useGetMovieDetail(movieid) {
  const [detailMovie, setDetailMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getMovieDetail = async () => {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?i=${movieid}&apikey=caa22349`;
    const response = await axios.get(url);
    if (response.data) {
      setDetailMovie(response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [movieid]);

  console.log(detailMovie);

  return {
    detailMovie,
    isLoading,
  };
}

export default useGetMovieDetail;
