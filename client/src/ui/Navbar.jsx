import { Link, NavLink } from "react-router-dom";

const isTrue = false;

export default function Navbar() {
  return (
    <nav className="navbar" aria-hidden="false">
      <NavLink to="/all-recipes" className="navbar__items">
        Home
      </NavLink>
      {isTrue ? <UserNavbarLink /> : <WithouLoggedInNavbar />}
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
      <NavLink to="/contact" className="navbar__logout navbar__items">
        Logout
      </NavLink>
    </>
  );
}

function WithouLoggedInNavbar() {
  return (
    <>
      <NavLink to="/category" className="navbar__items">
        Category
      </NavLink>
      <NavLink to="/about" className="navbar__items">
        About
      </NavLink>
      <NavLink to="/contact" className="navbar__items">
        Contact
      </NavLink>
      <NavLink to="/signup" className="auth__button navbar__items">
        Sign up
      </NavLink>
    </>
  );
}
