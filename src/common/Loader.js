import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import BaseLoader from "common/BaseLoader";

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
};

const Loader = ({ classes, error, isLoading, pastDelay, children }) => {
  if (error) {
    // When the loader has errored.
    return <div>{JSON.stringify(error)}</div>;
  }
  if (isLoading) {
    if (pastDelay) {
      // When the loader has taken longer than the delay show a spinner.
      return (
        <div className={classes.loaderContainer}>
          <BaseLoader />
        </div>
      );
    } else {
      return null;
    }
  }

  // When the loader has finished.
  return children;
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  delay: PropTypes.number
};

export default withStyles(styles)(Loader);
