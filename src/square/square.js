import React from 'react';
class Square extends React.Component {
  constructor (p) {
    super(p)
    this.state = {
      value: null
    }

  }
  render() {
    return (
      <button className="square" onClick={() => {
        // alert('click')
        this.setState({ value: 'X' }) // 每次在组件中调用 setState 时，React 都会自动更新其子组件
      }}>
        {this.state.value || '-'}
      </button>
    );
  }
}
export default Square