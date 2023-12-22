export default function MenuIcon(props) {
  return (
    <div
      onClick={() => props.setShowNavbar((prev) => !prev)}
      className="menu"
      aria-hidden={!props.showNavbar}
    >
      <div className="menu__bars"></div>
      <div className="menu__bars"></div>
      <div className="menu__bars"></div>
    </div>
  );
}
