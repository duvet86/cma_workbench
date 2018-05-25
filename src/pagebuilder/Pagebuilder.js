import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const styles = {
  container: {
    padding: 25
  }
};

const Pagebuilder = ({ classes }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12}>
      Workbench
    </Grid>
  </Grid>
);

Pagebuilder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pagebuilder);
