import { useSudoku } from "../../context/SudokuContext";
import "./GameControls.css";

const GameControls = ({ onNewGame, onReset }) => {
  const { isPaused } = useSudoku();

  return (
    <div className="game-controls">
      <div className="control-group">
        <button
          className="game-btn secondary"
          onClick={onReset}
          disabled={isPaused}
        >
          Reset
        </button>
      </div>
      <div className="control-group">
        <button
          className="game-btn primary"
          onClick={onNewGame}
          disabled={isPaused}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default GameControls;
