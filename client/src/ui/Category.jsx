import { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";

export default function Category() {
  const { showCategory, setShowCategory } = useContext(CategoryContext);

  return (
    <div className="category" aria-hidden={showCategory}>
      <div
        role="button"
        className="category__close"
        onClick={() => setShowCategory(true)}
      >
        <i className="material-symbols-outlined">Close</i>
      </div>
      <div className="category__title">
        <h2>Flavors Category</h2>
      </div>
      <ul className="category__list">
        <li className="category__list--items">Paneer Flavors</li>
        <li className="category__list--items">Chicken Flavors</li>
        <li className="category__list--items">Sweets</li>
        <li className="category__list--items">Milk Flavors</li>
        <li className="category__list--items">Plan Breakfast</li>
        <li className="category__list--items">Plan Lunch</li>
        <li className="category__list--items">Plan Dinner</li>
      </ul>
    </div>
  );
}
