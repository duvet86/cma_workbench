import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import NavigationTabsContainer from "sideBar/navigationTabs/NavigationTabsContainer";
import SideBarBodyContainer from "sideBar/SideBarBodyContainer";

const drawerPaperStyles = {
  position: "relative"
};

const styles = {
  drawerOpen: {
    ...drawerPaperStyles,
    width: 300
  },
  drawerClosed: {
    ...drawerPaperStyles,
    width: 0
  }
};

const SideBar = ({ classes, open, ...props }) => (
  <Drawer
    classes={{
      paper: open ? classes.drawerOpen : classes.drawerClosed
    }}
    variant="persistent"
    open={open}
  >
    <NavigationTabsContainer {...props} />
    <SideBarBodyContainer {...props} />
  </Drawer>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
