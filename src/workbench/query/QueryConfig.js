import React, { createElement } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";

import LoaderContainer from "common/LoaderContainer";
import SelectInput from "common/select/SelectInput";
import ColumnSelector from "workbench/query/ColumnSelector";

const styles = theme => ({
  formControl: {
    width: "100%"
  },
  avatar: {
    backgroundColor: operatorsExtraInfo[1].backgroundColor,
    marginRight: 10
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-end"
  },
  columnsTitle: {
    padding: 15
  },
  list: {
    height: 250,
    overflow: "auto"
  },
  listItem: {
    paddingLeft: 15
  }
});

const QueryConfig = ({
  classes,
  isLoading,
  dataServices,
  availableColumns,
  selectedColumns,
  elementConfig,
  handleChangeDataService,
  handleAddQueryColumn,
  handleRemoveQueryColumn
}) => (
  <LoaderContainer background isLoading={isLoading}>
    <Grid item xs={12} className={classes.titleContainer}>
      <Avatar className={classes.avatar}>
        {createElement(operatorsExtraInfo[1].IconComponent)}
      </Avatar>
      <Typography variant="title" gutterBottom>
        Configure Query
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <SelectInput
        inputLabel="Source"
        helperText="What is the source of this query?"
        value={elementConfig.TargetDataServiceId}
        options={dataServices}
        handleChange={handleChangeDataService}
      />
    </Grid>
    <ColumnSelector
      availableColumns={availableColumns}
      selectedColumns={selectedColumns}
      handleAddColumn={handleAddQueryColumn}
      handleRemoveColumn={handleRemoveQueryColumn}
    />
  </LoaderContainer>
);

QueryConfig.propTypes = {
  classes: PropTypes.object.isRequired,
  dataServices: PropTypes.array.isRequired,
  availableColumns: PropTypes.array.isRequired,
  elementConfig: PropTypes.object.isRequired,
  handleChangeDataService: PropTypes.func.isRequired,
  handleAddQueryColumn: PropTypes.func.isRequired,
  handleRemoveQueryColumn: PropTypes.func.isRequired
};

export default withStyles(styles)(QueryConfig);
