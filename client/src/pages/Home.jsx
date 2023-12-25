import { useRef } from "react";
import Heading from "../components/Heading";
import Card from "../ui/Card";
import Hero from "../ui/Hero";
import { useGetFlavors } from "../hooks/useGetFlavors";

export default function Home() {
  const latestRef = useRef(null);
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

  const scrollToAllRecipes = () => {
    latestRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero handleScroll={scrollToAllRecipes} />
      <section ref={latestRef} className="section allrecipes" id="allrecipes">
        <Heading headingTitle="All Recipes" textAlign="left" fontSize={1.5} />
        <div className="container">
          {isLoading ? <h1>Loading</h1> : cardElement}
        </div>
      </section>
    </>
  );
}
