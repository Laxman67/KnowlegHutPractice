import React, { Component } from "react";
import Child from "./Component/Child";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          Incree-ment
        </button>
        <Child count={this.state.count} />
      </>
    );
  }
}

export default App;
