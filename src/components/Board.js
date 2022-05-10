import React from 'react'
import Tile from './Tile'

function Board() {

    return (
        <div className="board">
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="row">
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
        
    )
}

export default Board