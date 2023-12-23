export default function Card() {
  return (
    <article className="card">
      <div className="card__image">
        <img
          src="https://c.ndtvimg.com/2021-11/ckqd18a_gulab-jamun_625x300_03_November_21.jpg"
          alt="Recipe Image"
          className="card__image--el"
        />
        <div className="bookmark-button">
          <i className="material-symbols-outlined">bookmark</i>
        </div>
      </div>
      <div className="card__contents">
        <h1 className="card__contents--title">Almond And Rose Kheer Recipe</h1>
        <div className="card__contents--detail">
          <p className="el-xd">
            <i className="material-symbols-outlined">person_edit</i>
            <span>Dipti Sharma</span>
          </p>
          <p className="el-xd">
            <i className="material-symbols-outlined">timer</i>
            <span>25 min</span>
          </p>
        </div>
      </div>
      <button className="view-button">View Recipe</button>
    </article>
  );
}
