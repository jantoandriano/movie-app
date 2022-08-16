import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import MyList from "./pages/MyList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:movieid" element={<MovieDetail />} />
        <Route path="/movie/fav" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
