// API service for backend communication

const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

// Sudoku API calls
export const sudokuApi = {
  getAllGames: async () => {
    const response = await fetch(`${API_BASE_URL}/sudoku`);
    if (!response.ok) throw new Error('Failed to fetch games');
    return response.json();
  },

  getGame: async (gameId) => {
    const response = await fetch(`${API_BASE_URL}/sudoku/${gameId}`);
    if (!response.ok) throw new Error('Failed to fetch game');
    return response.json();
  },

  createGame: async (difficulty, username = 'Guest', name = null) => {
    const response = await fetch(`${API_BASE_URL}/sudoku`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ difficulty, username, name }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create game');
    }
    return response.json();
  },

  updateGame: async (gameId, data) => {
    const response = await fetch(`${API_BASE_URL}/sudoku/${gameId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update game');
    return response.json();
  },

  deleteGame: async (gameId) => {
    const response = await fetch(`${API_BASE_URL}/sudoku/${gameId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete game');
    return response.json();
  },
};

export const highScoreApi = {
  getAllHighScores: async (difficulty = null, limit = 50) => {
    let url = `${API_BASE_URL}/highscore?limit=${limit}`;
    if (difficulty) {
      url += `&difficulty=${difficulty}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch high scores');
    return response.json();
  },

  getGameHighScore: async (gameId) => {
    const response = await fetch(`${API_BASE_URL}/highscore/${gameId}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch high score');
    }
    return response.json();
  },

  submitHighScore: async (gameId, username, time) => {
    const response = await fetch(`${API_BASE_URL}/highscore`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameId, username, time }),
    });
    if (!response.ok) throw new Error('Failed to submit high score');
    return response.json();
  },
};
