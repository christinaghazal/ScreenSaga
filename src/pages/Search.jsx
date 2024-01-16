import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import PageContent from "../components/UI/PageContent";
import Box from "@mui/material/Box";
import MovieList from "../components/movies/MovieList";
import Loading from "../components/UI/Loading";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const { data: results, loading, error } = useSearch(query);

  if (loading) return <Loading />;

  if (error) return <h1>error</h1>;

  let content = <h2>Search for movies</h2>;
  if (results.length > 0) {
    content = <MovieList movies={results} />;
  }

  return (
    <PageContent title="Search...">
      <Box mb={3}>
        <input
          type="search"
          name="searchMovies"
          placeholder="Search In ScreenSaga"
          value={query}
          autoFocus="autoFocus"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </Box>
      {content}
    </PageContent>
  );
};

export default SearchPage;
