import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeConfig } from "workbench/canvas/actions";
import { getElementById, isDrawerOpen } from "workbench/selectors";

import ConfigElementSwitch from "workbench/canvas/ConfigElementSwitch";

class ConfigElementSwitchContainer extends Component {
  static propTypes = {
    dispatchCloseConfig: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    elementConfig: PropTypes.object
  };

  render() {
    return <ConfigElementSwitch {...this.props} />;
  }
}

const mapStateToProps = state => ({
  elementConfig: getElementById(state),
  isDrawerOpen: isDrawerOpen(state),
  session: state.sessionReducer.session,
  ...state.elementConfigReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchCloseConfig: () => dispatch(closeConfig())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ConfigElementSwitchContainer
);
