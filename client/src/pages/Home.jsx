import Heading from "../components/Heading";
import Card from "../ui/Card";
import Hero from "../ui/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section allrecipes" id="allrecipes">
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
