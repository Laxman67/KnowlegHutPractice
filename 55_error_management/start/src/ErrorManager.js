import React, { Component } from "react";
import logger from "./logger";

class ErrorManager extends Component {
  state = {
    error: false,
  };
  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  componentDidCatch(error) {
    logger(error);
  }
  render() {
    // ***********When there is an Error ********

    if (this.state.error) {
      // Render a  error UI
      return (
        <div className="error">
          {/* Display Fallback ui Image */}
          <img src="./failWhale.jpg" alt="There was an error!" />
          {/* Setting error to False */}
          <div
            className="reset-btn"
            onClick={() => {
              this.setState({ error: false });
              this.props.onClose();
            }}
          >
            Close
          </div>
        </div>
      );
    }
    // ***************ERROR Handle END********

    return this.props.children;
  }
}

export default ErrorManager;
