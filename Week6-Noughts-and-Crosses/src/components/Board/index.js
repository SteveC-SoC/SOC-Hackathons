import React from "react";
import Square from "../Square/index.js";

const style = {
  border: '4px darkpink',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  float: 'left',
  backgroundImage:'url(https://icon2.cleanpng.com/20180724/zsr/kisspng-tic-tac-toe-pens-clip-art-tic-tac-toe-5b56f6ca814258.5520590315324259305295.jpg)'

  
};

const Board = ({ squares, onClick}) => (
  <div style={style}>
  {squares.map ((square, i) => {
    return (
    <Square key={i} value={square} onClick={() => onClick(i)}/>
    )
  })}
  </div>
)

export default Board;