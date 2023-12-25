import { useParams } from "react-router-dom";
import { useGetFlavorDetail } from "../hooks/useGetFlavorDetail";
import { useGetRecommended } from "../hooks/useGetRecommended";
import List from "../components/List";
import WriterTime from "../components/WriterTime";
import Loader from "../components/Loader";
import Card from "../ui/Card";

export default function Detail() {
  const { slug } = useParams();
  const { flavor, isLoading } = useGetFlavorDetail(slug);
  const { recommendedFlavors } = useGetRecommended();

  const cardElement = recommendedFlavors.map((item) => {
    return (
      <Card
        key={item.id}
        slug={item.slug}
        title={item.name}
        image={item.imageUrl}
        cooktime={item.cookingTime}
        writer={item.owner}
      />
    );
  });

  return (
    <section className="section detail" id="detail">
      <div className="hello">
        <div className="hello__container detailed">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="detailed__title">
                <h1 className="detailed__title--heading">{flavor.name}</h1>
              </div>
              <div className="detailed__image">
                <img
                  src={`${flavor.imageUrl}`}
                  alt="Flavor image"
                  className="detailed__image--photo"
                />
              </div>
              <WriterTime writer={flavor.owner} cooktime={flavor.cookingTime} />
              <List
                listTitle={"Used ingredients"}
                listItems={flavor.instructions}
              />
              <List
                listTitle={"Steps to follow"}
                listItems={flavor.instructions}
              />
            </>
          )}
        </div>
        <div className="hello__container recommended">
          <div className="recommended__heading">
            <h1>Flavors That you might also like</h1>
          </div>
          <div className="recommended__flavors">{cardElement}</div>
        </div>
      </div>
    </section>
  );
}
