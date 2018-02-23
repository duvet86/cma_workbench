import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemAvatar, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";

import Dashboard from "material-ui-icons/Dashboard";

import NavigationTabs from "sideBar/NavigationTabs";

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
  },
  list: {
    padding: 0
  },
  listItem: {
    cursor: "pointer"
  },
  avatar: {
    width: 35,
    height: 35
  },
  icon: {
    width: 25,
    height: 25
  }
};

const SideBar = ({ classes, open }) => (
  <Drawer
    classes={{
      paper: open ? classes.drawerPaperOpen : classes.drawerPaperClosed
    }}
    variant="persistent"
    open={open}
  >
    <NavigationTabs />
    <List className={classes.list}>
      <ListItem component={NavLink} to="/workbench/1">
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <Dashboard className={classes.icon} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PageBuilder Item 1" />
      </ListItem>
      <Divider />
      <ListItem component={NavLink} to="/workbench/2">
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <Dashboard className={classes.icon} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PageBuilder Item 2" />
      </ListItem>
      <Divider />
    </List>
  </Drawer>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
