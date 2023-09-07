import { makeUnderstandAble } from "../utils/Utils";

const InputFields = ({ inputType, inputName, handleChange }) => {
  return (
    <div className="recipe__inputs">
      <label htmlFor={inputName} className="recipe__inputs--label">
        {inputName === "name" ? "Recipe Title" : makeUnderstandAble(inputName)}
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        className="recipe__inputs--input"
        required
        onChange={handleChange}
        placeholder={
          `${inputName}`.startsWith("cooking")
            ? `Add ${makeUnderstandAble(inputName)} (in min)`
            : inputName === "name"
            ? "Recipe Title"
            : `Add ${makeUnderstandAble(inputName)}`
        }
      />
    </div>
  );
};

export default InputFields;
