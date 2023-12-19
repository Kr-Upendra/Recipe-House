import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://127.0.0.1:5050/api/recipes";

  useEffect(function () {
    async function getAllRecipes() {
      try {
        setIsLoading(true);
        const res = await axios.get(url);

        if (res.data.status === "success") {
          const docData = res.data.doc.recipes;
          setRecipes(docData);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setError(err.response);
      }
    }
    getAllRecipes();
  }, []);

  return { recipes, error, isLoading };
};
