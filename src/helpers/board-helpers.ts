import { TURN } from "../components/Square";

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
]

export const getWinner = (board: TURN[], prevWinner: TURN) => {
  let winner = prevWinner;
  WINNER_COMBOS.forEach(combo => {
    const [a, b, c] = combo;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      winner = board[a];
    };
  })
  return winner;
}

export const isGameFinished = (board: TURN[], newWinner: TURN): boolean => {
  return board.every(_ => _ || newWinner)
};

export const persistMatch = (board: TURN[], turn: TURN) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', JSON.stringify(turn));
}

export const emptyBoard = [
  TURN.NULL, TURN.NULL, TURN.NULL,
  TURN.NULL, TURN.NULL, TURN.NULL,
  TURN.NULL, TURN.NULL, TURN.NULL,
]

export const initialBoard = () => {
  const boardFromStorage = window.localStorage.getItem('board');
  return boardFromStorage ? JSON.parse(boardFromStorage) : emptyBoard
}

export const initialTurn = () => {
  const turnFromStorage = window.localStorage.getItem('turn');
  return turnFromStorage ? JSON.parse(turnFromStorage) : TURN.X;
}