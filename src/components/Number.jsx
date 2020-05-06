import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { number } = this.props;
    return <>{number}</>;
  }
}
export default Number;
