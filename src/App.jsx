import { Table } from './componets/tablero'
import { Turno } from './componets/turno'
import { Ganador } from './componets/ganador'
import { useState } from 'react'
import './App.css'


const WINER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]




function App() {
  const [turno, setTurno] = useState(false);
  const [puesto, setPuesto] = useState(Array(9).fill(null))
  const [g, setG] = useState(false)


  
  const cambioTurno = () => {
    setTurno(!turno);
  }


  const reset = () => {
    setPuesto(Array(9).fill(null))
    setTurno(false);
    return false
    
  }

  const chekWinner = (board) => {

    for (const n of WINER_COMBOS) {
      const [a, b, c] = n

      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a]
      }
    }
    return null

  }

  const opacity = (winer) => {
    
    if(winer){
      setG(winer)
    }else if(winer==false){
      setG(null)
    }
    
  }

  return (
    <>
      <h1>Tic tac toc</h1>
      <main style={g ? { opacity: 0.5, pointerEvents:"none" } : { opacity: 1 }} >
        <button className='reset' onClick={()=>{reset()}}>Nuevo juego</button>
        <Table cambio={cambioTurno} activeTurno={turno} puestos={puesto} check={chekWinner} opacity={opacity} reset={reset} />
        <Turno  activeTurno={turno} />
      </main>
      {
        g ? <Ganador g={g} opacity={opacity} /> : null
      }
    </>
  )
}

export default App
