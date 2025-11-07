import "./RulesPage.css";

export const RulesPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">How to Play Sudoku</h1>
      <div className="rules-content">
        <div className="rule-section">
          <h2>Rules</h2>
          <div>
            <div className="rule-item">
              <h3>Setup</h3>
              <p>
                Sudoku is played on a grid. We have Easy games that use a 6x6
                grid, while hard games use a 9x9 grid. For 6x6 grids, use
                numbers 1-6. For 9x9 grids, use numbers 1-9. Each number can
                only appear once in each row, column, and box.
              </p>
            </div>
            <div className="rule-item">
              <h3>Goal</h3>
              <p>
                Fill every empty cell in the grid so that each row, column, and
                box contains all the numbers exactly once.
              </p>
            </div>
            <div className="rule-item">
              <h3>Example:</h3>
              <p>
                Fill every empty cell in the grid so that each row, column, and
                box contains all the numbers exactly once.
              </p>
            </div>
          </div>
        </div>

        <div className="credits-section">
          <h2>Credits</h2>
          <div className="credits-content">
            <p>
              <strong>Made by:</strong> Kai
            </p>
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
    </div>
  );
};
