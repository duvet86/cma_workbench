import trimbleLogo from "topBar/trimbleLogo.png";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Menu, { MenuItem } from "material-ui/Menu";
import Typography from "material-ui/Typography";
import Person from "material-ui-icons/Person";

const toolbarRelativeProperties = theme => ({
  appBar: {
    position: "relative",
    zIndex: theme.zIndex.drawer + 1
  },
  trimbleLogo: {
    height: "36px",
    padding: "4px 0"
  },
  matchColor: {
    color: "#01609d"
  },
  toolBar: {
    justifyContent: "space-between",
    ...Object.keys(theme.mixins.toolbar).reduce((style, key) => {
      const value = theme.mixins.toolbar[key] - 10;
      return { ...style, [key]: value };
    }, {})
  }
});

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logoutHandler = () => {
    const { logoutHandler } = this.props;
    this.setState({ anchorEl: null });
    logoutHandler();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
            <Link to="/">
              <img
                src={trimbleLogo}
                className={classes.trimbleLogo}
                alt="trimbleLogo"
              />
            </Link>
          </div>
          <Typography variant="title" className={classes.matchColor}>
            CONNECTED MINE ANALYTIC
          </Typography>
          <div>
            <Button color="inherit" onClick={this.handleMenu}>
              <Person className={classes.matchColor} />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.logoutHandler}>Sign Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default withStyles(toolbarRelativeProperties)(MenuAppBar);
