import React from "react";
import PropTypes from "prop-types";

import Grid from "material-ui/Grid";

import SearchbleList from "workbench/query/SearchbleList";

const ColumnsSelector = ({
  availableColumns,
  selectedColumns,
  handleAddQueryColumn,
  handleRemoveQueryColumn
}) => (
  <Grid container spacing={16}>
    <Grid item xs={6}>
      <SearchbleList
        label="Available Columns"
        columns={availableColumns}
        onColumnClick={handleAddQueryColumn}
      />
    </Grid>
    <Grid item xs={6}>
      <SearchbleList
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
