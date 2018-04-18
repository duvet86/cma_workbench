import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";

import SearchableList from "workbench/query/SearchableList";

const ColumnsSelector = ({
  availableColumns,
  selectedColumns,
  handleAddQueryColumn,
  handleRemoveQueryColumn
}) => (
  <Grid container spacing={16}>
    <Grid item xs={6}>
      <SearchableList
        label="Available Columns"
        columns={availableColumns}
        onColumnClick={handleAddQueryColumn}
      />
    </Grid>
    <Grid item xs={6}>
      <SearchableList
        label="Selected Columns"
        columns={selectedColumns}
        onColumnClick={handleRemoveQueryColumn}
      />
    </Grid>
  </Grid>
);

ColumnsSelector.propTypes = {
  availableColumns: PropTypes.array.isRequired,
  selectedColumns: PropTypes.array.isRequired,
  handleAddQueryColumn: PropTypes.func.isRequired,
  handleRemoveQueryColumn: PropTypes.func.isRequired
};

export default ColumnsSelector;
