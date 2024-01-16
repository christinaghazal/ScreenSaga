import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
};
