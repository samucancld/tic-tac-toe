import Square, { TURN } from "./Square";

function WinnerModal({winner, resetGame}: {winner: TURN, resetGame: () => void}) {
  return <>
    <section className="winner">
      <div className="text">
        <h2>{winner === TURN.NULL ? 'Tie' : 'The winner is'}</h2>

        <header className="win">
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Restart</button>
        </footer>

      </div>
    </section>
  </>
}


export default WinnerModal