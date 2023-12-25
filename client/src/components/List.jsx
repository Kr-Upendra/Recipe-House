/* eslint-disable react/prop-types */

export default function List(props) {
  const { listTitle, listItems } = props;

  return (
    <div className="line">
      <h3 className="line__heading">{listTitle}</h3>
      <ul className="line__list">
        {listItems?.map((item, index) => {
          return (
            <li key={index} className="line__list--item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
