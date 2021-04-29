import React, {useState} from "react";
import Board from "../Board/index.js";
import {calculateWinner} from "../../helpers.js";
import Game from "../Game/index.js";



function PlayButton () {
    
function handleClick () {
   return( <Game />
    )
}

   return (
        <div>
        <button onClick={handleClick}>
        Play
    </button>
        </div>
    )
}

export default PlayButton;