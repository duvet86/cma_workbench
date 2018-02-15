import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginRequest } from "login/actions";

import Loading from "common/Loading";
import Login from "login/components/Login";

class LoginContainer extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#eee";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    const { submitHandler, isLoading, ...props } = this.props;
    if (isLoading) {
      return <Loading {...props} />;
    }
    return <Login submitHandler={submitHandler} />;
  }
}

LoginContainer.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ loginReducer: { isLoading, error } }) => ({
  isLoading,
  error
});

const mapDispatchToProps = dispatch => ({
  submitHandler: (username, password) => {
    dispatch(loginRequest(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
