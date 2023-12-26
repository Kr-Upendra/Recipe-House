import PropTypes from "prop-types";

export default function MenuIcon({ showNavbar, setShowNavbar }) {
  const setMenuPosition = {
    position: showNavbar ? "fixed" : "absolute",
  };

  return (
    <div
      style={setMenuPosition}
      onClick={() => setShowNavbar((prev) => !prev)}
      className="menu"
      aria-hidden={!showNavbar}
    >
      <div className="menu__bars"></div>
      <div className="menu__bars"></div>
      <div className="menu__bars"></div>
    </div>
  );
}

MenuIcon.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
  setShowNavbar: PropTypes.any,
};
