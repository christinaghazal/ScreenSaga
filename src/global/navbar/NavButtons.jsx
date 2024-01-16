import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import { MoviesContext } from "../../context/movies-context";

const NavButtons = () => {
  const navigate = useNavigate();
  const { favoriteMovies, watchedMovies } = useContext(MoviesContext);

  const totalFavMovies = favoriteMovies.length;
  const totalWatchedMovies = watchedMovies.length;

  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={() => navigate("/favorites")}>
        <Badge badgeContent={totalFavMovies} color="primary">
          <FavoriteIcon />
        </Badge>
      </IconButton>

      <IconButton onClick={() => navigate("/watched")}>
        <Badge badgeContent={totalWatchedMovies} color="primary">
          <MovieIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default NavButtons;
