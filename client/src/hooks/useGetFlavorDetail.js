import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://recipehouse.onrender.com/api/recipes/";

export function useGetFlavorDetail(slug) {
  const [flavor, setFlavor] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFlavorDetail = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(baseUrl + slug);
        setFlavor(response.data.doc.recipe);
      } catch (err) {
        setError(err.response);
      } finally {
        setIsLoading(false);
      }
    };
    getFlavorDetail();
  }, [slug]);
  return { flavor, error, isLoading };
}
