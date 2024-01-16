import React from "react";

export const MoviesContext = React.createContext({
  favoriteMovies: [],
  watchedMovies: [],
  toggleFavMovie: (movie) => {},
  addToWatched: (movie) => {},
  removeFromWatched: (id) => {},
});
