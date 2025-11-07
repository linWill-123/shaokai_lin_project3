import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { routeConfig } from "../../routing";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to={ROUTES.HOME} className="nav-brand">
          Sudoku Master
        </Link>

        <div className="nav-menu">
          {routeConfig
            .filter((route) => route.showInNav)
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`nav-link ${isActive(route.path) ? "active" : ""}`}
              >
                {route.name}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
