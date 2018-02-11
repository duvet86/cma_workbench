import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  changeHandler = e => {
    this.props.parentFunction(e.target.value);
  };

  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input
          type={this.props.inputType}
          id={this.props.id}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parentFunction: PropTypes.func.isRequired
};
