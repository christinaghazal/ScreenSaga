import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";
import { API_URL } from "../api/apiConfig";
import Loading from "../components/UI/Loading";
import PageContent from "../components/UI/PageContent";
import MovieContent from "../components/movieDetails/MovieContent";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetch(`${API_URL}&i=${id}`);

  if (loading) {
    return <Loading />;
  }
  //console.log(movie);
  if (error) {
    return <h1>Error!</h1>;
  }
  return (
    <PageContent title={movie.Title}>
      <MovieContent movie={movie} />
    </PageContent>
  );
};

export default MovieDetailsPage;
