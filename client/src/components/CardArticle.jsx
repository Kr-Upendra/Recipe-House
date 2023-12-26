import PropTypes from "prop-types";

export default function CardArticle({ image, title, desc, buttonTitle }) {
  return (
    <div className="cancer">
      <div className="cancer__image">
        <img
          className="cancer__image--img"
          src={`../images/${image}.jpg`}
          alt="photo of differ"
        />
      </div>
      <div className="cancer__detail">
        <h1 className="cancer__detail--heading">{title}</h1>
        <p className="cancer__detail--para">
          {desc
            ? desc
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit tempore, facilis perferendis totam minima aut dicta neque nulla nemo nesciunt quidem voluptates. Cupiditate et nihil iusto dolorum? Modi, dicta accusantium cum ratione aliquid rerum in qui aut libero quasi."}
        </p>
        <button className="cancer__detail--button">{buttonTitle}</button>
      </div>
    </div>
  );
}

CardArticle.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  buttonTitle: PropTypes.string,
};
