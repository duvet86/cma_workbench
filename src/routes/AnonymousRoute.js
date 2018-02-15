import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "lib/authApi";

const AnonymousRoute = ({ component, ...props }) => {
  const boundRender = routeProps =>
    !isUserAuthenticated() ? (
      React.createElement(component, routeProps)
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: routeProps.location }
        }}
      />
    );

  return <Route exact {...props} render={boundRender} />;
};

AnonymousRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
};

export default AnonymousRoute;
