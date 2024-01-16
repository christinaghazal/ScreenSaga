import { useReducer } from "react";
import { MoviesContext } from "./movies-context";
import { initialMoviesState, moviesReducer } from "./movies-reducer";

const MoviesProvider = ({ children }) => {
  const [moviesState, dispatch] = useReducer(moviesReducer, initialMoviesState);

  const toggleFavMovie = (movie) => {
    dispatch({ type: "TOGGLE_FAV", movie });
  };

  const addToWatched = (movie) => {
    dispatch({ type: "ADD", movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  const moviesCtx = {
    favoriteMovies: moviesState.favoriteMovies,
    watchedMovies: moviesState.watchedMovies,
    toggleFavMovie,
    addToWatched,
    removeFromWatched,
  };

  return (
    <MoviesContext.Provider value={moviesCtx}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
