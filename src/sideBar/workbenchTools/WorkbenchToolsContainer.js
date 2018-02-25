import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { operatorsRequest } from "sideBar/workbenchTools/actions";

import WorkbenchTools from "sideBar/workbenchTools/WorkbenchTools";

class WorkbenchToolsContainer extends Component {
  componentWillMount() {
    this.props.dispatchLoadOperators();
  }

  render() {
    return <WorkbenchTools {...this.props} />;
  }
}

WorkbenchToolsContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(
  WorkbenchToolsContainer
);
