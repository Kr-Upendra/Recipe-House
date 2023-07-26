export default function SavedRecipeCard(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          className="card__image--img"
          src={`${props.imageUrl}`}
          alt="Recipe Image"
        />
      </div>
      <div className="recipe__details">
        <div className="recipe__details--title">
          <h3 className="recipe__details--title-el">{props.name}</h3>
        </div>
        <div className="recipe__details--gradients">
          <span className="el-title">Gredients: </span>
          <h4 className="el-value">
            {props.ingredients.map((ingredient, index) => {
              return (
                <span className="el-value" key={index}>
                  {ingredient}
                  {", "}
                </span>
              );
            })}
          </h4>
        </div>
        <div className="recipe__details--instructions">
          <span className="el-title">Instruction:</span>
          <h4 className="el-value">
            {props.instructions}
            <button type="button" className="readmore__btn">
              Read More
            </button>
          </h4>
        </div>
        <div className="recipe__details--author">
          <span className="el-title">Added By: </span>
          <h4 className="recipe__details--author-item el-value">
            {props.owner}
          </h4>
        </div>
        <div className="recipe__details--cookingtime">
          <span className="el-title">Cooking Time:</span>
          <h4 className="recipe__details--cookingtime-item el-value">
            {props.cookingTime} min
          </h4>
        </div>
      </div>
    </div>
  );
}
