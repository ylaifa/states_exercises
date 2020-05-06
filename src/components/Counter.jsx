import React, { Component } from "react";
import Number from "./Number";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentNumber: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ currentNumber: this.state.currentNumber + 1 });
  };

  decrement = () => {
    this.setState({ currentNumber: this.state.currentNumber - 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.decrement}>-</button>
        <Number number={this.state.currentNumber} />
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
export default Counter;
