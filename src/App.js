import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Login from "login/components/Login";
import { loginRequest } from "login/actions";

class App extends Component {
  render() {
    const { submitHandler, isLoading, error, token } = this.props;
    if (error) {
      return <div>{error}</div>;
    }
    if (token && !isLoading) {
      return <div>{token}</div>;
    }
    if (isLoading) {
      return <div>Loading</div>;
    }
    return <Login submitHandler={submitHandler} />;
  }
}

App.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string
};

const mapStateToProps = ({ loginReducer }) => {
  const { isLoading, token, error } = loginReducer;

  return {
    isLoading,
    token,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  submitHandler: (username, password) => {
    dispatch(loginRequest(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
