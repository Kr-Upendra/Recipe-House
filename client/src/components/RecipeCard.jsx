import { useGetUserId } from "../hooks/useGetUserId";

export default function RecipeCard(props) {
  const userId = useGetUserId();
  const handleClick = () => {
    props.saveRecipe(props._id, userId);
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
          className="card__image--img"
          src={props.imageUrl}
          alt="Recipe Image"
        />
        <div
          data-saved={props.savedRecipesId.includes(props._id) ? true : false}
          onClick={handleClick}
          className="save"
        >
          {props.savedRecipesId.includes(props._id) ? "Saved" : "Save"}
        </div>
      </div>
      <div className="recipe__details">
        <div className="recipe__details--title">
          <h3 className="recipe__details--title-el">{props.name}</h3>
        </div>
        <div className="recipe__details--gradients">
          <span className="el-title">Gredients: </span>
          {props.ingredients.map((ingredient) => {
            return (
              <span className="el-value">
                {ingredient}
                {", "}
              </span>
            );
          })}
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
            {props.submittedBy?.fullname
              ? props.submittedBy?.fullname
              : "Unknown"}
          </h4>
        </div>
        <div className="recipe__details--cookingtime">
          <span className="el-title">Cooking Time:</span>
          <h4 className="recipe__details--cookingtime-item el-value">
            {props.cookingTime ? props.cookingTime : 30} min
          </h4>
        </div>
      </div>
    </div>
  );
}

/*

<div className="card">
      <div className="card__image">
        <img
          className="card__image--img"
          src="https://static.toiimg.com/photo/62601713.cms"
          alt="Recipe Image"
        />
      </div>
      <div className="recipe__details">
        <div className="recipe__details--title">
          <h3 className="recipe__details--title-el">Chhola Bhatura</h3>
        </div>
        <div className="recipe__details--gradients">
          <span className="el-title">Gredients: </span>
          <h4 className="el-value">item1, item2, chhola, Matar</h4>
        </div>
        <div className="recipe__details--instructions">
          <span className="el-title">Instruction:</span>
          <h4 className="el-value">
            some recipe instruction ...
            <button type="button" className="readmore__btn">
              Read More
            </button>
          </h4>
        </div>
        <div className="recipe__details--author">
          <span className="el-title">Added By: </span>
          <h4 className="recipe__details--author-item el-value">
            Shubham Pandey
          </h4>
        </div>
        <div className="recipe__details--cookingtime">
          <span className="el-title">Cooking Time:</span>
          <h4 className="recipe__details--cookingtime-item el-value">45 min</h4>
        </div>
      </div>
    </div>

/////////////////////////////////////////////////////////////////////

<div className="card">
      <div className="card__image">
        <img
          className="card__image--img"
          src={props.imageUrl}
          alt="Recipe Image"
        />
      </div>
      <div className="recipe__details">
        <div className="recipe__details--title">
          <h3 className="recipe__details--title-el">{props.name}</h3>
        </div>
        <div className="recipe__details--gradients">
          <span className="el-title">Gredients: </span>
          {props.ingredients.map((ingredient) => {
            return (
              <span className="el-value">
                {ingredient}
                {", "}
              </span>
            );
          })}
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
            Shubham Pandey
          </h4>
        </div>
        <div className="recipe__details--cookingtime">
          <span className="el-title">Cooking Time:</span>
          <h4 className="recipe__details--cookingtime-item el-value">
            {props.cookingTime ? props.cookingTime : 30} min
          </h4>
        </div>
      </div>
    </div>

    */
