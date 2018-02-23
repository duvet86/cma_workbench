import React, { Component } from "react";

import App from "app/App";

export default class AppContainer extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <App open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
    );
  }
}
