import React from "react";
import useFavourites from "../hooks/useFavourites";

export const Favcontext = React.createContext();

const FavContext = ({ children }) => {
  const { favourites, addFavouriteMovie, removeFavouriteMovie } =
    useFavourites();

  const value = { favourites, addFavouriteMovie, removeFavouriteMovie };

  return (
    <>
      <Favcontext.Provider value={value}>{children}</Favcontext.Provider>
    </>
  );
};

export default FavContext;
