import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { ROUTES } from "../../constants/routes";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempted:", formData);
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Begin Sudoku Now!</p>

          <form className="input-label-align-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <a className="forgot-link" href="#">
                Forgot password?
              </a>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary sign-in-btn" type="submit">
                Sign In
              </button>
            </div>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?
              <Link to={ROUTES.REGISTER} className="sign-up-link">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
