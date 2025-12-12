import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { routeConfig } from "../../routing";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

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
          
          {isAuthenticated ? (
            <div className="nav-user-section">
              <span className="nav-username">Welcome, {user?.username}!</span>
              <button onClick={handleLogout} className="nav-logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className={`nav-link ${isActive(ROUTES.LOGIN) ? "active" : ""}`}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
