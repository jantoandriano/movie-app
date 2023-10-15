import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieTopRated from "./pages/MovieTopRated";
import MoviePopular from "./pages/MoviePopular";
const MovieListComponent = React.lazy(() => import("./pages/MovieList"));
const MovieDetailComponent = React.lazy(() => import("./pages/MovieDetail"));
const MyListComponent = React.lazy(() => import("./pages/MyList"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<MovieListComponent />} />
          <Route path="/movie/:movieid" element={<MovieDetailComponent />} />
          <Route path="/movie/fav" element={<MyListComponent />} />
          <Route path="/movie/toprated" element={<MovieTopRated />} />
          <Route path="/movie/popular" element={<MoviePopular />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
