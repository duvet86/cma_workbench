import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Search from "material-ui-icons/Search";
import WorkIcon from "material-ui-icons/Work";
import BeachAccessIcon from "material-ui-icons/BeachAccess";
import Divider from "material-ui/Divider";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    display: "flex"
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
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        variant="persistent"
        open={open}
      >
        <div>
          <List>
            <ListItem>
              <ListItemText primary="Data Query" secondary="Query a data service." />
              <Avatar>
                <Search />
              </Avatar>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
