import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeQueryConfig, goToStep } from "workbench/query/actions";

import ConfigActions from "workbench/query/ConfigActions";

class ConfigActionsContainer extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    completedSteps: PropTypes.array.isRequired,
    dispatchCloseQueryConfig: PropTypes.func.isRequired,
    dispatchGoToStep: PropTypes.func.isRequired
  };

  render() {
    const {
      currentStep,
      completedSteps,
      dispatchCloseQueryConfig,
      dispatchGoToStep
    } = this.props;

    return (
      <ConfigActions
        currentStep={currentStep}
        completedSteps={completedSteps}
        dispatchCloseConfig={dispatchCloseQueryConfig}
        dispatchGoToStep={dispatchGoToStep}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGoToStep: step => dispatch(goToStep(step)),
  dispatchCloseQueryConfig: () => dispatch(closeQueryConfig())
});

export default connect(null, mapDispatchToProps)(ConfigActionsContainer);
