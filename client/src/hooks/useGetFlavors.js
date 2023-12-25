import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "https://recipehouse.onrender.com/api/recipes";

export function useGetFlavors() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFlavors = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(baseUrl);
        setIsLoading(false);
        setData(res.data.doc.recipes);
      } catch (err) {
        console.error(err);
        setError(err.response);
      }
    };
    getFlavors();
  }, []);

  return { data, error, isLoading };
}
