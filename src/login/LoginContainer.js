import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginRequest } from "login/actions";

import LoadingContainer from "common/LoadingContainer";
import Login from "login/Login";

class LoginContainer extends Component {
  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object
  };

  componentWillMount() {
    document.body.style.backgroundColor = "#eee";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    const { isLoading, error, ...rest } = this.props;

    return (
      <LoadingContainer isLoading={isLoading} error={error}>
        <Login {...rest} />
      </LoadingContainer>
    );
  }
}

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
