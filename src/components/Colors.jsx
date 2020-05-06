import React, { Component } from "react";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastColor: "red"
    };
    this.showLastColor = this.showLastColor.bind(this);
  }

  showLastColor = resource => {
    this.setState({
      lastColor: resource
    });
  };

  render() {
    let { lastColor } = this.state;

    return (
      <>
        <div className="wrap-row">
          <div
            onClick={() => this.showLastColor("red")}
            className="square red"
          ></div>
          <div
            onClick={() => this.showLastColor("blue")}
            className="square blue"
          ></div>
          <div
            onClick={() => this.showLastColor("yellow")}
            className="square yellow"
          ></div>
          <div
            onClick={() => this.showLastColor("green")}
            className="square green"
          ></div>
        </div>
        <p>The last color clicked is {lastColor}</p>
      </>
    );
  }
}

export default Colors;
