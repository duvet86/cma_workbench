import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";

import NavigationTabsContainer from "sideBar/navigationTabs/NavigationTabsContainer";
import SideBarBodyContainer from "sideBar/SideBarBodyContainer";

const drawerPaperStyles = {
  position: "relative"
};

const styles = {
  drawerPaperOpen: {
    ...drawerPaperStyles,
    width: 300
  },
  drawerPaperClosed: {
    ...drawerPaperStyles,
    width: 0
  }
};

const SideBar = ({ classes, open, ...props }) => (
  <Drawer
    classes={{
      paper: open ? classes.drawerPaperOpen : classes.drawerPaperClosed
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
