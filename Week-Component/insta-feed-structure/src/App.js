import { Component } from "react";
import Header from "./Components/Header/Header";
import InstaPost from "./Components/InstaPost/InstaPost";
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <InstaPost />
      </div>
    );
  }
}

export default App;
