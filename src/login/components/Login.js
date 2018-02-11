import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "login/components/Input";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  setUsername = username => {
    this.setState({ username: username });
  };

  setPassword = password => {
    this.setState({ password: password });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.submitHandler(username, password);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Input
          id="username"
          labelName="Username: "
          inputType="text"
          parentFunction={this.setUsername}
        />
        <Input
          id="password"
          labelName="Password: "
          inputType="password"
          parentFunction={this.setPassword}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Login.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  token: PropTypes.string
};
