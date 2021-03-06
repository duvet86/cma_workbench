import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import SearchableListContainer from "common/searchableList/SearchableListContainer";

const ColumnsSelector = ({
  availableColumns,
  selectedColumns,
  handleAddQueryColumn,
  handleRemoveQueryColumn
}) => (
  <Grid container spacing={16}>
    <Grid item xs={6}>
      <SearchableListContainer
        label="Available Columns"
        items={availableColumns}
        onItemClick={handleAddQueryColumn}
      />
    </Grid>
    <Grid item xs={6}>
      <SearchableListContainer
        label="Selected Columns"
        items={selectedColumns}
        onItemClick={handleRemoveQueryColumn}
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
