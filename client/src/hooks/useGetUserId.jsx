export const useGetUserId = () => {
  return window.localStorage.getItem("userId");
};

export const useAppBaseUrl = () => {
  return "https://recipehouse.onrender.com/api/";
};

export const recipeBaseUrl = () => {
  return "https://recipehouse.onrender.com/api/recipes/";
};
