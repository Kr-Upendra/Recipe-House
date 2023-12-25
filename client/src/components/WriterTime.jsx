import PropTypes from "prop-types";

export default function WriterTime({ writer, cooktime }) {
  return (
    <div className="writertime">
      <p className="writertime__element">
        <i className="material-symbols-outlined">person_edit</i>
        <span>{writer}</span>
      </p>
      <p className="writertime__element">
        <i className="material-symbols-outlined">timer</i>
        <span>{cooktime} min</span>
      </p>
    </div>
  );
}

WriterTime.propTypes = {
  writer: PropTypes.string,
  cooktime: PropTypes.number,
};
