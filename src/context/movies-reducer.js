const initialMoviesState = { favoriteMovies: [], watchedMovies: [] };

const moviesReducer = (state = initialMoviesState, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      watchedMovies: [action.movie, ...state.watchedMovies],
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      watchedMovies: state.watchedMovies.filter(
        (movie) => movie.imdbID !== action.id,
      ),
    };
  }

  if (action.type === "TOGGLE_FAV") {
    const exitingIndex = state.favoriteMovies.findIndex(
      (movie) => movie.imdbID === action.movie.imdbID,
    );

    let updatedMovies;

    if (exitingIndex >= 0) {
      updatedMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== action.movie.imdbID,
      );
    } else {
      updatedMovies = [...state.favoriteMovies, action.movie];
    }
    return {
      favoriteMovies: updatedMovies,
      watchedMovies: state.watchedMovies,
    };
  }
  return state;
};

export { initialMoviesState, moviesReducer };
