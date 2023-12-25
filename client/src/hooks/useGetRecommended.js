import flavors from "../utils/data.json";

export function useGetRecommended() {
  let recommendedFlavors = [];
  for (let i = 0; i < 2; i++) {
    recommendedFlavors.push(
      flavors[Math.floor(Math.random() * flavors.length)]
    );
  }
  return { recommendedFlavors };
}
