import React, { createElement } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import { operatorsExtraInfo } from "sideBar/operators/operatorsData";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";

import LoaderContainer from "common/LoaderContainer";
import SelectInput from "common/select/SelectInput";

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
  }
});

const QueryDrawer = ({
  classes,
  isLoading,
  selectedDataServiceId,
  dataServices,
  handleChange
}) => (
  <LoaderContainer isLoading={isLoading}>
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
        value={selectedDataServiceId}
        options={dataServices}
        handleChange={handleChange}
      />
    </Grid>
  </LoaderContainer>
);

QueryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedDataServiceId: PropTypes.string.isRequired,
  dataServices: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(QueryDrawer);
