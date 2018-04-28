import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";

const styles = theme => ({
  formControl: {
    flexBasis: 200,
    margin: theme.spacing.unit
  }
});

const IntervalTypeSelector = ({
  classes,
  intervalTypes,
  selectedIntervalType
}) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="interval">Interval</InputLabel>
    <Select
      value={selectedIntervalType}
      onChange={this.handleChange}
      input={<Input name="interval" id="interval" />}
      autoWidth
    >
      {intervalTypes.map(({ IntervalType, Label }) => (
        <MenuItem key={IntervalType} value={IntervalType}>
          {Label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

IntervalTypeSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  intervalTypes: PropTypes.array.isRequired,
  selectedIntervalType: PropTypes.string.isRequired
};

export default withStyles(styles)(IntervalTypeSelector);
