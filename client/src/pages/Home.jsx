import { useRef } from "react";
import Heading from "../components/Heading";
import Card from "../ui/Card";
import Hero from "../ui/Hero";
import { useApiFlavors } from "../services/apiFlavors";

export default function Home() {
  const latestRef = useRef(null);
  const { data, error, isLoading } = useApiFlavors();
  const cardElement = data.map((flavor) => (
    <Card
      key={flavor.id}
      title={flavor.name}
      image={flavor.imageUrl}
      cooktime={flavor.cookingTime}
      writer={flavor.owner}
    />
  ));

  const scrollToAllRecipes = () => {
    latestRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero handleScroll={scrollToAllRecipes} />
      <section ref={latestRef} className="section allrecipes" id="allrecipes">
        <Heading />
        <div className="container">
          {isLoading ? <h1>Loading</h1> : cardElement}
        </div>
      </section>
    </>
  );
}
