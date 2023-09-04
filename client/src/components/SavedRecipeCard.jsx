import { CardDetails } from "./Card";

export default function SavedRecipeCard(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={`${props.imageUrl}`}
          alt="Recipe Name"
          className="card__image--img"
        />
      </div>
      <CardDetails
        title={props.name}
        cookTime={props.cookingTime}
        addedby={props.owner}
      />
    </div>
  );
}
