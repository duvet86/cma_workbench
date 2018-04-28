import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { intervalTypesRequest } from "common/intervalSelector/actions";

import IntervalTypeSelector from "common/intervalSelector/IntervalTypeSelector";

class IntervalTypeSelectorContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedIntervalType: PropTypes.string.isRequired,
    intervalTypes: PropTypes.array.isRequired,
    dispatchIntervalTypesRequest: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatchIntervalTypesRequest();
  }

  render() {
    const { selectedIntervalType, intervalTypes } = this.props;

    return (
      <IntervalTypeSelector
        selectedIntervalType={selectedIntervalType}
        intervalTypes={intervalTypes}
      />
    );
  }
}

const mapStateToProps = ({
  intervalReducer: { isLoading, intervalTypes }
}) => ({
  isLoading,
  intervalTypes
});

const mapDispatchToProps = dispatch => ({
  dispatchIntervalTypesRequest: () => {
    dispatch(intervalTypesRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  IntervalTypeSelectorContainer
);
