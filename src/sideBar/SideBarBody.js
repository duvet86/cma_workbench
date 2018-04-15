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

const SideBarBody = ({ classes, tabRenderer }) => (
  <div className={classes.bodyContainer}>{tabRenderer()}</div>
);

SideBarBody.propTypes = {
  classes: PropTypes.object.isRequired,
  tabRenderer: PropTypes.func.isRequired
};

export default withStyles(styles)(SideBarBody);
