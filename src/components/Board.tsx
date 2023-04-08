import { useEffect, useState } from "react"
import Square, { TURN } from "./Square"
import confetti from "canvas-confetti";
import WinnerModal from "./WinnerModal";
import { emptyBoard, getWinner, isGameFinished, persistMatch } from "../helpers/board-helpers";

function Board({initialBoard, initialTurn }: {initialBoard: TURN[], initialTurn: TURN}) {
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState(initialTurn)
  const [winner, setWinner] = useState(TURN.NULL)
  const [gameFinished, setGameFinished] = useState(false)

  useEffect(() => {
    if (winner) confetti();
    persistMatch(board, turn);
  }, [board, winner, turn])

  const updateBoard = (index: number) => {
    if (board[index] || isGameFinished(board, winner)) return;
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);
    const newWinner = getWinner(newBoard, winner)
    setWinner(newWinner);
    setTurn(newTurn);
    setGameFinished(isGameFinished(newBoard, newWinner));
  }

  const resetGame = () => {
    setBoard(emptyBoard);
    setTurn(TURN.X);
    setWinner(TURN.NULL);
    setGameFinished(false);
  }

  return (<>
    <button onClick={resetGame}>Restart</button>
    <section className="game">
      {board.map((squareValue, i) => <Square updateBoard={updateBoard} key={i} index={i}>{squareValue}</Square>)}
    </section>
    <section className="turn">
      <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
      <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
    </section>
    {gameFinished && <WinnerModal winner={winner} resetGame={resetGame}/>}
  </>)
}

export default Board