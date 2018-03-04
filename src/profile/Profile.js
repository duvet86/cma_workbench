import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Grid from "material-ui/Grid";

const styles = {
  container: {
    padding: 25
  }
};

const Profile = ({ classes, userInfo: { Profile: { UserName } } }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12}>
      {UserName}
    </Grid>
  </Grid>
);

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
