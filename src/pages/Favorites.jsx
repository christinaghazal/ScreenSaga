import { useContext } from "react";
import PageContent from "../components/UI/PageContent";
import MovieList from "../components/movies/MovieList";
import { MoviesContext } from "../context/movies-context";

const FavoritePage = () => {
  const { favoriteMovies } = useContext(MoviesContext);

  if (favoriteMovies.length === 0) {
    return <h1>your favorite list is empty!</h1>;
  }
  return (
    <PageContent title="my favorite movies!">
      <MovieList movies={favoriteMovies} />
    </PageContent>
  );
};

export default FavoritePage;
