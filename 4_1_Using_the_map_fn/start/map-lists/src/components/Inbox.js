import React, { Component } from "react";
import getMessages from "../services/getMessages";

class Inbox extends Component {
  state = {
    messages: []
  };

  componentDidMount = async () => {
    const fetchMessage = await getMessages();
    this.setState({
      messages: fetchMessage
    });
  };

  render() {
    return (
      <ul className="message-list">
        {this.state.messages !== 0
          ? this.state.messages.map(({ message, id }) => (
              <li key={id}>{message}</li>
            ))
          : "Data Loading..."}
      </ul>
    );
  }
}

export default Inbox;
