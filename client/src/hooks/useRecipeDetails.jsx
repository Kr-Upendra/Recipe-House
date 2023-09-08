import { useEffect, useState } from "react";
import axios from "axios";
import { useRecipeBaseUrl } from "./useBaseUrls";

const useRecipeDetails = (slug) => {
  const baseUrl = useRecipeBaseUrl();
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getDetailedRecipe = async () => {
      try {
        const response = await axios.get(`${baseUrl}${slug}`);
        console.log(response.data.doc);
        setRecipe(response.data.doc.recipe);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Something went very wrong. please try again lator!"
        );
      } finally {
        setIsLoading(false);
      }
    };

    getDetailedRecipe();
  }, [slug]);

  return { recipe, error, isLoading };
};

export default useRecipeDetails;
