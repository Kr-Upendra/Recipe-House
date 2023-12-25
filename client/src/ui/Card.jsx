import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import WriterTime from "../components/WriterTime";

export default function Card(props) {
  const { title, image, writer, cooktime, slug } = props;
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
        <WriterTime writer={writer} cooktime={cooktime} />
      </div>
      <Link to={`/all-recipes/${slug}`} className="view-button">
        View Flavor
      </Link>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cooktime: PropTypes.number.isRequired,
  writer: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
