import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import BaseLoading from "common/loading/BaseLoading";

const styles = {
  container: {
    position: "absolute",
    height: "100%",
    width: "99%",
    backgroundColor: "#eee",
    opacity: 0.7,
    zIndex: 1
  },
  loading: {
    position: "absolute",
    top: "30%",
    left: "48%"
  }
};

const BackgroundLoading = ({ classes, isLoading, pastDelay, children }) => (
  <Fragment>
    {isLoading &&
      pastDelay && (
        <div className={classes.container}>
          <div className={classes.loading}>
            <BaseLoading />
          </div>
        </div>
      )}
    {children}
  </Fragment>
);

BackgroundLoading.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired
};

export default withStyles(styles)(BackgroundLoading);
