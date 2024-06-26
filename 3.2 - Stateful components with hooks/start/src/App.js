import React, { Component } from "react";
import CodeInput from "./CodeInput";

class App extends Component {
  state = {
    code: "",
  };
  render() {
    return (
      <div className="container">
        <div className="product-code">{this.state.code}</div>
        <CodeInput onSet={(code) => this.setState({ code })} />
      </div>
    );
  }
}

export default App;
