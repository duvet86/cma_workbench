import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";

import { isUserAuthenticated } from "lib/authApi";

const AuthenticatedRoute = ({ component, ...props }) => {
  const boundRender = routeProps =>
    isUserAuthenticated() ? (
      React.createElement(component, routeProps)
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: routeProps.location }
        }}
      />
    );

  return <Route exact {...props} render={boundRender} />;
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
};

export default AuthenticatedRoute;
