import React from "react";
import PropTypes from "prop-types";

import BaseLoading from "common/loading/BaseLoading";

const LoadingAsync = ({ error, pastDelay, timedOut }) => {
  if (error) {
    // When the loader has errored
    return <div>{JSON.stringify(error)}</div>;
  }
  if (timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time...</div>;
  }
  if (pastDelay) {
    // When the loader has taken longer than the delay or is loading
    return <BaseLoading />;
  }

  // When the loader has just started
  return null;
};

LoadingAsync.propTypes = {
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
  error: PropTypes.object
};

export default LoadingAsync;
