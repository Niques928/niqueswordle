import logo from './logo.svg'
import './App.css'
import Board from './components/Board'
import {boardDefault} from './Words'
import Keyboard from './components/Keyboard'
import { createContext, useState } from 'react'




export const AppContext = createContext()

function App() {
  const [board, setBoard] =useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

  const onSelectLetter = (keyVal) => {
    if(currAttempt.letterPos > 4) return; // User already entered 5 letters
    const newBoard = [...board] // copy of current state of the board
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal // set new letter
    setBoard(newBoard) // update board
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1}) // update letter pos
    
  }

  const onDelete = () => {

  }

  const onEnter = () => {

  }
  return (

  <div className="App">
  <nav>
    <h1>Wordle</h1>
  </nav>
  <AppContext.Provider value = {{
    board,
    setBoard,
    currAttempt,
    setCurrAttempt,
    onSelectLetter,
    onEnter,
    onDelete
  }}>
  <div className="game">
  <Board/>
  <Keyboard />
  </div>
  </AppContext.Provider>
</div>
  )
}

export default App
