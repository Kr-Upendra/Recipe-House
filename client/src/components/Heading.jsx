import PropTypes from "prop-types";

export default function Heading({
  headingTitle,
  paraText,
  fontSize,
  textAlign,
}) {
  const textStyle = {
    fontSize: `${fontSize}rem`,
    textAlign: textAlign,
  };
  return (
    <>
      <div className="headingbox">
        <h1 style={textStyle} className="headingbox__text">
          {headingTitle}
        </h1>
        {paraText && <p>{paraText}</p>}
      </div>
    </>
  );
}

Heading.propTypes = {
  headingTitle: PropTypes.string.isRequired,
  paraText: PropTypes.string,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
};
