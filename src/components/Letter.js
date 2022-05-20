import React, {useContext} from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
  
    const {board, correctWord, currAttempt} = useContext(AppContext)
    const letter = board[attemptVal][letterPos]

    const letterState = currAttempt.attempt > attemptVal 

    return <div className="tile" id={letterState}>{letter}</div>
}

export default Letter 