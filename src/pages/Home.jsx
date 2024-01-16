import { useFetch } from "../hooks/UseFetch";
import PageContent from "../components/UI/PageContent";
import { API_URL } from "../api/apiConfig";
import MovieList from "../components/movies/MovieList";
import Loading from "../components/UI/Loading";

const movieList = [
  "super man",
  "spider man",
  "batman",
  "the lord of the ring",
  "the marvels",
  "into the storm",
  "kursk",
  "alive",
  "the godfather",
  "troy",
];
const Home = () => {
  const randomMovie = Math.floor(Math.random() * movieList.length);
  //console.log(randomMovie);
  const { data, loading, error } = useFetch(
    `${API_URL}&s=${movieList[randomMovie]}`,
  );
  //console.log(data);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  return (
    <PageContent title="Top Movies">
      <MovieList movies={data.Search} />
    </PageContent>
  );
};

export default Home;
