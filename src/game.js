import React from 'react'
import './game.css'
import Board from './board/board'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        {/* <div className="game-btn">
          <div onClick={() => {
            this.clearData()
          }}>重新开始</div>
        </div> */}
      </div>
    );
  }
}

export default Game