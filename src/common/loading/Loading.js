import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import BaseLoading from "common/loading/BaseLoading";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
};

const Loading = ({ classes, error, isLoading, pastDelay, children }) => {
  if (error) {
    // When the loader has errored.
    return (
      <div className={classes.container}>
        <Typography variant="headline">{JSON.stringify(error)}</Typography>
      </div>
    );
  }
  if (isLoading) {
    if (pastDelay) {
      // When the loader has taken longer than the delay show a spinner.
      return (
        <div className={classes.container}>
          <BaseLoading />
        </div>
      );
    } else {
      return null;
    }
  }

  // When the loader has finished.
  return children;
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  delay: PropTypes.number
};

export default withStyles(styles)(Loading);
