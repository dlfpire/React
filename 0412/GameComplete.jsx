import React, {useState} from 'react';
import './Game.css';

const Game = (props) => {
    const [history, sethistory] = useState([{ squares:Array(9).fill(null) }])
    const [stepNum, setstepNum] = useState(0)
    const [xIsNext, setxIsNext] = useState(true)

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNum + 1)
        const current = newHistory[newHistory.length -1]
        const squares = current.squares.slice()
        
        if (calculateWinner(squares) || squares[i])
            return;
        squares[i] = xIsNext ? 'X' : 'O'

        sethistory(newHistory.concat([{ squares: squares }]))
        setstepNum(newHistory.length)
        setxIsNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setstepNum(step)
        setxIsNext((step % 2) === 0)
    } 

    const current = history[stepNum]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start'
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {desc}
                </button>
            </li>
        )
    })

    let status

    if (winner) { status = 'Winner: ' + winner }
    else { status = 'Next player: ' + (xIsNext ? 'X' : 'O') }

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
                <ol>{moves}</ol>
            </div>
      </div>
    );
}

const Board = (props) => {
    const renderSquare = (i) => {
        return (
            <Square
                value = {props.squares[i]}
                onClick = {() => props.onClick(i)}
            />
        )
    }

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
    return (
        <button
            className="square"
            onClick={()=>props.onClick()}
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null
}

export default Game;