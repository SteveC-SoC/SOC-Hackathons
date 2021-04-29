import React, { useState } from "react";

const initialState = ["Eat my shorts", "don't have a cow man", "ay, caramba", "This is too cool for School (of Code)"];

function useRandomiser() {
    const [computerMove, setComputerMove] = useState("")
    

    function randomise() {
        const indexArray = (Math.floor(Math.random()*initialState.length));
        setComputerMove(initialState[indexArray]);
        
        console.log(computerMove);
    }
    return [computerMove, randomise];
}

export default useRandomiser;

