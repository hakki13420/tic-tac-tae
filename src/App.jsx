import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Turn from './components/turn'

const Result = ({ winner, resetGame }) => {
  return (
    <div className="result">
      {!winner && <span class="draw">Draw</span>}
      {winner && <span class="winner">The winner is : {winner}</span>}
      <button onClick={resetGame}> Reset the Game</button>
    </div>
  )
}

function App() {
  const [tour, setTour] = useState("o")
  const [boards, setBoards] = useState(new Array(9).fill(null))
  const [winKeys, setWinKeys] = useState(new Array(3).fill(null))
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setTour("o")
    setBoards(new Array(9).fill(null))
    setWinKeys(new Array(3).fill(null))
    setWinner(null)
  }


  return (
    <div className='container'>
      <Board setTour={setTour}
        tour={tour}
        boards={boards}
        setBoards={setBoards}
        setWinKeys={setWinKeys}
        winKeys={winKeys}
        setWinner={setWinner}
        winner={winner}
      />
      <Turn tour={tour}
        setBoards={setBoards}
        setTour={setTour}
        winKeys={winKeys}
      />
      {
        winner != null && <Result resetGame={resetGame}
          winner={winner}
        />
      }
    </div>
  )
}

export default App
