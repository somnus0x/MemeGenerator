import React, { Component } from "react";

class Input extends React.Component {
    render = () => {
      return (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            onFocus={this.props.onFocus}
          />
        </div>
      );
    }
  }

export default Input;