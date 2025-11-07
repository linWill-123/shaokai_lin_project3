import "./HighScoresPage.css";

export const HighScoresPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">High Scores</h1>
      <p className="page-subtitle">Best players in Kai's Sudoku</p>

      <div className="leaderboard-section">
        <div className="leaderboard">
          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">1</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
                fill="#1C274C"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player1</span>
              <span className="stats">342 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">2</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
              <path
                d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player2</span>
              <span className="stats">298 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">3</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
                fill="#1C274C"
              />
              <path
                d="M9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z"
                fill="#1C274C"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <path
                d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
                fill="#1C274C"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player3</span>
              <span className="stats">276 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">4</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
            </svg>
            <div className="player-info">
              <span className="username">Player4</span>
              <span className="stats">234 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">5</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
              <path
                d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player5</span>
              <span className="stats">198 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">6</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
            </svg>
            <div className="player-info">
              <span className="username">Player6</span>
              <span className="stats">187 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">7</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
                fill="#1C274C"
              />
              <path
                d="M9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z"
                fill="#1C274C"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <path
                d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
                fill="#1C274C"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player7</span>
              <span className="stats">156 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">8</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
            </svg>
            <div className="player-info">
              <span className="username">Player8</span>
              <span className="stats">143 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">9</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.39747 15.5534C8.64413 15.2206 9.11385 15.1508 9.44661 15.3975C10.175 15.9373 11.0541 16.25 12 16.25C12.9459 16.25 13.825 15.9373 14.5534 15.3975C14.8862 15.1508 15.3559 15.2206 15.6025 15.5534C15.8492 15.8862 15.7794 16.3559 15.4466 16.6025C14.4742 17.3233 13.285 17.75 12 17.75C10.715 17.75 9.5258 17.3233 8.55339 16.6025C8.22062 16.3559 8.15082 15.8862 8.39747 15.5534ZM16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5ZM9 12C9.55228 12 10 11.3284 10 10.5C10 9.67157 9.55228 9 9 9C8.44772 9 8 9.67157 8 10.5C8 11.3284 8.44772 12 9 12Z"
                fill="#1C274C"
              />
            </svg>
            <div className="player-info">
              <span className="username">Player9</span>
              <span className="stats">128 games completed</span>
            </div>
          </div>

          <div className="leaderboard-item">
            <div className="rank">
              <span className="rank-number">10</span>
            </div>
            <svg
              className="player-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                fill="#1C274C"
              />
              <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#1C274C" />
            </svg>
            <div className="player-info">
              <span className="username">Player10</span>
              <span className="stats">112 games completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
