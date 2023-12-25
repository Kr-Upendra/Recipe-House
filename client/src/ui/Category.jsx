export default function Category() {
  return (
    <div className="category" aria-hidden="true">
      <div className="category__close">
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
