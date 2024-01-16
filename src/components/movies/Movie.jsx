import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MoviesContext } from "../../context/movies-context";

const Movie = ({ movie }) => {
  const [isFav, setIsFav] = useState(false);
  const { toggleFavMovie, favoriteMovies } = useContext(MoviesContext);

  useEffect(() => {
    const isFavMovie = favoriteMovies.findIndex(
      (favMovie) => favMovie.imdbID === movie.imdbID,
    );

    if (isFavMovie >= 0) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favoriteMovies, movie.imdbID]);

  return (
    <Card
      sx={{
        position: "relative",
        "& button": { position: "absolute", top: 0, left: 0, bgcolor: "black" },
      }}
    >
      <Link to={`/movies/${movie.imdbID}`}>
        <Box sx={{ height: "400px", bgcolor: "primary.main" }}>
          <CardMedia
            component="img"
            height="100%"
            image={movie.Poster}
            alt={movie.Title}
          />
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography>{movie.Title}</Typography>
          <Typography color="primary.main" pt={1}>
            {movie.Year}
          </Typography>
        </CardContent>
      </Link>
      <IconButton onClick={toggleFavMovie.bind(null, movie)}>
        {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Card>
  );
};

export default Movie;
