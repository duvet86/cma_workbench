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
    interval: PropTypes.object.isRequired,
    intervalTypes: PropTypes.array.isRequired,
    dispatchIntervalTypesRequest: PropTypes.func.isRequired,
    dispatchOnIntervalTypeChange: PropTypes.func.isRequired,
    error: PropTypes.object,
    className: PropTypes.string
  };

  componentDidMount() {
    this.props.dispatchIntervalTypesRequest();
  }

  onIntervalTypeChange = event => {
    this.props.dispatchOnIntervalTypeChange({ type: event.target.value });
  };

  render() {
    const { className, interval, intervalTypes } = this.props;

    return (
      <IntervalTypeSelector
        className={className}
        interval={interval}
        intervalTypes={intervalTypes}
        onChange={this.onIntervalTypeChange}
      />
    );
  }
}

const mapStateToProps = ({
  intervalReducer: { isLoading, intervalTypes, interval }
}) => ({
  isLoading,
  intervalTypes,
  interval
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
