import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getQuery, getCompletedSteps } from "workbench/query/selectors";

import QueryConfig from "workbench/query/QueryConfig";

class QueryConfigContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedQuery: PropTypes.object.isRequired,
    currentStep: PropTypes.number.isRequired,
    completedSteps: PropTypes.array.isRequired
  };

  render() {
    const {
      isLoading,
      selectedQuery,
      currentStep,
      completedSteps
    } = this.props;

    return (
      <QueryConfig
        isLoading={isLoading}
        selectedQuery={selectedQuery}
        currentStep={currentStep}
        completedSteps={completedSteps}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.queryConfigReducer.isLoading,
  selectedQuery: getQuery(state),
  currentStep: state.queryConfigReducer.currentStep,
  completedSteps: getCompletedSteps(state)
});

export default connect(mapStateToProps)(QueryConfigContainer);
