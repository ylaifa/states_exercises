import React from "react";
import ReactDOM from "react-dom";
import "assets/scss/styles.scss";
// import Colors from "./components/Colors";
import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Colors /> */}
        <Counter />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
