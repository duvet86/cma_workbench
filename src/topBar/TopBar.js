import trimbleLogo from "topBar/trimbleLogo.png";

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Menu, { MenuItem } from "material-ui/Menu";
import Typography from "material-ui/Typography";

import Person from "material-ui-icons/Person";

const styles = theme => ({
  appBar: {
    position: "relative",
    zIndex: theme.zIndex.drawer + 2
  },
  trimbleLogo: {
    height: "36px",
    padding: "4px 0"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center"
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

const TopBar = ({
  classes,
  anchorEl,
  open,
  onMenuClickHandler,
  onMenuCloseHandler,
  onWelcomePageClickHandler,
  onLogoutClickHandler,
  onProfileClickHandler,
  handleDrawerOpen,
  ...props
}) => (
  <AppBar {...props} className={classes.appBar}>
    <Toolbar className={classes.toolBar}>
      <div className={classes.iconContainer}>
        <IconButton
          className={classes.matchColor}
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
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
        <Button color="inherit" onClick={onMenuClickHandler}>
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
          onClose={onMenuCloseHandler}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={onWelcomePageClickHandler}>Welcome Page</MenuItem>
          <MenuItem onClick={onProfileClickHandler}>Profile</MenuItem>
          <MenuItem onClick={onLogoutClickHandler}>Sign Out</MenuItem>
        </Menu>
      </div>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onMenuClickHandler: PropTypes.func.isRequired,
  onMenuCloseHandler: PropTypes.func.isRequired,
  onWelcomePageClickHandler: PropTypes.func.isRequired,
  onLogoutClickHandler: PropTypes.func.isRequired,
  onProfileClickHandler: PropTypes.func.isRequired,
  anchorEl: PropTypes.object
};

export default withStyles(styles)(TopBar);
