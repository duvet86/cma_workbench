import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import { clearToken } from "lib/authApi";
import { logout } from "login/actions";

import TopBar from "topBar/TopBar";

const TopBarContainer = props => <TopBar {...props} />;

TopBarContainer.propTypes = {
  logoutHandler: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => {
    dispatch(logout());
    clearToken();
    dispatch(push("/login"));
  }
});

export default connect(null, mapDispatchToProps)(TopBarContainer);
