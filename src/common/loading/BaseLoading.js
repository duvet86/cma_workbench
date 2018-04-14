import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Typography from "material-ui/Typography";
import { LinearProgress } from "material-ui/Progress";

const styles = theme => ({
  laodingContainer: {
    margin: theme.spacing.unit * 2
  }
});

const BaseLoading = ({ classes }) => (
  <div className={classes.laodingContainer}>
    <Typography variant="title">Loading...</Typography>
    <LinearProgress variant="query" />
  </div>
);

BaseLoading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BaseLoading);
