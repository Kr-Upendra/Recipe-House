import { useParams } from "react-router-dom";
import List from "../components/List";
import WriterTime from "../components/WriterTime";
import { useGetFlavorDetail } from "../hooks/useGetFlavorDetail";

export default function Detail() {
  const { slug } = useParams();

  const { flavor, error, isLoading } = useGetFlavorDetail(slug);

  console.log({ flavor, error, isLoading });

  return (
    <section className="section detail" id="detail">
      <div className="hello">
        <div className="hello__container detailed">
          {isLoading ? (
            <h1>Loading...</h1>
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
          <p>RECOMMONDED</p>
        </div>
      </div>
    </section>
  );
}
