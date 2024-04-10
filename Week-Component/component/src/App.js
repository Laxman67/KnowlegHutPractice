import React, { Component } from "react";
import "./App.css";
import TimeClock from "./Components/TimeClock/TimeClock";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showClock: false,
    };
  }
  render() {
    return (
      <div className="app-container">
        <button
          style={{
            backgroundColor: "red",
            padding: "5px ",
            border: "5px solid red",
            borderRadius: "5px ",
          }}
          onClick={() => this.setState({ showClock: !this.state.showClock })}
        >
          {this.state.showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {this.state.showClock && <TimeClock />}
      </div>
    );
  }
}

export default App;
