import { useState, useContext } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamIcon from "@mui/icons-material/Videocam";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import InfoWidget from "./InfoWidget";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { notification } from "../../helpers/notification";
import Button from "@mui/material/Button";
import { MoviesContext } from "../../context/movies-context";

const MovieInfo = ({ movie }) => {
  const { addToWatched } = useContext(MoviesContext);

  const [userRating, setUserRating] = useState(0);

  const addWatchedMovieHandler = () => {
    addToWatched(movie);
    notification("success", "Movie added successfully!");
  };

  return (
    <>
      <InfoWidget Icon={MovieCreationIcon} data={movie.Plot} />
      <InfoWidget Icon={VideocamIcon} data={movie.Director} />
      <InfoWidget Icon={AccessTimeIcon} data={movie.Runtime} />
      <InfoWidget Icon={StarIcon} data={movie.imdbRating} />
      <Stack alignItems="start" spacing={2} mt={3}>
        <Rating
          name="movieRating"
          value={userRating}
          size="large"
          onChange={(e, newValue) => setUserRating(newValue)}
        />

        <Button
          variant="contained"
          onClick={addWatchedMovieHandler}
          disabled={!userRating}
        >
          Add to Watched!
        </Button>
      </Stack>
    </>
  );
};

export default MovieInfo;
