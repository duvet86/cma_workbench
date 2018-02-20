import React, { Component, Fragment } from "react";
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

class App extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <TopBarContainer handleDrawerOpen={this.handleDrawerOpen} />
        <div className={classes.bodyContainer}>
          <SideBar open={this.state.open} />
          <AppBody />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
