// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './Game.css';

// To add onclick handler
// useState, clicking the button changes into X

const Game = (props) => {
  const [array, setArray] = useState({
    history: [{squares: Array(9).fill(null)}],
  })

  const [xIsNext, setxIsNext] = useState(true)

  const history = array.history
  const current = history[history.length -1 ]
  const winner = calculateWinner(current.squares)
  let status

  const handleClick = (i) => {
    const history = array.history
    const current = history[history.length -1]
    const squares = current.squares.slice() //squares 배열의 복사본
    // const squares = array.squares.slice()
    if (calculateWinner(squares) || squares[i])
      return;
    squares[i] = xIsNext ? 'X' : 'O'
    props.setArray({
      history: history.concat([{
        squares: squares
      }]), 
      xIsNext: !xIsNext
    })
  }

  if (winner) {
    status = 'Winner:' + winner
  }
  else {
    status = 'Next player: ' + (array.xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
      {array.map()}
      <Board array = {array}></Board>
    </div>
  );
}

const Board = (props) => { 
  // 사각형 9개 렌더링
  // const [array, setArray] = useState({
  //   squares: Array(9).fill(null),
  //   xIsNext: true
  // })

  const renderSquare = (i) =>
    <Square
      value={props.squares[i]}
      //value={array.squares[i]}
      onClick={() => props.onClick(i)}
      //onClick={()=>handleClick(i)}
    />
  
  // const winner = calculateWinner(props.array.squares)

  // let status

  // if (winner) {
  //   status = 'Winner:' + winner
  // }
  // else {
  //   status = 'Next player: ' + (props.array.xIsNext ? 'X' : 'O');
  // }

  return (
    <div>
        {/* <div className="status">{status}</div> */}
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
  // button 렌더링
  // const [state, setState] = useState({value: null})
  return (
    <button  
      className="square"  
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i =0; i < lines.length; i++ ) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game;