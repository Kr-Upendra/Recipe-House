import { capitilize } from "../utils/Utils";

const DynamicInput = ({ items, onItemsChange, forItem }) => {
  const handleValueChange = (event, index) => {
    const { value } = event.target;
    const list = [...items];
    list[index] = value;
    onItemsChange(list);
  };

  const addItemsInput = () => {
    const newList = [...items, ""];
    onItemsChange(newList);
  };

  const removeItemsInput = (index) => {
    const list = [...items];
    list.splice(index, 1);
    onItemsChange(list);
  };

  const inputWidth = {
    width: "90%",
    borderRight: "0px solid transparent",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  return (
    <div className="recipe__inputs">
      <label htmlFor={forItem} className="recipe__inputs--label">
        {capitilize(forItem)}
      </label>

      {items.map((item, index) => {
        return (
          <div key={index} className="recipe__inputs--item">
            <input
              type="text"
              style={items.length !== 1 ? inputWidth : {}}
              id={forItem}
              name={forItem}
              className="recipe__inputs--input"
              placeholder={"Add " + capitilize(forItem)}
              required
              value={item}
              onChange={(e) => handleValueChange(e, index)}
            />
            {items.length !== 1 && (
              <img
                onClick={removeItemsInput}
                src="/cross.png"
                alt="Cross button"
                className="el-cross"
              />
            )}
          </div>
        );
      })}
      <button
        onClick={addItemsInput}
        type="button"
        className={`more__${forItem}`}
      >
        Add More
      </button>
    </div>
  );
};

export default DynamicInput;
