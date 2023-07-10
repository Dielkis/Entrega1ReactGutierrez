import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fondo">
      <Link to="/" className="navbar-brand">
        <span className="brand-text">Inicio</span>
        <BiSolidCoffeeTogo />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto justify-content-center">
          <li className="nav-item">
            <NavLink exact to="/category/cafe" className="nav-link" activeClassName="active">
              Cafe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/category/chocolate" className="nav-link" activeClassName="active">
              Chocolate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/category/teverde" className="nav-link" activeClassName="active">
              Infusión
            </NavLink>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
