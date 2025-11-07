import { useState } from "react";
import { Link } from "react-router-dom";
import "./SelectionPage.css";
import { ROUTES } from "../../constants/routes";

export const SelectionPage = () => {
  const [activeTab, setActiveTab] = useState("All Games");

  const gameItems = [
    {
      date: "September 22, 2025",
      difficulty: "Medium",
      difficultyClass: "medium-btn",
      title: "Weekend Challenge",
      author: "Curated by Lisa Park",
      stats: ["9×9 Grid", "~18 min average"],
      link: ROUTES.NORMAL_GAME,
    },
    {
      date: "September 21, 2025",
      difficulty: "Hard",
      difficultyClass: "hard-btn",
      title: "Expert Challenge",
      author: "Curated by David Kim",
      stats: ["9×9 Grid", "~30 min average"],
      link: ROUTES.NORMAL_GAME,
    },
    {
      date: "September 20, 2025",
      difficulty: "Easy",
      difficultyClass: "easy-btn",
      title: "Relaxing Friday",
      author: "Curated by Rachel Green",
      stats: ["6×6 Grid", "~6 min average"],
      link: ROUTES.EASY_GAME,
    },
  ];

  const tabs = ["All Games", "Easy", "Medium", "Hard"];

  return (
    <div className="page-container">
      <h1 className="page-title">Sudoku Archive</h1>
      <p className="page-subtitle">Select from our collection of daily games</p>

      <div className="game-selector">
        <div className="selector-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="games-list">
        {gameItems.map((game, index) => (
          <div key={index} className="game-item">
            <div className="game-date">
              <span className="date-text">{game.date}</span>
              <span className={`difficulty-tag ${game.difficultyClass}`}>
                {game.difficulty}
              </span>
            </div>
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <p className="game-author">{game.author}</p>
              <div className="game-stats">
                {game.stats.map((stat, statIndex) => (
                  <span key={statIndex} className="stat">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
            <Link to={game.link} className="play-btn">
              Play
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
