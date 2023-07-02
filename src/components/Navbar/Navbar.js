import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <button className="navbar-toggler btn btn-success">Ecommerce</button>
      </Link>
      <nav className="navbar navbar-expand-small navbar-light bg-light">
        <div className="container-fluid nav justify-content-center">
          <div className="navbar-toggler">
            <NavLink
              to={"/category/cafe"}
              className={({ isActive }) =>
                isActive ? `AtiveOption` : `Opcion`
              }
            >
              Cafe
            </NavLink>
            <NavLink
              to={"/category/chocolate"}
              className={({ isActive }) =>
                isActive ? `AtiveOption` : `Opcion`
              }
            >
              Chocolate
            </NavLink>
            <NavLink
              to={"/category/infusion"}
              className={({ isActive }) =>
                isActive ? `AtiveOption` : `Opcion`
              }
            >
              Infusión
            </NavLink>
            <button className="navbar-toggler btn btn-success">
              <CartWidget />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
