import React, {useState} from "react";
import Board from "../Board/index.js";
import {calculateWinner} from "../../helpers.js";

const styles = {
    width:'200px',
    margin: '20px',
    textFont: ""
};

const Game = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i =>{
 //shallow copy of array      
    const boardArray = [...board];
// if we click or game won
        if (winner || boardArray [i]) return;
// putting an X or O in a square.
        boardArray[i] = xIsNext ? '💩' : '❤️';
        setBoard(boardArray);
//setter for x is next ! to return opposite value
        setXIsNext(!xIsNext); 
    }

    const jumpTo =() => {

    }

    const renderMoves = () => (
    <button onClick={()=> setBoard(Array(9).fill(null))}>
        Start Game
    </button>
    )


    return (
        <div>
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
            <p>{winner ? 'Winning Player!: ' + winner : 'Next Player: ' + (xIsNext ? '💩' : '❤️')}</p>
            {renderMoves()}
        </div>
        </div>
    )
}

export default Game;