import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "./Home.css";

export const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="logo-container">
          <img
            src="/images/kai-sudoku.png"
            alt="Kai's Sudoku Logo"
            className="sudoku-logo"
            width="256"
            height="256"
          />
        </div>

        <div>
          <h3 className="choose-title">Choose a quick game:</h3>
          <div className="difficulty-buttons">
            <Link to={ROUTES.EASY_GAME} className="difficulty-btn easy-btn">
              Easy
            </Link>
            <Link to={ROUTES.NORMAL_GAME} className="difficulty-btn medium-btn">
              Normal
            </Link>
            <Link to={ROUTES.NORMAL_GAME} className="difficulty-btn hard-btn">
              Hard
            </Link>
          </div>
          <div className="auth-section">
            <div className="auth-links">
              <Link to={ROUTES.LOGIN} className="auth-link">
                Log in
              </Link>
              <span className="separator">|</span>
              <Link to={ROUTES.REGISTER} className="auth-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="credits-section">
        <h2>Kai's contact info:</h2>
        <div className="credits-content">
          <div className="contact-links">
            <a
              href="mailto:contact@linskpxsw@gmail.com"
              className="contact-link"
            >
              <span>Email</span>
            </a>
            <a href="https://github.com" className="contact-link">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" className="contact-link">
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
