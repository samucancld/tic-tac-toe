import './App.css'
import Board from './components/Board'
import { TURN } from './components/Square'
import { initialBoard, initialTurn } from './helpers/board-helpers'

function App() {
  return (
    <main className="board">
      <h1>🐸🆚🐷</h1>
      <Board initialBoard={initialBoard()} initialTurn={initialTurn()}/>
    </main>
  )
}

export default App
