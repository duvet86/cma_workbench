import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import ErrorPage from "errorPage/ErrorPage";

const ErrorPageContainer = props => <ErrorPage {...props} />;

ErrorPageContainer.propTypes = {
  error: PropTypes.object
};

const mapStateToProps = ({ errorReducer: { error } }) => ({
  error
});

export default connect(mapStateToProps)(ErrorPageContainer);
