import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { operatorsRequest } from "sideBar/operators/actions";

import Operators from "sideBar/operators/Operators";

class OperatorsContainer extends Component {
  componentWillMount() {
    this.props.dispatchLoadOperators();
  }

  render() {
    return <Operators {...this.props} />;
  }
}

OperatorsContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  dispatchLoadOperators: PropTypes.func.isRequired,
  operators: PropTypes.array,
  error: PropTypes.object
};

const mapStateToProps = ({
  operatorsReducer: { isLoading, operators, error }
}) => ({
  isLoading,
  operators,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadOperators: () => {
    dispatch(operatorsRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OperatorsContainer);
