import React, {useContext} from 'react'
import {AppContext} from "../App";

function Key({keyVal, bigKey}) {
//builds each key for the keyboard, receives a string "keyVal"
//containing the content of the key and a bigKey variable
//this determines if the key is a letter key or if it is Delete/Enter key

const {onSelectLetter, onEnter, onDelete} = useContext(AppContext)

const selectLetter = () => {
    if (keyVal === "ENTER") { //enter pressed 
    onEnter()
} else if (keyVal === "DELETE") { //delete pressed 
    onDelete()
}else { //letter key pressed
    onSelectLetter(keyVal)
}
}

return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
)

}

export default Key