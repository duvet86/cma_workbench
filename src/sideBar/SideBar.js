import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemAvatar, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";

import Dashboard from "material-ui-icons/Dashboard";

const styles = {
  drawerPaper: {
    position: "relative",
    width: 250
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

class SideBar extends React.Component {
  render() {
    const { classes, open } = this.props;

    return (
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant="persistent"
        open={open}
      >
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
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
