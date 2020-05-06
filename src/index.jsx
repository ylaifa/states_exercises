import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/styles.scss";
import Colors from "./components/Colors";

class App extends React.Component {
  render() {
    return (
      <>
        <Colors />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
