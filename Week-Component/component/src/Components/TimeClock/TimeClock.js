import { Component } from "react";
import "./TimeClock.css";

class TimeClock extends Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount = () => {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };
  componentWillUnmount() {
    console.log(`unmount ${this.timerId}`);
    clearInterval(this.timerId);
  }

  render() {
    return <h1>{this.state.time}</h1>;
  }
}

export default TimeClock;
