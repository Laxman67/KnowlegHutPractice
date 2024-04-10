import { Component } from "react";
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };
  }

  render() {
    return (
      <>
        <input
          value={this.state.userInput}
          onChange={(e) => this.setState({ userInput: e.target.value })}
        ></input>
        <br />
        {this.props.render(this.state.userInput)}
      </>
    );
  }
}

export default Input;
