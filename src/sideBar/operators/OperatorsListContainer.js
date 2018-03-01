import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { operatorsRequest } from "sideBar/operators/actions";
import OperatorsList from "sideBar/operators/OperatorsList";
import { enhancedOperatorsSelector } from "sideBar/operators/selectors";

class OperatorsListContainer extends Component {
  componentWillMount() {
    this.props.dispatchLoadOperators();
  }

  render() {
    return <OperatorsList {...this.props} />;
  }
}

OperatorsListContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  dispatchLoadOperators: PropTypes.func.isRequired,
  operators: PropTypes.array,
  error: PropTypes.object
};

const mapStateToProps = ({
  operatorsReducer: { isLoading, operators, error }
}) => ({
  operators: operators && enhancedOperatorsSelector(operators),
  isLoading,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadOperators: () => {
    dispatch(operatorsRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  OperatorsListContainer
);
