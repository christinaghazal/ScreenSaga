import Grid from "@mui/material/Grid";
import MovieInfo from "./MovieInfo";

const MovieContent = ({ movie }) => {
  //console.log(movie);
  return (
    <Grid container spacing={2} mt={3}>
      <Grid item xs={12} md={6}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movieDetail_img "
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MovieInfo movie={movie} />
      </Grid>
    </Grid>
  );
};

export default MovieContent;
