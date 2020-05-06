import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: true };
  }

  setChild = () => {
    this.state.showChild
      ? this.setState({ showChild: false })
      : this.setState({ showChild: true });
  };

  componentDidUpdate = () => {
    console.log("I'm updating");
  };

  render() {
    let child;
    this.state.showChild ? (child = <Child />) : (child = "");

    return (
      <>
        <button onClick={this.setChild}>click me</button>
        {child}
      </>
    );
  }
}
export default Parent;
