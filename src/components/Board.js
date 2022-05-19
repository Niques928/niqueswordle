import React from 'react'
import Letter from './Letter'

function Board() {

    return (
        <div className="board">
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
            <div className="row">
                <Letter letterPos = {0} attemptVal = {0}/>
                <Letter letterPos = {1} attemptVal = {0}/>
                <Letter letterPos = {2} attemptVal = {0}/>
                <Letter letterPos = {3} attemptVal = {0}/>
                <Letter letterPos = {4} attemptVal = {0}/>
            </div>
        </div>
        
    )
}

export default Board