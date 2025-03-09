import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Turn from './components/turn'

function App() {
  const [tour, setTour] = useState("o")
  const [boards, setBoards] = useState(new Array(9).fill(null))
  const [winKeys, setWinKeys] = useState(new Array(3).fill(null))
  return (
    <div className='container'>
      <Board setTour={setTour}
        tour={tour}
        boards={boards}
        setBoards={setBoards}
        setWinKeys={setWinKeys}
        winKeys={winKeys}
      />
      <Turn tour={tour}
        setBoards={setBoards}
        setTour={setTour}
        winKeys={winKeys}
      />
    </div>
  )
}

export default App
