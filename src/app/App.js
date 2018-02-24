import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import TopBarContainer from "topBar/TopBarContainer";
import SideBar from "sideBar/SideBar";
import AppBody from "appBody/AppBody";

const styles = {
  bodyContainer: {
    height: "100%",
    width: "100%",
    display: "flex"
  }
};

const App = ({ classes, handleDrawerOpen, open, ...props }) => (
  <Fragment>
    <TopBarContainer handleDrawerOpen={handleDrawerOpen} />
    <div className={classes.bodyContainer}>
      <SideBar open={open} {...props} />
      <AppBody />
    </div>
  </Fragment>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(App);
