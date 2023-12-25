import PropTypes from "prop-types";

export default function ShowError({ errorMessage }) {
  return (
    <div className="error">
      <div className="error__imagebox">
        <img
          className="error__imagebox--img"
          src="../images/error.png"
          alt="error photo"
        />
        <h2 className="error__imagebox--text">
          Ohh <br />
          SORRY
        </h2>
      </div>
      <p className="error__message">{errorMessage}</p>
    </div>
  );
}

ShowError.propTypes = {
  errorMessage: PropTypes.string,
};
