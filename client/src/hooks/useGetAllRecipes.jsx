import { useState } from "react";

const useGetAllRecipes = () => {
  const [recipes, setRecipes] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
};
