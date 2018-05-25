import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import StorageIcon from "@material-ui/icons/Storage";

import SelectInput from "common/select/SelectInput";

const styles = theme => ({
  iconColour: {
    fill: "#003b86"
  }
});

const SourceSelector = ({
  classes,
  targetDataViewId,
  dataServices,
  handleChangeDataService
}) => (
  <SelectInput
    noClear
    OptionsIcon={StorageIcon}
    iconClassName={classes.iconColour}
    inputLabel="Click here to select a source..."
    value={targetDataViewId}
    options={dataServices}
    handleChange={handleChangeDataService}
  />
);

SourceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  dataServices: PropTypes.array.isRequired,
  handleChangeDataService: PropTypes.func.isRequired,
  targetDataViewId: PropTypes.string
};

export default withStyles(styles)(SourceSelector);
