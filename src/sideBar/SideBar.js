import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemAvatar, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";

import Dashboard from "material-ui-icons/Dashboard";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    display: "flex"
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
});

class SideBar extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Grid item>
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
      </Grid>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
