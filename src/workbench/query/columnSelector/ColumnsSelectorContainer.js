import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addQueryColumn, removeQueryColumn } from "workbench/actions";

import {
  getAvailableColumns,
  getQueryColumns
} from "workbench/query/selectors";

import ColumnsSelector from "workbench/query/columnSelector/ColumnsSelector";

class ColumnsSelectorContainer extends Component {
  static propTypes = {
    elementId: PropTypes.number.isRequired,
    availableColumns: PropTypes.array.isRequired,
    selectedColumns: PropTypes.array.isRequired,
    dispatchAddQueryColumn: PropTypes.func.isRequired,
    dispatchRemoveQueryColumn: PropTypes.func.isRequired
  };

  handleAddQueryColumn = column => {
    const { elementId, dispatchAddQueryColumn } = this.props;
    dispatchAddQueryColumn(elementId, column);
  };

  handleRemoveQueryColumn = ({ ColumnName }) => {
    const { elementId, dispatchRemoveQueryColumn } = this.props;
    dispatchRemoveQueryColumn(elementId, ColumnName);
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
