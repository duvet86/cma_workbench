import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { goToStep } from "workbench/query/actions";

import StepperHeader from "workbench/query/StepperHeader";

const stepLabels = ["Source", "Columns", "Constraints", "Summary"];

class StepperHeaderContainer extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    completedSteps: PropTypes.array.isRequired,
    dispatchGoToStep: PropTypes.func.isRequired
  };

  render() {
    const { currentStep, completedSteps, dispatchGoToStep } = this.props;

    return (
      <StepperHeader
        title="Configure Query"
        stepLabels={stepLabels}
        currentStep={currentStep}
        completedSteps={completedSteps}
        dispatchGoToStep={dispatchGoToStep}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGoToStep: step => dispatch(goToStep(step))
});

export default connect(null, mapDispatchToProps)(StepperHeaderContainer);
