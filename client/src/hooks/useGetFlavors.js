import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "https://recipehouse.onrender.com/api/recipes";

export function useGetFlavors() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFlavors = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(baseUrl);
        setIsLoading(false);
        setData(res.data.doc.recipes);
      } catch (err) {
        setIsLoading(false);
        if (err.code === "ERR_NETWORK") {
          setError({
            message: "It seems that you are not connected with network!",
          });
        } else setError(err.response);
      }
    };
    getFlavors();
  }, []);

  return { data, error, isLoading };
}
