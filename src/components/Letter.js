import React, {useContext} from 'react'
import {AppContext} from '../App'

function Letter({letterPos, attemptVal}) {
  
    const {board, correctWord, currAttempt} = useContext(AppContext)
    const letter = board[attemptVal][letterPos]

    return <div className="tile"> </div>
}

export default Letter 