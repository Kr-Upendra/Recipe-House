import { useRef } from "react";
import Heading from "../components/Heading";
import Card from "../ui/Card";
import Hero from "../ui/Hero";

export default function Home() {
  const latestRef = useRef(null);

  const scrollToAllRecipes = () => {
    latestRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero handleScroll={scrollToAllRecipes} />
      <section ref={latestRef} className="section allrecipes" id="allrecipes">
        <Heading />
        <div className="container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
