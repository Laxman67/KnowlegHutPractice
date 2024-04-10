import React, { Component } from "react";

class Child extends Component {
  state = {
    count: this.props.count,
  };

  static getDerivedStateFromProps(nextProps, prevProps) {
    return {
      count: nextProps.count,
    };
  }
  render() {
    return (
      <>
        <h1>Child:{this.state.count} </h1>
      </>
    );
  }
}

export default Child;
