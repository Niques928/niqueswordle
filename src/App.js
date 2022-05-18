import logo from './logo.svg'
import './App.css'
import Board from './components/Board'
import {boardDefault} from './Words'
import Keyboard from './components/Keyboard'
import { createContext, useState } from 'react'



export const AppContext = createContext()

function App() {
  const [board, setBoard] =useState(boardDefault)

  const onSelectLetter = (keyVal) => {
    
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
