import flavors from "../utils/data.json";

export function useGetRecommended() {
  let recommendedFlavors = [];
  const { firstRandom, secondRandom } = generateRandomNumber(flavors.length);
  const firstRandomFlavor = flavors[firstRandom];
  const secondRandomFlavor = flavors[secondRandom];
  recommendedFlavors.push(firstRandomFlavor, secondRandomFlavor);
  return { recommendedFlavors };
}

const generateRandomNumber = (length) => {
  let firstRandom = Math.floor(Math.random() * length);
  let secondRandom = Math.floor(Math.random() * length);
  if (firstRandom === secondRandom) {
    firstRandom++;
  }
  return { firstRandom, secondRandom };
};
