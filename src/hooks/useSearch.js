import { useState, useEffect } from "react";
import { API_URL } from "../api/apiConfig";

export const useSearch = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_URL}&s=${query}`);
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Can not fetch data!");
        }
        setData(data.Search);
      } catch (error) {
        setError(error.massage);
      }
      setLoading(false);
    };

    if (query.length < 3) {
      setData([]);
      return;
    }

    fetchData();
  }, [query]);

  return { data, loading, error };
};
