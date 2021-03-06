import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { withStyles } from "@material-ui/core/styles";

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

const App = ({ classes, handleDrawerOpen, open, isQesEnabled, ...props }) =>
  isQesEnabled ? (
    <DragDropContextProvider backend={HTML5Backend}>
      <Fragment>
        <TopBarContainer handleDrawerOpen={handleDrawerOpen} />
        <div className={classes.bodyContainer}>
          <SideBar open={open} {...props} />
          <AppBody />
        </div>
      </Fragment>
    </DragDropContextProvider>
  ) : (
    <div>Workbench features are not enabled.</div>
  );

App.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(App);
