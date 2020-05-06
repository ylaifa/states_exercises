import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log("I'm mounting");
  };

  componentWillUnmount = () => {
    console.log("I'm unmounting");
  };

  render() {
    return (
      <>
        <p>Child component</p>
      </>
    );
  }
}
export default Child;
