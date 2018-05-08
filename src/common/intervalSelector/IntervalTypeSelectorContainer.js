import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  intervalTypesRequest,
  setIntervalType
} from "common/intervalSelector/actions";

import IntervalTypeSelector from "common/intervalSelector/IntervalTypeSelector";

class IntervalTypeSelectorContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedIntervalType: PropTypes.string.isRequired,
    intervalTypes: PropTypes.array.isRequired,
    dispatchIntervalTypesRequest: PropTypes.func.isRequired,
    dispatchOnIntervalTypeChange: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatchIntervalTypesRequest();
  }

  onIntervalTypeChange = event => {
    this.props.dispatchOnIntervalTypeChange(event.target.value);
  };

  render() {
    const { selectedIntervalType, intervalTypes } = this.props;

    return (
      <IntervalTypeSelector
        selectedIntervalType={selectedIntervalType}
        intervalTypes={intervalTypes}
        onChange={this.onIntervalTypeChange}
      />
    );
  }
}

const mapStateToProps = ({
  intervalReducer: { isLoading, intervalTypes, selectedIntervalType }
}) => ({
  isLoading,
  intervalTypes,
  selectedIntervalType
});

const mapDispatchToProps = dispatch => ({
  dispatchIntervalTypesRequest: () => {
    dispatch(intervalTypesRequest());
  },
  dispatchOnIntervalTypeChange: newType => {
    dispatch(setIntervalType(newType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  IntervalTypeSelectorContainer
);
