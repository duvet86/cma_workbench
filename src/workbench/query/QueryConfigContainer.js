import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCompletedSteps } from "workbench/query/selectors";

import QueryConfig from "workbench/query/QueryConfig";

class QueryConfigContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    currentStep: PropTypes.number.isRequired,
    completedSteps: PropTypes.array.isRequired
  };

  render() {
    const { isLoading, currentStep, completedSteps } = this.props;

    return (
      <QueryConfig
        isLoading={isLoading}
        currentStep={currentStep}
        completedSteps={completedSteps}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.queryConfigReducer.isLoading,
  currentStep: state.queryConfigReducer.currentStep,
  completedSteps: getCompletedSteps(state)
});

export default connect(mapStateToProps)(QueryConfigContainer);
