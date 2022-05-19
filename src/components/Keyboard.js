import React, {useEffect, useContext ,useCallback} from 'react'
import Key from './Key'
import {AppContext} from "../App"

function Keyboard() {
    const {onSelectLetter, onEnter, onDelete} = useContext(AppContext)
  
  
    // The keyboard is split in three rows, so each one of these arrays declares the keys
    // at each row
    const keys = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"]    
    ]
  
    // Here we habdle key input from keyboard
    const handleKeyboard = useCallback((event) => {
      if (event.key === "Enter") { // User pressed Enter
        onEnter();
      } else if(event.key == "Backspace") { // user pressed the dleete key
        onDelete();
      } else { // pressed another key, so let's check if it is a letter
  
        // Loop over the letters in our 'keys' array and check if the pressed key is in the array
        keys.forEach((row) => {
          row.forEach((key) => {
            if(event.key.toLowerCase() === key.toLowerCase()) {
              onSelectLetter(key)
            }
          })
        })
      }
    })
  
    // Add the event listener so the app detects the key input from the keyboard
    useEffect(() => {
      document.addEventListener("keydown", handleKeyboard)
  
      return () => {
        document.removeEventListener("keydown", handleKeyboard)
      }
    }, [handleKeyboard])
  
    // Creates the three rows of keys, and also add the ENTER and DEL key to the third row
    return (
      <div className="keyboard" onKeyDown={handleKeyboard}>
        <div className = "row1">
          {keys[0].map((key) => {
            return <Key keyVal = {key}/>
          })}
        </div>
        <div className = "row2">
        {keys[1].map((key) => {
            return <Key keyVal = {key}/>
          })}
        </div>
        <div className = "row3">
        <Key keyVal = {"ENTER"} bigKey/>
        {keys[2].map((key) => {
            return <Key keyVal = {key}/>
          })}
        <Key keyVal = {"DEL"} bigKey/>
        </div>
      </div>
    )
  }
  
  export default Keyboard