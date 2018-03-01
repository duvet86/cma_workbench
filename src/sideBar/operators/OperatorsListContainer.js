import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { operatorsRequest } from "sideBar/operators/actions";
import OperatorsList from "sideBar/operators/OperatorsList";

class OperatorsListContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    dispatchLoadOperators: PropTypes.func.isRequired,
    operators: PropTypes.object,
    error: PropTypes.object
  };

  componentWillMount() {
    this.props.dispatchLoadOperators();
  }

  render() {
    return <OperatorsList {...this.props} />;
  }
}

const mapStateToProps = ({
  operatorsReducer: { isLoading, operators, error }
}) => ({
  operators: operators,
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
