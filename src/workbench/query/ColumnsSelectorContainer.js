import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addQueryColumn, removeQueryColumn } from "workbench/actions";

import {
  getQuery,
  getAvailableColumns,
  getQueryColumns
} from "workbench/query/selectors";

import ColumnsSelector from "workbench/query/ColumnsSelector";

class ColumnsSelectorContainer extends Component {
  static propTypes = {
    elementConfig: PropTypes.object.isRequired,
    availableColumns: PropTypes.array.isRequired,
    selectedColumns: PropTypes.array.isRequired,
    dispatchAddQueryColumn: PropTypes.func.isRequired,
    dispatchRemoveQueryColumn: PropTypes.func.isRequired
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
    const { availableColumns, selectedColumns } = this.props;

    return (
      <ColumnsSelector
        availableColumns={availableColumns}
        selectedColumns={selectedColumns}
        handleAddQueryColumn={this.handleAddQueryColumn}
        handleRemoveQueryColumn={this.handleRemoveQueryColumn}
      />
    );
  }
}

const mapStateToProps = state => ({
  elementConfig: getQuery(state),
  availableColumns: getAvailableColumns(state),
  selectedColumns: getQueryColumns(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchAddQueryColumn: (elementId, column) =>
    dispatch(addQueryColumn(elementId, column)),
  dispatchRemoveQueryColumn: (elementId, column) =>
    dispatch(removeQueryColumn(elementId, column))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ColumnsSelectorContainer
);
