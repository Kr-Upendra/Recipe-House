import Card from "../components/Card";
import Loading from "../components/Loading";
import { useGetAllRecipes } from "../hooks/useGetAllRecipes";

export default function Home() {
  const { recipes, error, isLoading } = useGetAllRecipes();

  if (error) return <h1>Some error occured! please try again lator!</h1>;

  const cardElement = recipes.map((recipe) => {
    return (
      <Card
        key={recipe._id}
        name={recipe.name}
        slug={recipe.slug}
        imageUrl={recipe.imageUrl}
        cookingTime={recipe.cookingTime}
        owner={recipe.owner}
      />
    );
  });

  return (
    <main className="home">
      <h2 className="home__title">All Recipes</h2>
      {isLoading ? <Loading /> : <div className="container">{cardElement}</div>}
    </main>
  );
}
