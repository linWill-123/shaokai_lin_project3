import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { ROUTES } from "../../constants/routes";

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    if (formData.password !== formData.verifyPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration attempted:", formData);
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Create Account</h1>
          <p className="login-subtitle">Join Kai's Sudoku Community!</p>

          <form className="input-label-align-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="verifyPassword">Verify Password</label>
              <input
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                value={formData.verifyPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="password-requirements">
              <h4>Password Requirements:</h4>
              <ul>
                <li>at least 8 characters long</li>
                <li>contains at least one uppercase, lowercase letter</li>
                <li>Contains at least one number</li>
              </ul>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary sign-in-btn" type="submit">
                Create Account
              </button>
            </div>
          </form>

          <div className="login-footer">
            <p>
              Already have an account?{" "}
              <Link to={ROUTES.LOGIN} className="sign-up-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
