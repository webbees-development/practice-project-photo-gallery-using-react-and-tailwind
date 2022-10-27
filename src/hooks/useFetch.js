import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&page=${page}&safesearch=true&image_type=photo`
      );
      await setImages((prev) => [
        ...new Set([...prev, ...res.data.hits])
      ]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, images };
}

export default useFetch;
