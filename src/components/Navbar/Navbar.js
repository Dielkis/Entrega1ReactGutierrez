import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import nav from "./assets/nav.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">
    <img className="card-img-top" src={nav} alt="nav-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/category/cafe" className="nav-link">Cafe</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to="/category/chocolate" className="nav-link">Chocolate</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to="/category/teverde" className="nav-link">Infusión</NavLink>
        </li>
      </ul>
    </div>
    <CartWidget />
  </nav>

  )
}

export default Navbar;
