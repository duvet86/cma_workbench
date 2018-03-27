import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import BaseLoader from "common/BaseLoader";

const styles = {
  container: {
    position: "absolute",
    height: "100%",
    width: "99%",
    backgroundColor: "#eee",
    opacity: 0.7,
    zIndex: 1
  },
  loader: {
    position: "absolute",
    top: "30%",
    left: "48%"
  }
};

const BackgroundLoader = ({ classes, isLoading, pastDelay, children }) => (
  <Fragment>
    {isLoading &&
      pastDelay && (
        <div className={classes.container}>
          <div className={classes.loader}>
            <BaseLoader />
          </div>
        </div>
      )}
    {children}
  </Fragment>
);

BackgroundLoader.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired
};

export default withStyles(styles)(BackgroundLoader);
