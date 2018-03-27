import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateQueryDataService, addQueryColumn } from "workbench/actions";
import { dataServicesRequest } from "workbench/query/actions";

import {
  getQuery,
  getDataServices,
  getAvailableColumns,
  getQueryColumns
} from "workbench/query/selectors";

import QueryConfig from "workbench/query/QueryConfig";

class QueryConfigContainer extends Component {
  static propTypes = {
    elementConfig: PropTypes.object.isRequired,
    dataServices: PropTypes.array.isRequired,
    selectedColumns: PropTypes.array.isRequired,
    dispatchDataServicesRequest: PropTypes.func.isRequired,
    dispatchDescribeQuery: PropTypes.func.isRequired,
    dispatchAddQueryColumn: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.dispatchDataServicesRequest();
  }

  handleChangeDataService = selectedDataServiceId => {
    const { elementConfig, dispatchDescribeQuery } = this.props;
    dispatchDescribeQuery(elementConfig.ElementId, {
      TargetDataServiceId: selectedDataServiceId
    });
  };

  handleAddQueryColumn = column => {
    const { elementConfig, dispatchAddQueryColumn } = this.props;
    dispatchAddQueryColumn(elementConfig.ElementId, column);
  };

  render() {
    console.log({ ...this.props });
    return (
      <QueryConfig
        {...this.props}
        handleChangeDataService={this.handleChangeDataService}
        handleAddQueryColumn={this.handleAddQueryColumn}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.queryConfigReducer,
  elementConfig: getQuery(state),
  dataServices: getDataServices(state),
  availableColumns: getAvailableColumns(state),
  selectedColumns: getQueryColumns(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchDataServicesRequest: () => dispatch(dataServicesRequest()),
  dispatchDescribeQuery: (elementId, query) =>
    dispatch(updateQueryDataService(elementId, query)),
  dispatchAddQueryColumn: (elementId, column) =>
    dispatch(addQueryColumn(elementId, column))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QueryConfigContainer
);
