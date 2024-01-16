import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Can not fetch data!");
        }
        setData(data);
      } catch (error) {
        setError(error.massage);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
