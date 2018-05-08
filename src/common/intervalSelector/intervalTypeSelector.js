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

const CustomBackdropComponent = ({ onClick }) => (
  <div
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      position: "fixed"
    }}
    onClick={onClick}
    aria-hidden="true"
  />
);

const IntervalTypeSelector = ({
  classes,
  intervalTypes,
  selectedIntervalType,
  onChange
}) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="interval">Interval</InputLabel>
    <Select
      MenuProps={{
        BackdropComponent: CustomBackdropComponent
      }}
      value={selectedIntervalType}
      onChange={onChange}
      input={<Input name="interval" id="interval" />}
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
  selectedIntervalType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(IntervalTypeSelector);
