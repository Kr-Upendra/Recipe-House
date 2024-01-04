/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CategoryContext } from "../context/categoryContext";

const isTrue = false;

export default function Navbar({ showNavbar, setShowNavbar }) {
  const { setShowCategory } = useContext(CategoryContext);

  return (
    <nav className="navbar" aria-hidden={showNavbar}>
      <NavLink
        onClick={() => setShowNavbar(false)}
        to="/all-recipes"
        className="navbar__items"
      >
        Home
      </NavLink>
      <button
        onClick={() => setShowCategory(false)}
        className="navbar__items navbar__button"
      >
        Category
      </button>

      {isTrue ? (
        <UserNavbarLink />
      ) : (
        <WithouLoggedInNavbar setShowNavbar={setShowNavbar} />
      )}
    </nav>
  );
}

function UserNavbarLink() {
  return (
    <>
      <NavLink to="/about" className="navbar__items">
        + Recipe
      </NavLink>
      <Link to="/dashboard" className="navbar__items navbar__user">
        <span className="username">Hello User</span>
        <img src="./images/default-user.png" alt="Photo of Loggedin User" />
      </Link>
      <NavLink
        to="/contact"
        className="navbar__logout navbar__items navbar__round"
      >
        Logout
      </NavLink>
    </>
  );
}

function WithouLoggedInNavbar({ setShowNavbar }) {
  return (
    <>
      <NavLink
        onClick={() => setShowNavbar(false)}
        to="/about"
        className="navbar__items"
      >
        About
      </NavLink>
      <NavLink
        onClick={() => setShowNavbar(false)}
        to="/contact"
        className="navbar__items"
      >
        Contact
      </NavLink>
      <NavLink
        onClick={() => setShowNavbar(false)}
        to="/signup"
        className="auth__button navbar__items navbar__round"
      >
        Sign up
      </NavLink>
    </>
  );
}
