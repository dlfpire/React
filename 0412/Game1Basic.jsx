import React from 'react';
import './Game.css';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

const Board = () => {
  const renderSquare = (i) =>  <Square value={i}/>
  const status = 'Next player: X';
  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  )
}

const Square = (props) => {
  
  return (
    <button
      className="square"
      onClick={() => console.log('click')} >
      {props.value}
    </button>
  )
}

export default Game;