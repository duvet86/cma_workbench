import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  //graphSaveChangesRequest,
  //graphPushRequest,
  updateQueryDataService,
  addQueryColumn,
  removeQueryColumn
} from "workbench/actions";
import {
  closeQueryConfig,
  goToStep,
  dataServicesRequest
} from "workbench/query/actions";

import {
  getQuery,
  getDataServices,
  getAvailableColumns,
  getQueryColumns,
  getConstraintTargets,
  getCompletedSteps
} from "workbench/query/selectors";

import QueryConfig from "workbench/query/QueryConfig";

class QueryConfigContainer extends Component {
  static propTypes = {
    elementConfig: PropTypes.object.isRequired,
    dataServices: PropTypes.array.isRequired,
    selectedColumns: PropTypes.array.isRequired,
    dispatchGoToStep: PropTypes.func.isRequired,
    dispatchDataServicesRequest: PropTypes.func.isRequired,
    dispatchDescribeQuery: PropTypes.func.isRequired,
    dispatchAddQueryColumn: PropTypes.func.isRequired,
    dispatchRemoveQueryColumn: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {
      //dispatchGraphPushRequest,
      //dispatchGraphSaveChangesRequest,
      dispatchDataServicesRequest
    } = this.props;

    //dispatchGraphSaveChangesRequest();
    //dispatchGraphPushRequest();
    dispatchDataServicesRequest();
  }

  handleChangeDataService = selectedDataServiceId => {
    const { elementConfig, dispatchDescribeQuery } = this.props;
    dispatchDescribeQuery(elementConfig.ElementId, {
      TargetDataViewId: selectedDataServiceId
    });
  };

  handleAddQueryColumn = column => {
    const { elementConfig, dispatchAddQueryColumn } = this.props;
    dispatchAddQueryColumn(elementConfig.ElementId, column);
  };

  handleRemoveQueryColumn = ({ ColumnName }) => {
    const { elementConfig, dispatchRemoveQueryColumn } = this.props;
    dispatchRemoveQueryColumn(elementConfig.ElementId, ColumnName);
  };

  render() {
    return (
      <QueryConfig
        {...this.props}
        handleChangeDataService={this.handleChangeDataService}
        handleAddQueryColumn={this.handleAddQueryColumn}
        handleRemoveQueryColumn={this.handleRemoveQueryColumn}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.queryConfigReducer,
  elementConfig: getQuery(state),
  dataServices: getDataServices(state),
  availableColumns: getAvailableColumns(state),
  selectedColumns: getQueryColumns(state),
  contraintTargets: getConstraintTargets(state),
  completedSteps: getCompletedSteps(state)
});

const mapDispatchToProps = dispatch => ({
  //dispatchGraphSaveChangesRequest: () => dispatch(graphSaveChangesRequest()),
  //dispatchGraphPushRequest: () => dispatch(graphPushRequest()),
  dispatchGoToStep: step => dispatch(goToStep(step)),
  dispatchCloseQueryConfig: () => dispatch(closeQueryConfig()),
  dispatchDataServicesRequest: () => dispatch(dataServicesRequest()),
  dispatchDescribeQuery: (elementId, query) =>
    dispatch(updateQueryDataService(elementId, query)),
  dispatchAddQueryColumn: (elementId, column) =>
    dispatch(addQueryColumn(elementId, column)),
  dispatchRemoveQueryColumn: (elementId, column) =>
    dispatch(removeQueryColumn(elementId, column))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QueryConfigContainer
);
