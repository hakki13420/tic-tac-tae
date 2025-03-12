import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Turn from './components/turn'
import Result from './components/result'

function App() {
  const [tour, setTour] = useState(() => {
    return window.localStorage.getItem("tour")
      ? JSON.parse(window.localStorage.getItem("tour"))
      : "o"
  })
  const [boards, setBoards] = useState(() => {
    return window.localStorage.getItem("boards")
      ? JSON.parse(window.localStorage.getItem("boards"))
      : new Array(9).fill(null)
  })
  console.log(boards, window.localStorage.getItem("boards"))
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
      <button className="btn" onClick={resetGame}>reset Game</button>
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
