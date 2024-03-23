import React, { Component } from "react";
const NotificationText = ({ text }) => {
  <div className="notification-text">{text || "No Notification"}</div>;
};

class Notification extends Component {
  state = {
    show: true,
  };

  toggleDisplay = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="notification-widget">
        <div className="toggle-btn" onClick={this.toggleDisplay}></div>;
        {this.state.show ? <NotificationText text={this.props.text} /> : null}
      </div>
    );
  }
}

export default Notification;
