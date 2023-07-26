export const useGetUserId = () => {
  return window.localStorage.getItem("userId");
};

export const recipeBaseUrl = () => {
  return "http://127.0.0.1:9090/api/recipes/";
};
