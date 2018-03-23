import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import ErrorPage from "errorPage/ErrorPage";

const ErrorPageContainer = ({ error, ...props }) =>
  !error ? (
    <Redirect
      to={{
        pathname: "/"
      }}
    />
  ) : (
    <ErrorPage error={error} {...props} />
  );

ErrorPageContainer.propTypes = {
  error: PropTypes.object
};

const mapStateToProps = ({ errorReducer: { error } }) => ({
  error
});

export default connect(mapStateToProps)(ErrorPageContainer);
