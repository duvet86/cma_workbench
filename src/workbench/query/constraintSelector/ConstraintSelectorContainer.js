import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getConstraintVectorValue } from "workbench/utils";

import {
  addQueryConstraint,
  updateQueryConstraintType,
  updateQueryConstraintValues,
  removeQueryConstraint
} from "workbench/actions";
import { filterCapabilitiesRequest } from "workbench/query/actions";

import {
  getQueryConstraints,
  getConstraintTargets
} from "workbench/query/selectors";

import ConstraintSelector from "workbench/query/constraintSelector/ConstraintSelector";

class ConstraintSelectorContainer extends Component {
  static propTypes = {
    elementId: PropTypes.number.isRequired,
    filterCapabilities: PropTypes.object.isRequired,
    queryConstraints: PropTypes.array.isRequired,
    contraintTargets: PropTypes.array.isRequired,
    dispatchFilterCapabilitiesRequest: PropTypes.func.isRequired,
    dispatchAddQueryConstraint: PropTypes.func.isRequired,
    dispatchUpdateQueryConstraintType: PropTypes.func.isRequired,
    dispatchUpdateQueryConstraintValues: PropTypes.func.isRequired,
    dispatchRemoveQueryConstraint: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatchFilterCapabilitiesRequest();
  }

  handledAddQueryConstraint = selectedConstraintTarget => {
    const {
      elementId,
      queryConstraints,
      dispatchAddQueryConstraint,
      filterCapabilities
    } = this.props;
    // For a new constraint default the filterType to the first value
    // of filter capabilities for the selected dataType.
    const constraintTarget = {
      ...selectedConstraintTarget,
      FilterType: filterCapabilities[selectedConstraintTarget.DataType][0].Type
    };

    dispatchAddQueryConstraint(
      elementId,
      queryConstraints.length,
      constraintTarget
    );
  };

  handledUpdateQueryConstraintType = constraintId => event => {
    const { elementId, dispatchUpdateQueryConstraintType } = this.props;

    dispatchUpdateQueryConstraintType(
      elementId,
      constraintId,
      event.target.value
    );
  };

  handledUpdateQueryConstraintValues = (constraintId, dataType) => event => {
    const { elementId, dispatchUpdateQueryConstraintValues } = this.props;

    const valuesObj = getConstraintVectorValue(dataType, event.target.value);

    dispatchUpdateQueryConstraintValues(
      elementId,
      constraintId,
      valuesObj.vectorValues,
      valuesObj.valuesHint
    );
  };

  handledRemoveQueryConstraint = constraintId => () => {
    const { elementId, dispatchRemoveQueryConstraint } = this.props;

    dispatchRemoveQueryConstraint(elementId, constraintId);
  };

  render() {
    const {
      queryConstraints,
      filterCapabilities,
      contraintTargets
    } = this.props;

    return (
      <ConstraintSelector
        queryConstraints={queryConstraints}
        filterCapabilities={filterCapabilities}
        contraintTargets={contraintTargets}
        handledAddQueryConstraint={this.handledAddQueryConstraint}
        handledUpdateQueryConstraintType={this.handledUpdateQueryConstraintType}
        handledUpdateQueryConstraintValues={
          this.handledUpdateQueryConstraintValues
        }
        handledRemoveQueryConstraint={this.handledRemoveQueryConstraint}
      />
    );
  }
}

const mapStateToProps = state => ({
  queryConstraints: getQueryConstraints(state),
  filterCapabilities: state.queryConfigReducer.filterCapabilities,
  contraintTargets: getConstraintTargets(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchFilterCapabilitiesRequest: () =>
    dispatch(filterCapabilitiesRequest()),
  dispatchAddQueryConstraint: (elementId, constraintId, constraintTarget) =>
    dispatch(addQueryConstraint(elementId, constraintId, constraintTarget)),
  dispatchUpdateQueryConstraintType: (
    elementId,
    constraintId,
    constraintType
  ) =>
    dispatch(
      updateQueryConstraintType(elementId, constraintId, constraintType)
    ),
  dispatchUpdateQueryConstraintValues: (
    elementId,
    constraintId,
    constraintValues
  ) =>
    dispatch(
      updateQueryConstraintValues(elementId, constraintId, constraintValues)
    ),
  dispatchRemoveQueryConstraint: (elementId, constraintId) =>
    dispatch(removeQueryConstraint(elementId, constraintId))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ConstraintSelectorContainer
);
