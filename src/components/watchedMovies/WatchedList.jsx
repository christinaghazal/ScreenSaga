import { useContext } from "react";
import { MoviesContext } from "../../context/movies-context";
import Grid from "@mui/material/Grid";
import Movie from "../movies/Movie";

const WatchedList = () => {
  const { watchedMovies } = useContext(MoviesContext);

  if (watchedMovies.length === 0) return <h1>Your Favorite Is Empty!</h1>;

  return (
    <Grid container spacing={3}>
      {watchedMovies.map((movie) => (
        <Grid key={movie.imdbID} item>
          <Movie movie={movie} isWatchedMovie={true} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WatchedList;
