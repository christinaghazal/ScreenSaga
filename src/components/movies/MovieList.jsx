import Grid from "@mui/material/Grid";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.imdbID} item xs={6} md={4}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
