import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

const styles = {
  bodyContainer: {
    overflow: "auto",
    marginBottom: 48,
    height: "100%"
  }
};

const SideBarBody = ({ classes, renderer }) => (
  <div className={classes.bodyContainer}>{renderer()}</div>
);

SideBarBody.propTypes = {
  classes: PropTypes.object.isRequired,
  renderer: PropTypes.func.isRequired
};

export default withStyles(styles)(SideBarBody);
