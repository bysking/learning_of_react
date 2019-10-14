import React from 'react'
// import Square from '../square/square'

class Board extends React.Component {
  // constructor (p) { // 构造函数
  //   super(p) // 接着必须先调用超类构造函数
  //   this.state = { // 设置组件状态
  //     squares: Array(9).fill(null),
  //     xIsNext: true //下一步落子是否为X
  //   }
  // }


  renderSquare(i) {

    function Square(props) {
      return(
        <button className="square" onClick={() => {
          props.onClick()
        }}>
          {props.value}
        </button>
      )
    }

    return (
      <Square
        value={this.props.squares[i]} // 传给子组件的value
        onClick={ // 传给子组件阿函数
          () => {
            this.props.onClick(i)
          }
        }
      />
    );
  }

  // handleClick(i) {
  //   // console.log(i)
  //   let squares = this.state.squares.slice() // slice不传参数数组的深度拷贝
  //   // 一般来说，有两种改变数据的方式。第一种方式是直接修改变量的值，第二种方式是使用新的一份数据替换旧数据
  //   //     直接修改数据

  //   // var player = {score: 1, name: 'Jeff'};
  //   // player.score = 2;
  //   // player 修改后的值为 {score: 2, name: 'Jeff'}

  //   // 新数据替换旧数据

  //   // var player = {score: 1, name: 'Jeff'};

  //   // var newPlayer = Object.assign({}, player, {score: 2});
  //   // player 的值没有改变, 但是 newPlayer 的值是 {score: 2, name: 'Jeff'}

  //   // 使用对象展开语法，就可以写成：
  //   // var newPlayer = {...player, score: 2};
  //   // squares[i] = 'X'
  //   if(!squares[i]) {
  //     this.state.xIsNext ? squares[i]='X' : squares[i]='O'
  //     this.setState({
  //       xIsNext: !this.state.xIsNext
  //     })
  //   }
  //   this.setState({
  //     squares:squares
  //   })
  // }

  render() {
    // const status = 'Next player: X';
    // let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // const result = this.calculateWinner(this.state.squares) // 一开始我放在点击方法里面，但是不是会延迟一个事件判断，后来根据官方，放到render里面解决问题
    // if(result) {
    //   status = 'Winner: ' + result;
    // }
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
export default Board