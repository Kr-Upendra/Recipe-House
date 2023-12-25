import Heading from "../components/Heading";
import Card from "../ui/Card";
import Hero from "../ui/Hero";
import { useGetFlavors } from "../hooks/useGetFlavors";
import ShowError from "../components/ShowError";
import Loader from "../components/Loader";
import Category from "../ui/Category";

export default function Home() {
  const { data, error, isLoading } = useGetFlavors();

  const cardElement = data.map((flavor) => (
    <Card
      key={flavor.id}
      title={flavor.name}
      image={flavor.imageUrl}
      cooktime={flavor.cookingTime}
      writer={flavor.owner}
      slug={flavor.slug}
    />
  ));

  return (
    <>
      <Hero />
      <section className="section allrecipes" id="allrecipes">
        <Heading headingTitle="All Recipes" textAlign="left" fontSize={1.5} />
        <div className="container">
          {isLoading ? (
            <Loader />
          ) : Object.keys(error).length > 0 ? (
            <ShowError errorMessage={error.message} />
          ) : (
            cardElement
          )}
        </div>
      </section>
      <Category />
    </>
  );
}
