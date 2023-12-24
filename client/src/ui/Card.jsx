export default function Card(props) {
  const { title, image, writer, cooktime } = props;
  return (
    <article className="card">
      <div className="card__image">
        <img src={`${image}`} alt="Recipe Image" className="card__image--el" />
        <div className="bookmark-button">
          <i className="material-symbols-outlined">bookmark</i>
        </div>
      </div>
      <div className="card__contents">
        <h1 className="card__contents--title">{title}</h1>
        <div className="card__contents--detail">
          <p className="el-xd">
            <i className="material-symbols-outlined">person_edit</i>
            <span>{writer}</span>
          </p>
          <p className="el-xd">
            <i className="material-symbols-outlined">timer</i>
            <span>{cooktime} min</span>
          </p>
        </div>
      </div>
      <button className="view-button">View Recipe</button>
    </article>
  );
}
