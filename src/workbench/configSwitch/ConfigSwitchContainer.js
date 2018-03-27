import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeQueryConfig } from "workbench/query/actions";
import { isDrawerOpen } from "workbench/configSwitch/selectors";

import ConfigSwitch from "workbench/configSwitch/ConfigSwitch";

class ConfigSwitchContainer extends Component {
  static propTypes = {
    dispatchCloseQueryConfig: PropTypes.func.isRequired,
    elementType: PropTypes.string.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired
  };

  render() {
    return <ConfigSwitch {...this.props} />;
  }
}

const mapStateToProps = state => ({
  elementType: state.configSwitchReducer.elementType,
  isDrawerOpen: isDrawerOpen(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchCloseQueryConfig: () => dispatch(closeQueryConfig())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ConfigSwitchContainer
);
