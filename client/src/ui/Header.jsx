import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MenuIcon from "../components/MenuIcon";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src="./images/logo.svg"
          alt="Logo of our site"
          className="header__logo--img"
        />
        <span className="header__logo--text" role="heading">
          Flavor Corner
        </span>
      </Link>
      <MenuIcon />
      <Navbar />
    </header>
  );
}
