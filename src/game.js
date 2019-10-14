import React from 'react'
import './game.css'
import Board from './board/board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: false
    }

  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const result = this.calculateWinner(current.squares);
    let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    if(result) {
      status = 'Winner: ' + result;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => {
              this.handleClick(i)
            }}
           />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div className="game-btn">
          <div onClick={() => {
            this.clearData()
          }}>重新开始</div>
        </div>
      </div>
    );
  }

  handleClick(i) {
    console.log(i)
    const history = this.state.history
    const { squares } = history[history.length - 1]
    let current = squares.slice()
    if(!current[i]) {
      this.state.xIsNext ? current[i]='X' : current[i]='O'
      this.setState({
        xIsNext: !this.state.xIsNext,
        history: history.concat([{
          squares: current
        }])
      })
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2], // 横向比较某行3个是否相同
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6], // 纵向比较连续某列三个是否相同三个
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8], // 对角线比较该线三个是否相同
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) { // 0-9
      const [a, b, c] = lines[i]; // [0,1,2]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // 某个方向上连续三个相同
        return squares[a]; // 获胜，返回获胜的号码
      }
    }
    return null; // 还没有获胜，返回null
  }
}

export default Game