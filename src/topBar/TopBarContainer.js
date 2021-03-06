import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import { clearToken } from "lib/sessionStorageApi";

import TopBar from "topBar/TopBar";

class TopBarContainer extends Component {
  state = {
    anchorEl: null
  };

  onMenuClickHandler = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onMenuCloseHandler = () => this.setState({ anchorEl: null });

  onWelcomePageClickHandler = () => {
    this.onMenuCloseHandler();
    const { dispatchWelcomePage } = this.props;
    dispatchWelcomePage();
  };

  onProfileClickHandler = () => {
    this.onMenuCloseHandler();
    const { dispatchProfileClick } = this.props;
    dispatchProfileClick();
  };

  onLogoutClickHandler = () => {
    this.onMenuCloseHandler();
    const { dispatchLogout } = this.props;
    dispatchLogout();
  };

  render() {
    const { anchorEl } = this.state;
    const {
      dispatchLogout,
      dispatchProfileClick,
      dispatchWelcomePage,
      ...props
    } = this.props;
    const open = Boolean(anchorEl);

    return (
      <TopBar
        {...props}
        anchorEl={anchorEl}
        open={open}
        onMenuClickHandler={this.onMenuClickHandler}
        onMenuCloseHandler={this.onMenuCloseHandler}
        onWelcomePageClickHandler={this.onWelcomePageClickHandler}
        onProfileClickHandler={this.onProfileClickHandler}
        onLogoutClickHandler={this.onLogoutClickHandler}
      />
    );
  }
}

TopBarContainer.propTypes = {
  dispatchWelcomePage: PropTypes.func.isRequired,
  dispatchLogout: PropTypes.func.isRequired,
  dispatchProfileClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  dispatchWelcomePage: () => {
    dispatch(push("/"));
  },
  dispatchLogout: () => {
    clearToken();
    dispatch(push("/login"));
  },
  dispatchProfileClick: () => {
    dispatch(push("/profile"));
  }
});

export default connect(null, mapDispatchToProps)(TopBarContainer);
