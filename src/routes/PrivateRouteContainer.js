import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

class PrivateRouteContainer extends Component {
  redirectWithAuth = (isAuthenticated, Component) => props =>
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    );

  render() {
    const { isAuthenticated, component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={this.redirectWithAuth(isAuthenticated, component)}
      />
    );
  }
}

const mapStateToProps = ({ loginReducer: { token } }) => ({
  isAuthenticated: !!token
});

export default connect(mapStateToProps)(PrivateRouteContainer);
